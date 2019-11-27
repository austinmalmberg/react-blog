import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UpvotesSection = ({ articleName, upvotes,  setArticle }) => {

  const [ upvoteDisabled, setUpvoteDisabled ] = useState(false);

  const upvoteArticle = () => {
    setUpvoteDisabled(true);

    fetch(`/api/articles/${articleName}/upvote`, { method: 'PUT' })
      .then(response => response.json())
      .then(json => {
        setArticle(json);

        setUpvoteDisabled(false);
      });
  }

  return (
    <section id="upvotes" className="my-2 d-flex justify-content-between">
      <Button variant="primary" onClick={ upvoteArticle } disabled={ upvoteDisabled }>Upvote</Button>
      <p className="align-self-center">This article has been upvoted { upvotes } time(s)</p>
    </section>
  );

};

export default UpvotesSection;
