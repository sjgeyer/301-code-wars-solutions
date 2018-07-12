function goodVsEvil(good, evil){
  let goodValue = [1, 2, 3, 3, 4, 10];
  let evilValue = [1, 2, 2, 2, 3, 5, 10];
  good = good.split(' ');
  evil = evil.split(' ');
  let total = 0;
  for (let i = 0; i < good.length; i++) {
    total += good[i]*goodValue[i];}
  for (let j = 0; j < evil.length; j++) {
    total -= evil[j]*evilValue[j];}
  if (total > 0) return 'Battle Result: Good triumphs over Evil';
  if (total < 0) return 'Battle Result: Evil eradicates all trace of Good';
  else return 'Battle Result: No victor on this battle field';
}