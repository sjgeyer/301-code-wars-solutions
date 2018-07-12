function explode(s) {
  return s.split('').map(number => number.repeat(parseInt(number))).join('');
}