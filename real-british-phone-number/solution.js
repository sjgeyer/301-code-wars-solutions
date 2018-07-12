function validateNumber(str){
  if (/(?:^07|^447)\d{9}$/.test(str.replace(/\D/g, ''))) {return 'In with a chance';}
  return 'Plenty more fish in the sea';
}