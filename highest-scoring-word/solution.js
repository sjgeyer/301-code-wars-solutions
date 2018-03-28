function high(x){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let reducedArray = x.split(' ').map(x => x.split('')).map(word => word
      .map((letter, i) => word[i] = alphabet.indexOf(letter)+1)
      .reduce((a, b) => a+b, 0))
  return x.split(' ')[reducedArray.indexOf(Math.max(...reducedArray))];
}