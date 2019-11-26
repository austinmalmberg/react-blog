import React, { useState, useEffect } from 'react';

import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {

  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    fetch('/api/articles/')
      .then(result => result.json())
      .then(setArticles);
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={ articles }/>
    </>
  );
};

export default ArticlesListPage;
