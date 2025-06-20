/**
 * @param arr Array
 * @param item item to insert
 * @param index index at which to insert
 * @returns
 */
export function _arrayInsertAt<T>(arr: T[], item: T, index: number) {
  arr.splice(index, 0, item);
  return arr;
}

/**
 *
 * @param arr Array
 * @param index Index of the element to remove
 * @returns
 */
export function _arrayRemoveAt<T>(arr: T[], index: number) {
  arr.splice(index, 1);
  return arr;
}

/**
 * Copy array by value, all value of the array even objects will be copied by value
 * Any modification in the resulting array wont affect the original array
 * @param arr 
 * @returns The copy of the array 
 */
export function _copyArray<T>(arr: T[]): T[]  {
  
  if(!arr) {
    return arr;
  }

  return arr.map((value) => {
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        return Object.assign([], value);
      } else {
        return Object.assign({}, value);
      }
    }
    return value;
  });
}
