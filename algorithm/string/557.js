/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split('')
  let i = 0;
  while (i < s.length) {
    let start = i;
    while (s[i] !== " " && i < s.length) {
      i++;
    }
    let left = start,
      right = i - 1;
      while(left < right) {
        [s[left], s[right]] =[s[right], s[left]]
        left++
        right--
    }
    while (s[i] === " " && i < s.length) {
      i++;
    }
  }
  return s.join('');
};

console.log(reverseWords("Let's take LeetCode contest"));
