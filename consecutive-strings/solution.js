function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n < 1 || k > n || k <= 0) return '';
  let maxLenSoFar = 0;
  let returnString = '';
  for(let i = 0; i < n; i++) {
    let comparison = strarr.slice(i, i+k);
    if (comparison.length === k) {
      comparison = comparison.join('');
      if(comparison.length > maxLenSoFar) {
        returnString = comparison;
        maxLenSoFar = comparison.length;
      }
    }
  }
  return returnString;
}