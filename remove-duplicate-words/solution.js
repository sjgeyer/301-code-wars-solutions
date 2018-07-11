const removeDuplicateWords = s => {
  const words = s.split(' ');
  let result = '';
  let map = {};
  words.forEach(word => {
    if (!map[word]) {
      map[word] = true;
      result += `${word} `
    }
  });
  return result.replace(/\s$/, '');
};