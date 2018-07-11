function humanReadable(seconds) {
  let HH = Math.floor(Math.max(Math.min(seconds/3600, 99), 0));
  seconds = seconds - (HH * 3600);
  let MM = Math.floor(Math.max(Math.min(seconds/60, 59), 0));
  seconds = seconds - (MM * 60);
  let SS = Math.floor(Math.min(seconds, 59));
  HH < 10 ? HH = `0${HH}` : '';
  MM < 10 ? MM = `0${MM}` : '';
  SS < 10 ? SS = `0${SS}` : '';
  return `${HH}:${MM}:${SS}`;
}