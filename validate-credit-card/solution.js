function validate(n){
  n = n.toString().split('').map(Number);
  n.length%2===0 ? n.forEach((x, i) => {i%2===0 ? n[i]=x*2 : n[i]=x}) :n.forEach((x, i) => {i%2===1 ? n[i]=x*2 : n[i]=x});
  n.forEach((y, i) => {y > 9 ? n[i]=y-9 : n[i]=y});
  return (n.reduce((total, num) => total+=num, 0))%10===0;
}