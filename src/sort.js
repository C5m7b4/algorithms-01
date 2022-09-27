const uniqSort = (arr, asc = true) => {
  const breadcrumbs = {};
  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }

  return result.sort((a, b) => (asc ? a - b : a + b));
};

export { uniqSort };
