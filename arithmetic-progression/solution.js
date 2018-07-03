function arithmeticSequenceElements(a,r,n) {
  let sum = a;
  let string = a;
  for (let i = 0; i<n-1; i++) {
    sum += r;
    string = string + `, ${sum}`;
  }
  return string;
}