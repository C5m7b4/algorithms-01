const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const bubbleSort = (arr, asc = true) => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for (let i = 0; i < arr.length; ++i) {
    countOuter++;
    for (let j = 1; j < arr.length; ++j) {
      countInner++;
      if (asc) {
        if (arr[j - 1] > arr[j]) {
          countSwap++;
          swap(arr, j - 1, j);
        }
      } else {
        if (arr[j - 1] < arr[j]) {
          countSwap++;
          swap(arr, j - 1, j);
        }
      }
    }
  }

  console.log(`outer: ${countOuter}, inner: ${countInner}, swap: ${countSwap}`);
  return arr;
};

const bubbleSortOptimized = (arr, asc = true) => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;
  do {
    countOuter++;
    swapped = false;
    for (let i = 0; i < arr.length; ++i) {
      countInner++;
      if (asc) {
        if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
          countSwap++;
          swap(arr, i, i + 1);
          swapped = true;
        }
      } else {
        if (arr[i] && arr[i + 1] && arr[i] < arr[i + 1]) {
          countSwap++;
          swap(arr, i, i + 1);
          swapped = true;
        }
      }
    }
  } while (swapped);

  console.log(`outer: ${countOuter}, inner: ${countInner}, swap: ${countSwap}`);
  return arr;
};

const bubbleSortObjArray = (arr, key, asc = true) => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for (let i = 0; i < arr.length; ++i) {
    countOuter++;
    for (let j = 1; j < arr.length; ++j) {
      countInner++;
      if (asc) {
        if (arr[j - 1][key] > arr[j][key]) {
          countSwap++;
          swap(arr, j - 1, j);
        }
      } else {
        if (arr[j - 1][key] < arr[j][key]) {
          countSwap++;
          swap(arr, j - 1, j);
        }
      }
    }
  }
  console.log(`outer: ${countOuter}, inner: ${countInner}, swap: ${countSwap}`);
  return arr;
};

const bubbleSortOptimizedObjArray = (arr, key, asc = true) => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;
  do {
    countOuter++;
    swapped = false;
    for (let i = 0; i < arr.length; ++i) {
      countInner++;
      if (asc) {
        if (arr[i] && arr[i + 1] && arr[i][key] > arr[i + 1][key]) {
          countSwap++;
          swap(arr, i, i + 1);
          swapped = true;
        }
      } else {
        if (arr[i] && arr[i + 1] && arr[i][key] < arr[i + 1][key]) {
          countSwap++;
          swap(arr, i, i + 1);
          swapped = true;
        }
      }
    }
  } while (swapped);

  console.log(`outer: ${countOuter}, inner: ${countInner}, swap: ${countSwap}`);
  return arr;
};

export {
  bubbleSort,
  bubbleSortOptimized,
  bubbleSortObjArray,
  bubbleSortOptimizedObjArray,
};
