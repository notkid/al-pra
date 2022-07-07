/**
 *
 * 481. 神奇字符串
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  let s1 = "1";
  let s2 = "12";
  let i = 0,
    j = 1;
  while (i < n) {
    if (s2[j] === "1") {
      s1 += s1[i] === "1" ? "2" : "1";
      i += 1;
    } else if (s2[j] === "2") {
      s1 += s1[i] === "1" ? "22" : "11";
      i += 2;
    }
    j++;
    s2 += s1[j];
  }
  let num = 0;
  for (let x = 0; x < n; x++) {
    if (s1[x] === "1") num++;
  }
  return num;
};

console.log(magicalString(3));
