function capitalize(s){
  const array = [];
  array.push(s.replace(/.{2}/g, match => {return match[0].toUpperCase() + match[1]}).replace(/[a-z]{2}$/, match => {return match[0] + match[1].toUpperCase()}));
  array.push(s.replace(/.{2}/g, match => {return match[0] + match[1].toUpperCase()}).replace(/[a-z]{2}$/, match => {return match[0].toUpperCase() + match[1]}));
  return array;
}