const logNumbers = (start, end) => {
  console.log(`iteratively looping from ${start} to ${end}`);

  for (let i = start; i <= end; ++i) {
    console.log(`hitting index ${i}`);
  }
};

const logNumbersRecursively = (start, end) => {
  console.log(`recursively looping ${start} to ${end}`);
  function recurse(i) {
    console.log(`hitting ${i}`);
    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
};

export { logNumbers, logNumbersRecursively };
