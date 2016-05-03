const add = function add(a, b) {
  return a + b;
};

export const sum = function sum(init, args) {
  return args.reduce(add, init);
};
