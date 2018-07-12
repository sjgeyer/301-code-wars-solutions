//------------------------------------
// #1
//------------------------------------
function remove1(s){
  return s.replace(/!$/g, '')
}

//------------------------------------
// #2
//------------------------------------
function remove2(s){
  return s.replace(/!+$/g, '');
}

//------------------------------------
// #3
//------------------------------------
function remove3(s){
  console.log(s);
  return s.replace(/^!+/g, '').replace(/!+\s/g, ' ');
}

//------------------------------------
// #4
//------------------------------------
function remove4(s){
  return s.replace(/!/g, '').replace(/$/, '!');
}

//------------------------------------
// #5
//------------------------------------
function remove5(s){
  return s.replace(/!+$/g, '').replace(/!+\s/g, ' ');
}

//------------------------------------
// #6
//------------------------------------
function remove6(s,n){
  for (let i = 0; i < n; i++) {
    if (!/!/.test(s)) return s;
    else s = s.replace(/!/, '');
  }
  return s;
}

//------------------------------------
// #7
//------------------------------------
function remove7(s){
  return s.split(' ').filter(element => {
      if (element.replace(/!/, '').match(/!/) || !element.match(/!/)) return element;
  }).join(' ');
}

//------------------------------------
// #8
//------------------------------------
function remove8(s){
  let bangs = s.match(/!/g);
  if(!bangs) return s;
  s = s.replace(/!/g, '');
  bangs.forEach(bang => s = s+bang);
  return s;
}

//------------------------------------
// #9
//------------------------------------
function removeOrAdd(s){
  s = s.split(' ');
  s.forEach((element,i) => {
    if(element.match(/\w!$/)) s[i] = element.replace(/!$/, '');
    if(!element.match(/\w!$/)) s[i] = element.replace(/$/, '!');
    if(element.match(/!!$/)) s[i] = element;
  });
  return s.join(' ');
}

//------------------------------------
// #10
//------------------------------------
function remove10(s){
  const words = s.split(' ');
  words.forEach((word, i) => {
    const coreWord = word.replace(/!/g, '');
    let front = word.match(/^!+/);
    front ? front = front[0] : front = '';
    let back = word.match(/!+$/);
    back ? back = back[0] : back = '';
    while (front !== back) {
      if (front.length > back.length) front = front.substring(1);
      else back = back.substring(1);
    }
    words[i] = front + coreWord + back;
  });
  return words.join(' ');
}

//------------------------------------
// #11
//------------------------------------
function replace(s){
  return s.replace(/[aeiou]/gi, '!');
}

//------------------------------------
// #12
//------------------------------------
function remove12(s){
  const removeConsecutive = (input) => {
    const allPunc = input.match(/!+|\?+/g);
    if (allPunc) {
      allPunc.forEach((group,i) => {
        if((group.length !== 1) && (group.length % 2 !== 0)) {
          allPunc[i] = '';
        }
      });
      let tempString = allPunc.join('');
      if (tempString!== input) {
        tempString = removeConsecutive(tempString);
      }
      return tempString;
    }
    return input;
  };
  return removeConsecutive(s);
}