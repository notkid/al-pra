// 1408. 数组中的字符串匹配

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const result = [];
  for (let word of words) {
    if (words.some((w) => w.indexOf(word) > -1 && w !== word)) {
      result.push(word);
    }
  }
  return result;
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const wordsInString = words.join("/");
  const result = [];
  for (let word of words) {
    if (wordsInString.indexOf(word) !== wordsInString.lastIndexOf(word)) {
      result.push(word);
    }
  }
  return result;
};
