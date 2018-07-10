const findNextCharIndex = (letter, str) => {
  let compare = letter.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > compare) {
      return i;
    }
  }
  return -1;
};

const insertMissingLetters = (str) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++) {
    let regex = new RegExp(`${str[i]}`, 'gi');
    alphabet = alphabet.replace(regex, '');
  }
  let found = '';
  const split = str.split('');
  for (let i = 0; i < str.length; i++) {
    const index = findNextCharIndex(split[i], alphabet);
    if (index >= 0 && found.indexOf(split[i]) < 0) {
      split[i] = split[i] + alphabet.slice(index).toUpperCase();
    }
    found += split[i][0];
  }
  return split.join('');
};