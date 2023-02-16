import { Fragment, useEffect } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useSearchParams } from "react-router-dom";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const [queryParam, setQueryParam] = useSearchParams();
  const isSortingAscending = queryParam.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    setQueryParam({ sort: queryParam.get("sort") == "asc" ? "desc" : "asc" });
  };
  useEffect(() => {
    setQueryParam({ sort: "desc" });
  }, []);
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
