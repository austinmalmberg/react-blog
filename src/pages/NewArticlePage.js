import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Button } from 'react-bootstrap';

const NewArticlePage = () => {

  const history = useHistory();

  // form fields
  const [ articleUrl, setArticleUrl ] = useState('');
  const [ articleTitle, setArticleTitle ] = useState('');
  const [ articleBody, setArticleBody ] = useState('');

  // form submit
  const [ submitDisabled, setSubmitDisabled ] = useState(false);

  const createArticle = (event) => {
    event.preventDefault();

    setSubmitDisabled(true);

    fetch('/api/articles/new', {
      method: 'POST',
      body: JSON.stringify({ articleUrl, articleTitle, articleBody }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(article => {
      setSubmitDisabled(false);

      if (article.error)
        alert(article.error);
      else
        history.push(`/article/${article.name}`);
    });
  };

  return (
    <main>
      <h1>Create Article</h1>
      <Form onSubmit={ createArticle }>
        <Form.Group controlId="formArticleTitle">
          <Form.Label>URL (optional)</Form.Label>
          <Form.Control value={ articleUrl } onChange={ (event) => setArticleUrl(event.target.value) } />
        </Form.Group>
        <Form.Group controlId="formArticleTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control value={ articleTitle } onChange={ (event) => setArticleTitle(event.target.value) } />
        </Form.Group>
        <Form.Group controlId="formArticleBody">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows="20" value={ articleBody } onChange={ (event) => setArticleBody(event.target.value) } />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={ submitDisabled }>Submit</Button>
      </Form>
    </main>
  );
};

export default NewArticlePage;
