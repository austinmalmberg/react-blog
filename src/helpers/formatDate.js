export default function formatDate(datetime) {

  if (!datetime)
    return datetime;

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(datetime);

  const [ hour, minute, half ] = [ date.getHours() % 12, date.getMinutes(), date.getHours() < 12 ? 'AM' : 'PM'];
  const [ month, day, year ] = [ monthNames[date.getMonth()], date.getDate(), date.getFullYear() ]

  return `${month} ${day}, ${year} at ${hour}:${minute} ${half}`;

}
