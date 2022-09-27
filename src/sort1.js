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

const uniquSortObj = (arr, key, asc = true) => {
  const breadcrumbs = {};
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (!breadcrumbs[arr[i][key]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i][key]] = true;
    }
  }

  // now we need to decide if we are sorting by number or by string or by date
  return result.sort((a, b) => {
    if (typeof a[key] === 'number') {
      console.log('sorting numbers');
      return asc ? a[key] - b[key] : b[key] - a[key];
    } else if (typeof a[key] === 'string') {
      console.log('sorting strings');
      // detect if this is a date or not

      const sa = a[key].toLowerCase();
      const sb = b[key].toLowerCase();
      if (asc) {
        if (sa < sb) return -1;
        if (sa > sb) return 1;
        return 0;
      } else {
        if (sa > sb) return -1;
        if (sa < sb) return 1;
        return 0;
      }
    } else if (typeof a[key] == 'object') {
      if (Object.prototype.toString.call(a[key]) == '[object Date]') {
        const d1 = new Date(a[key].toString());
        const d2 = new Date(b[key].toString());
        if (asc) {
          return d1 - d2;
        } else {
          return d2 - d1;
        }
      }
    }
  });
};

export { uniqSort, uniquSortObj };
