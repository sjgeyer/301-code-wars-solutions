function sortArray(array) {
  if (array.length < 1) return array;
  const odds = [];
  array.forEach((num, i) => {
    const isEven = num % 2 === 0;
    if (!isEven) {
      odds.push(num);
      array[i] = null;
    }
  });
  odds.sort((a, b) => a-b);
  let oddsIndex = 0;
  array.forEach((num, i) => {
    if(num === null) {
      array[i] = odds[oddsIndex];
      oddsIndex++;
    }
  });
  return array;
}