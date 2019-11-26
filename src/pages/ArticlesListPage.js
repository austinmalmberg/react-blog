import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {

  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    fetch('/api/articles/')
      .then(response => response.json())
      .then(setArticles);
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <Button variant="primary" href="/article/new">Create New</Button>
      <ArticlesList articles={ articles }/>
    </>
  );
};

export default ArticlesListPage;
