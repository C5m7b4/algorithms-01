const unique = (arr, key) => {
  const breadcrumbs = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i][key]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i][key]] = true;
    }
  }
  return result;
};

export { unique };
// in terms of time complexity this would evaluate to O(n)
// because there is only one loop
// this also fixes a bug where the first value in the array
// was not cached, so if there was an additional object that matched
// the first object, we would no longer be unique
