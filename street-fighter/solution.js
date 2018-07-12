// ------------------------------------------------------------
// #1
// ------------------------------------------------------------
function streetFighterSelection(fighters, position, moves){
  const selectedFighters = [];
  moves.forEach(element => {
    switch(element) {
      case 'left':
        position[0]--;
        if(position[0]< 0){position[0]=5;}
        break;
      case 'right':
        position[0]++;
        if(position[0] >5) {position[0]=0;}
        break;
      case 'up':
        position[1]--;
        if (position[1] <0) {position[1] = 0;}
        break;
      case 'down':
        position[1]++;
        if (position[1]>1) {position[1] = 1;}
        break;
      default:
        break;
    }
    selectedFighters.push(fighters[position[1]][position[0]]);
  });
  return selectedFighters;
}

// ------------------------------------------------------------
// #2
// ------------------------------------------------------------
function superStreetFighterSelection(fighters, position, moves){
  const selectedFighters = [];
  let maxColumns = fighters[0].length;
  let maxRows = fighters.length;
  moves.forEach(element => {
    switch(element) {
      case 'left':
        position[1]--;
        if(fighters[position[0]][position[1]] === '') {position[1]--;}
        if(position[1]< 0){position[1]=maxColumns-1;}
        if(fighters[position[0]][position[1]] === '') {position[1]--;}
        break;
      case 'right':
        position[1]++;
        if(fighters[position[0]][position[1]] === '') {position[1]++;}
        if(position[1] > maxColumns-1) {position[1]=0;}
        if(fighters[position[0]][position[1]] === '') {position[1]++;}
        break;
      case 'up':
        position[0]--;
        if(position[0] <0) {position[0] = 0;}
        if(fighters[position[0]][position[1]] === '') {position[0]++;}
        break;
      case 'down':
        position[0]++;
        if(position[0]>maxRows-1) {position[0] = maxRows-1;}
        if(fighters[position[0]][position[1]] === '') {position[0]--;}
        break;
      default:
        break;
    }
    selectedFighters.push(fighters[position[0]][position[1]]);
  });
  return selectedFighters;
}