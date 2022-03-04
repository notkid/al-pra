/**
 *
 * 1694. 重新格式化电话号码
 *
 */

/**
 * @param {string} number
 * @return {string}
 */

var reformatNumber = function (number) {
  number = number.split("");
  const N = number.length;
  let ret = "";
  if (N === 2 || N === 1 || N === 3) {
    return number.join('-');
  }
  if (N === 4) {
    return number.splice(0, 2).join('') + "-" + number.splice(2).join('');
  }
  while (number.length > 4) {
    ret = ret + "-" + number.splice(0, 3).join('');
  }
  if (number.length === 4) {
    ret = ret + "-" + number.splice(0, 2).join('') + number.splice(0, 2).join('');
  }
  if (number.length === 1 || number.length === 2 || number.length === 3) {
    ret = ret + "-" + number.join('');
  }
  return ret;
};

console.log(reformatNumber("1-23-45 6"));
