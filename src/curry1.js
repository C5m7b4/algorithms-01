const add = (x) => {
  return (y) => {
    return x + y;
  };
};

const curry = (fn) => {
  return function curried(...args) {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  };
};

export { add, curry };
