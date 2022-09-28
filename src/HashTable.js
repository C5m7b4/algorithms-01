class HashTable {
  constructor(tableSize = 25) {
    this._storage = new Array(tableSize); //.fill(0);
    this._size = tableSize;
  }

  /**
   * inserts a new key-value pair
   * @param {string} key - the key to associate with the vale
   * @param {*} value - the value to insert
   */
  insert(key, value) {
    const index = this._hash(key);
    if (!this._storage[index]) {
      this._storage[index] = [];
    }
    //ToDo: loop through array and find it key was already inserted
    this._storage[index].push([key, value]);

    //ToDo: if our storage has items that are more than half the size
    // we need to resize and then rehash everything
  }

  /**
   * Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   */
  remove(key) {
    const index = this._hash(key);
    const arrayAtIndex = this._storage[index];
    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i];
        if (keyValueArray[0] == key) {
          const returnValue = keyValueArray[1];
          arrayAtIndex.splice(i, 1);
          return returnValue;
        }
      }
    }

    return undefined;
  }

  /**
   * returns the value associated with the key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   */
  retrieve(key) {
    const index = this._hash(key);
    const arrayAtIndex = this._storage[index];
    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i];
        if (keyValueArray[0] === key) {
          return keyValueArray[1];
        }
      }
    }
    return undefined;
  }

  /**
   * Hashes string value into an integer that can be mapped to an array index
   * @param {} str - the string to be hashed
   * @returns {number} = an integer between 0 and n
   */
  _hash(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }
    console.log(`returning hash ${sum % this._size}`);
    return sum % this._size;
  }

  /**
   * resize the storage of our array
   * @param {*} newSize
   * @return nothing
   */
  resize(newSize) {
    debugger;
    this.size = newSize;
    const tempStorage = [];
    this._storage.forEach((item) => {
      const hash = this._hash(item);
      tempStorage[hash] = item;
    });

    this._storage = tempStorage;
  }

  // possible resize
  // possible handle collisions
}

export default HashTable;
