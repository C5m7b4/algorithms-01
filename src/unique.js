const unique = (arr, key) => {
  const breadcrumbs = {};
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (!breadcrumbs[arr[i][key]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i][key]] = true;
    }
  }
  return result;
};

export { unique };
