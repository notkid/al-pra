/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function(arr, k) {
    arr.sort((a, b) => a- b)
    return arr.slice(0, k)
};

