/**
 *
 * 1370. 上升下降字符串
 *
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const pot = new Array(26).fill(0);
  for (let str of s) {
    pot[str.charCodeAt() - 97]++;
  }
  let ret = "";
  while (ret.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (pot[i]) {
        console.log(pot[i])
        ret += String.fromCharCode("a".charCodeAt() + i);
        pot[i]--;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (pot[i]) {
        ret += String.fromCharCode("a".charCodeAt() + i);
        pot[i]--;
      }
    }
  }
  return ret;
};

s = "aaaabbbbcccc";

console.log(sortString(s));
