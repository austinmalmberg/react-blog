import React from 'react';
import { Button } from 'react-bootstrap';

const UpvotesSection = ({ articleName, upvotes,  setArticle }) => {

  const upvoteArticle = () => {
    fetch(`/api/articles/${articleName}/upvote`, { method: 'POST' })
      .then(result => result.json())
      .then( setArticle);
  }

  return (
    <section id="upvotes" className="my-2 d-flex justify-content-between">
      <Button variant="primary" onClick={ upvoteArticle }>Upvote</Button>
      <p className="align-self-center">This article has been upvoted { upvotes } time(s)</p>
    </section>
  );

};

export default UpvotesSection;
