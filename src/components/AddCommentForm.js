import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddCommentForm = ({ articleName, setArticleInfo }) => {

  const [ username, setUsername ] = useState('');
  const [ commentText, setCommentText ] = useState('');

  const addComment = () => {
    fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'POST',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => result.json())
      .then(body => {
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
      });
  };

  return (
    <>
      <div id="comment-form" className="my-3">
        <h5>Add Comment</h5>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={ username } onChange={ (event) => setUsername(event.target.value) } />
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Label>Enter Text</Form.Label>
            <Form.Control as="textarea" rows="3" value={ commentText } onChange={ (event) => setCommentText(event.target.value) } />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={ addComment }>Submit</Button>
        </Form>
      </div>
    </>
  );
}

export default AddCommentForm;
