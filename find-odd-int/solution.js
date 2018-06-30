function findOdd(A) {
  let oddInt;
  A.forEach(element => {
    let test = A.filter(x => x === element);
    if (!Number.isInteger(test.length/2)) oddInt = element;});
  return oddInt;
}