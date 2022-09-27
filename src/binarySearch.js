// it's important to note that a binary search only works on already sorted data

const binarySearch = (list, item) => {
  let min = 0;
  let max = list.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (list[guess] === item) {
      return { guess, result: list[guess] };
    } else {
      if (list[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
};

const binarySearchObjArr = (list, key, value) => {
  let min = 0;
  let max = list.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (list[guess][key] === value) {
      return { guess, result: list[guess] };
    } else {
      if (list[guess][key] < value) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  return '';
};

export { binarySearch, binarySearchObjArr };
