import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <div key={ key } className="border-bottom my-3">
        <Link to={`/article/${ article.name }`}>
          <h5>{ article.title }</h5>
        </Link>
        <p>{ article.content[0].substring(0, 150) }...</p>
      </div>
    ))}
  </>
);

export default ArticlesList;
