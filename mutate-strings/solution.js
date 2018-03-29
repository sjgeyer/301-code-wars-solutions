function mutateMyStrings(stringOne, stringTwo){
  let array = [];
  for (let i=0; i<stringOne.length+1; i++){
    let regexp1 = new RegExp('^.{' + i + '}');
    let otherLength = stringOne.length-i;
    let regexp2 = new RegExp('.{' + otherLength + '}$');
    array.push(stringTwo.match(regexp1) + stringOne.match(regexp2) + '\n');
  }
  return array.filter(function(elem, index, self) {return index === self.indexOf(elem);}).join('');
}