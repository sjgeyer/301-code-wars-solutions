function insertDash(num) {
  function isOdd (number) {
    if(!parseInt(number)) {return false;}
    return !Number.isInteger(parseInt(number)/2);
  }
  num=num.toString().split('');
  for(let i = 0; i<num.length; i++) {
    if(isOdd(num[i]) && isOdd(num[i+1])){
      num.splice(i+1, 0, '-');
      i++;
    }
  }
  return num.join('');
}