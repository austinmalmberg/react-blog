import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {

  if (articles.length === 0) {
    return (
      <p className="my-3">Please wait...</p>
    );
  }

  return (
    <>
      {articles.map((article, key) => (
        <div key={ key } className="border-bottom my-3">
          <Link to={ `/article/${ article.name }` }>
            <h4>{ article.title }</h4>
          </Link>
          <p>{ article.content[0].substring(0, 150) }...</p>
        </div>
      ))}
    </>
  );
};

export default ArticlesList;
