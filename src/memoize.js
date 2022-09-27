const times10 = (n) => {
  return n * 10;
};

// const cache = {};

// const memoTimes10 = (n) => {
//   if (n in cache) {
//     console.log('fetching from cache:', n);
//     return cache[n];
//   } else {
//     console.log('calculating result');
//     let result = times10(n);
//     cache[n] = result;
//     return result;
//   }
// };

// export { memoTimes10 };

const memoTimes10 = () => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log('fetching from cache:', n);
      return cache[n];
    } else {
      console.log('calculating result');
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoize = (cb) => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log('fetching from cache', n);
      return cache[n];
    } else {
      console.log('calulating result');
      const result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

export { memoTimes10, memoize };

// not that our cache is in the global scope
// this is not a good thing
// we should probably be using a closure to do this kind of thing
