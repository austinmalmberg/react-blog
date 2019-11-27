function formatDate(datetime) {

  if (!datetime)
    return datetime;

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(datetime);

  const hour = padStart(date.getHours() <= 12 ? date.getHours() : date.getHours() - 12);
  const minute = padStart(date.getMinutes());
  const ampm = (date.getHours() < 12 ? 'AM' : 'PM');

  const month = monthNames[date.getMonth()];
  const day = padStart(date.getDate());
  const year = date.getFullYear();

  return `${month} ${day}, ${year} at ${hour}:${minute} ${ampm}`;

}

function padStart(val) {

  if (typeof val === 'string')
    return val.padStart(2, '0');

  return val.toString().padStart(2, '0');
}

export default formatDate;
