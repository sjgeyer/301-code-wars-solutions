function solve(arr){
  const alphabet='abcdefghijklmnopqrstuvwxyz';
  const resultsArray = [];
  arr.forEach(function(element) {
    let count = 0;
    for(let i = 0; i<element.length; i++) {if(element[i].toLowerCase() === alphabet[i]) {count++;}}
    resultsArray.push(count);
  });
  return resultsArray;
}