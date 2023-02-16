import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

const NewQuote = () => {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);

  const onAddQuote = (quoteData) => {
    sendRequest(quoteData);
  };

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status]);

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={onAddQuote}
    ></QuoteForm>
  );
};

export default NewQuote;
