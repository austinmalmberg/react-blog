import React, { useState, useEffect } from 'react';

import ArticlesList from './ArticlesList';

const OtherArticlesList = ({ articleName }) => {

  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(result => result.json())
      .then(allArticles => {
        setArticles(allArticles.filter(article => article.name !== articleName));
      });
  }, [articleName]);

  return (
    <section id="other-articles" className="mt-5">
      <h2>Other Articles</h2>
      <ArticlesList articles={ articles } />
    </section>
  );
};

export default OtherArticlesList;
