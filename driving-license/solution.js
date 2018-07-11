function driver(data) {
  let result = '';
  result += data[2].substring(0, 5).toUpperCase();
  while (result.length < 5) {result += 9}
  result += data[3].charAt(data[3].length-2);
  const dateOfBirth = new Date(data[3]).toLocaleDateString();
  let month = dateOfBirth.split('/')[0];
  if(month.length < 2) month = `0${month}`;
  if (data[4].toUpperCase() === 'F') {
    month = `${Number(month[0]) +5}${month[1]}`;
  }
  result += month + data[3].substring(0, 2) + data[3][data[3].length-1] + data[0][0].toUpperCase();
  if (!data[1]) {
    result += '99AA';
  } else { result += data[1][0].toUpperCase() + '9AA' }
  return result;
}