import React from 'react';

import CommentsList from './CommentsList';
import AddCommentForm from './AddCommentForm';

const CommentsSection = ({ articleName, comments, setArticleInfo }) => {

  return (
    <>
      <section id="comments" className="my-3">
        <h2>Comments</h2>
        <AddCommentForm articleName={ articleName } setArticleInfo={ setArticleInfo } />
        <CommentsList comments={ comments } />
      </section>
    </>
  );
};

export default CommentsSection;
