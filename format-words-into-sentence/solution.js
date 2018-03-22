function formatWords(words){
  let string = '';
  if (!words) {return string;}
  words = words.filter(word => word !== '');
  words.forEach((element, i) => {
    if (words.length === 1) string = element;
    else if (i === words.length-1) string += 'and ' + element;
    else string += element + ', ';
  });
  return string.replace(/,\sand/, ' and');
}