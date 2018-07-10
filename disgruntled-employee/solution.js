function off(n) {
  let switches = Array(n).fill(true);
  for (let i = 1; i <= n; i++) {
    switches.forEach((light, index) => {
      if ((index+1)%i === 0) switches[index] = !switches[index];
    })
  }
  const offIndices = [];
  switches.forEach((light, index) => {if(!light) offIndices.push(index+1)});
  return offIndices;
}