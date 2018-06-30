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