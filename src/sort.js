const sort = (arr, key, asc = true) => {
  return arr.sort((a, b) => {
    if (typeof a[key] === 'number') {
      console.log('sorting numbers');
      return asc ? a[key] - b[key] : b[key] - a[key];
    } else if (typeof a[key] === 'string') {
      // console.log('sorting strings');
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

export { sort };
