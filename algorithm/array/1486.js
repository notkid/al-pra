/**
 *
 * 1481. 不同整数的最少数目
 *
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const hashMap = {};
  arr.forEach((a) => {
    let v = hashMap[`${a}`];
    if (v) {
      hashMap[`${a}`] = ++v;
    } else {
      hashMap[`${a}`] = 1;
    }
  });
  let sortedArr = Object.entries(hashMap);
  sortedArr.sort((a, b) => b[1] - a[1]);
  for (let i = sortedArr.length - 1; i >= 0; i--) {
    let a = sortedArr[i];
    console.log(k - a[1])
    if (k - a[1] > 0) {
      k -= a[1];
    } else if (k - a[1] < 0) {
      return i + 1;
    } else {
      return i;
    }
  }
};

let arr = [1];

console.log(findLeastNumOfUniqueInts(arr, 1));
