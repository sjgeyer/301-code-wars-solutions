Array.prototype.except = function(keys) {
  if (typeof keys === 'number') keys = [keys];
  return this.filter((element, i) => !keys.includes(i))
};
