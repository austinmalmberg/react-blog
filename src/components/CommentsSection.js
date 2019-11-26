import React from 'react';

import CommentsList from './CommentsList';
import AddCommentForm from './AddCommentForm';

const CommentsSection = ({ articleName, comments,  setArticle }) => {

  return (
    <section id="comments" className="my-3">
      <h2>Comments</h2>
      <AddCommentForm articleName={ articleName }  setArticle={  setArticle } />
      <CommentsList comments={ comments } />
    </section>
  );
};

export default CommentsSection;
