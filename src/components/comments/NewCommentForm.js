import { useRef } from "react";
import classes from "./NewCommentForm.module.css";
import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./../UI/LoadingSpinner";
import { useEffect } from "react";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, data: response, error } = useHttp(addComment);
  const quoteId = props.quoteId;
  const { onAddedComment } = props;

  const submitFormHandler = (event) => {
    event.preventDefault();

    const text = commentTextRef.current.value;

    sendRequest({ text: text, quoteId: quoteId });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}

      {error && <p className="centered focused">{error}</p>}

      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          required
          id="comment"
          rows="5"
          ref={commentTextRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
