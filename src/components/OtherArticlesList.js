import React from 'react';

import ArticlesList from './ArticlesList';

import articleContent from '../data/article-content';

const OtherArticlesList = ({ articleName }) => {

  const otherArticles = articleContent.filter(article => article.name !== articleName);

  return (
    <>
      <section id="other-articles" className="mt-5">
        <h2>Other Articles</h2>
        <ArticlesList articles={ otherArticles } />
      </section>
    </>
  );
};

export default OtherArticlesList;
