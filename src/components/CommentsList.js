import React from 'react';

const CommentsList = ({ comments }) => {

  if (comments.length === 0) {
    return (
      <div id="other-comments">
        <p>No comments yet.</p>
      </div>
    );
  }

  return (
    <>
      <div id="other-comments" className="my-3">
        { comments.map((comment, key) => (
          <div className={"comment px-3 py-2" + (key % 2 === 0 ? " bg-light": "")} key={ key }>
            <h5>{ comment.username }</h5>
            <p>{ comment.text }</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentsList;
