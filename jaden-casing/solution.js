String.prototype.toJadenCase = function () {
  let newArray = [];
  this.split(' ').forEach(element => newArray.push(element.replace(/^\w/, match => match.toUpperCase())));
  return newArray.join(' ');
};