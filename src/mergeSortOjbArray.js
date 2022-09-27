const merge = (left, right, key, asc = true) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (asc) {
      if (left[indexLeft][key] < right[indexRight][key]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    } else {
      if (left[indexLeft][key] > right[indexRight][key]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }
  }

  return result.concat(left.slice(indexLeft).concat(right.slice(indexRight)));
};

const mergeSortObjArray = (arr, key, asc = true) => {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle of the array
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const sortedLeft = mergeSortObjArray(left, key, asc);
  const sortedRight = mergeSortObjArray(right, key, asc);
  return merge(sortedLeft, sortedRight, key, asc);
};

export { mergeSortObjArray };
