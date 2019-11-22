import React, { useState, useEffect } from 'react';

import UpvotesSection from '../components/UpvotesSection';
import CommentsSection from '../components/CommentsSection';
import OtherArticlesList from '../components/OtherArticlesList';

import NotFoundPage from './NotFoundPage';

import articleContent from '../data/article-content';

const ArticlePage = ({ match }) => {

  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  const [ articleInfo, setArticleInfo ] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    fetch(`/api/articles/${name}`)
      .then(result => result.json())
      .then(setArticleInfo);
  }, [name]);

  if (!article) return <NotFoundPage />;

  return (
    <>
      <article>
        <h1>{ article.title }</h1>
        { article.content.map((paragraph, key) => (
          <p key={ key }>{ paragraph }</p>
        ))}
        <UpvotesSection articleName={ article.name } upvotes={ articleInfo.upvotes } setArticleInfo={ setArticleInfo } />
        <CommentsSection articleName={ article.name } comments={ articleInfo.comments } setArticleInfo={ setArticleInfo } />
      </article>
      <OtherArticlesList articleName={ article.name } />
    </>
  );
};

export default ArticlePage;
