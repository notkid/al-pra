/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ret = [];

  for (let r = 0; r < numRows; r++) {
    const arr = new Array(r + 1).fill(1);
    for (let col = 1; col < r; col++) {
      arr[col] = ret[r - 1][col - 1] + ret[r - 1][col];
    }
    ret.push(arr);
  }
  return ret;
};

console.log(generate(5));

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate2 = function(numRows) {
    const ret = []
    for(let r = 0; r < numRows; r++) {
      const arr = new Array(r + 1).fill(1)
      for(let col = 1; col < r; col++) {
        arr[col] = ret[r-1][col -1 ] + ret[r-1][col]
      }
      ret.push(arr)
    }
    return ret
};