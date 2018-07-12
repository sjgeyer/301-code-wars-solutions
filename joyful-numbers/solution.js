function numberJoy(n) {
  let sum = 0;
  String(n).split('').forEach(element => sum += parseInt(element))
  let backwardsSum = parseInt(String(sum).split('').reverse().join(''));
  return backwardsSum*sum === n;
}