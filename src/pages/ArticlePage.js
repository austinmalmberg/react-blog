import React from 'react';

import ArticlesList from '../components/ArticlesList';
import NotFoundPage from '../components/NotFoundPage';

import articleContent from './article-content';

const ArticlePage = ({ match }) => {

  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
      <h1>{ article.title }</h1>
      { article.content.map((paragraph, key) => (
        <p key={ key }>{ paragraph }</p>
      ))}
      <h3 className="mt-5">Other Articles</h3>
      <ArticlesList className="mt-4" articles={ otherArticles } />
    </>
  );
};

export default ArticlePage;
