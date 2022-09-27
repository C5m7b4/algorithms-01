const expect = (value) => {
  return {
    toBe: (expected) => {
      if (value == expected) {
        return console.log('test passed');
      } else {
        return console.log(
          `test failed. expected ${JSON.stringify(
            expected
          )} but received ${JSON.stringify(value)}`
        );
      }
    },
  };
};

export { expect };
