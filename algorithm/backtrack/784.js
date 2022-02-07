/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const n = s.length,
    ret = [],
    track = "";

  const backtrack = (track, start) => {
    if (start === n) {
      ret.push(track);
      return;
    }
    if (isNaN(s[start])) {
      backtrack(track + s[start].toUpperCase(), start + 1);
      backtrack(track + s[start].toLowerCase(), start + 1);
    } else {
      backtrack(track + s[start], start + 1);
    }
  };
  backtrack(track, 0);
  return ret;
};

console.log(letterCasePermutation("a1b2"));
