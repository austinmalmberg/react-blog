import React from 'react';

import formatDate from '../helpers/formatDate';

const Comment = ({ username, text, datetime, bglight }) => {

  datetime = formatDate(datetime);

  return (
    <div className={"comment px-3 py-2" + (bglight ? " bg-light": "")}>
      <h5>{ username }</h5>
      <p>{ text }</p>
      { datetime != null ? <p>{ datetime }</p> : '' }
    </div>
  );
};

export default Comment;
