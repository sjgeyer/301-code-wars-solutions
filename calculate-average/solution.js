function find_average(array) {
  return array.reduce((acc, current) => acc + current)/array.length;
}