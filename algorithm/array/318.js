/**
 * 
 * 
318. 最大单词长度乘积 * 
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const masks = new Map();
  for (let word of words) {
    let mask = 0;
    for (i of word) {
      mask |= 1 << (i.charCodeAt() - "a".charCodeAt());
    }
    if ( (masks.get(mask) || 0) < word.length) {
      masks.set(mask, word.length);
    }
  }
  const maskArr = Array.from(masks.keys());
  let ret = 0;
  for (let mask1 of maskArr) {
    const numberA = masks.get(mask1);
    for (let mask2 of maskArr) {
      const numberB = masks.get(mask2);
      if ((mask1 & mask2) === 0) {
        ret = Math.max(ret, numberA * numberB);
      }
    }
  }
  return ret;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
