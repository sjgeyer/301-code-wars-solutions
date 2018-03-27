function cubeOdd(arr) {
  let cubedArray = arr.map(x => x*x*x);
  if (cubedArray.includes(NaN)) return;
  return cubedArray.filter(x => x%2).reduce((a, b) => a+b, 0);
}