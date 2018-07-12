function tickets(peopleInLine){
  let total25 = 0;
  let total50 = 0;
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {total25++;}
    if (peopleInLine[i] === 50) {total50++; total25--;}
    if (peopleInLine[i] === 100) {
      if (total50 === 0) {total25 -= 3;}
      else {total50--; total25--;}
    }
    if (total25<0) {return 'NO';}
  }
  return 'YES';
}