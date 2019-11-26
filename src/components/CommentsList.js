import React from 'react';

import Comment from './Comment';

const CommentsList = ({ comments }) => {

  if (comments.length === 0) {
    return (
      <div id="other-comments">
        <p>No comments yet.</p>
      </div>
    );
  }

  return (
    <div id="other-comments" className="my-3">
      { comments.map((comment, key) => (
        <Comment
          key={ key }
          username={ comment.username }
          text={ comment.text }
          datetime={ comment.datetime }
          bglight={ key % 2 === 0 }
          />
      ))}
    </div>
  );
};

export default CommentsList;
