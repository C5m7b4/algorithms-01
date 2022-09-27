const joinElements = (arr, joinString) => {
  function recurse(index, resultSoFar) {
    resultSoFar += arr[index];

    if (index === arr.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, '');
};

export { joinElements };
