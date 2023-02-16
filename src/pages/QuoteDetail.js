import { useParams, Route, Routes, Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "./../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { sendRequest, status, data: quote, error } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, []);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!quote) {
    return <div className="centered focused">No quote found!</div>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="centered">
              <Link to="comments" className="btn--flat">
                Load Comments
              </Link>
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="comments"
          element={<Comments quoteId={params.quoteId} />}
        />
      </Routes>
    </>
  );
};

export default QuoteDetail;
