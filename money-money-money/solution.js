const calculateYears = (principal, interest, tax, desired) => {
  let count = 0;
  while (principal < desired){
    principal = principal*(1+interest)-(principal*interest)*tax;
    count++;}
  return count;
};