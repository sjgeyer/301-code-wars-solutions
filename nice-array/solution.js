function isNice(arr){
  let nice = false;
  for (let i = 0; i < arr.length; i++){
    if (arr.includes(arr[i]-1)| arr.includes(arr[i]+1)) {nice = true;}
    else {nice = false; return nice;}
  }
  return nice;
}