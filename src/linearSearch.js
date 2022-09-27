const linearSearch = (list, item) => {
  let index = -1;
  list.forEach((listItem, i) => {
    if (listItem === item) {
      index = i;
    }
  });
  return { index, result: list[index] };
};

const linearSearchObjArray = (arr, key, value) => {
  let index = -1;
  arr.forEach((listItem, i) => {
    if (listItem[key] == value) {
      index = i;
    }
  });

  return { index, result: arr[index] };
};

export { linearSearch, linearSearchObjArray };
