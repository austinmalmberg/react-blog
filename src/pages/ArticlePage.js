import React, { useState, useEffect } from 'react';

import UpvotesSection from '../components/UpvotesSection';
import CommentsSection from '../components/CommentsSection';
import OtherArticlesList from '../components/OtherArticlesList';

import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {

  const name = match.params.name;

  const [ article, setArticle ] = useState({ name: '', title: '', content: [], upvotes: 0, comments: [] });

  useEffect(() => {
    fetch(`/api/articles/${name}`)
      .then(result => result.json())
      .then(setArticle);
  }, [name]);

  if (!article) return <NotFoundPage />;

  return (
    <>
      <article>
        <h1>{ article.title }</h1>
        { article.content.map((paragraph, key) => (
          <p key={ key }>{ paragraph }</p>
        ))}
        <UpvotesSection articleName={ article.name } upvotes={ article.upvotes }  setArticle={  setArticle } />
        <CommentsSection articleName={ article.name } comments={ article.comments }  setArticle={  setArticle } />
      </article>
      <OtherArticlesList articleName={ article.name } />
    </>
  );
};

export default ArticlePage;
