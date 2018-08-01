function roundRobin(jobs, slice, index){
  let cc = 0;
  const queue = [...jobs];
  while (queue[index] > 0) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] > slice) {
        queue[i] -= slice;
        cc += slice;
      } else {
        cc += queue[i];
        queue[i] = 0;
        if (i === index) break;
      }
    }
  }
  return cc;
}
