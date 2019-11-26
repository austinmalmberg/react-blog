import React from 'react';

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


function formatDate(datetime) {

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (!datetime)
    return datetime;

  const date = new Date(datetime);

  const [ hour, minute, half ] = [ date.getHours() % 12, date.getMinutes(), date.getHours() < 12 ? 'AM' : 'PM'];
  const [ month, day, year ] = [ monthNames[date.getMonth()], date.getDate(), date.getFullYear() ]

  return `${month} ${day}, ${year} at ${hour}:${minute} ${half}`;

}

export default Comment;
