/**
 * 393. UTF-8 编码验证
 *
 *
 */

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let numsToPreceed = 0;
  let mask1 = 1 << 7,
    mask2 = 1 << 6;
  for (let d of data) {
    if (numsToPreceed === 0) {
      let mask = 1 << 7;
      while (mask & d) {
        numsToPreceed++;
        mask = mask >> 1;
      }
      if (numsToPreceed === 0) {
        continue;
      }
      if (numsToPreceed > 4 || numsToPreceed === 1) {
        return false;
      }
    } else {
      if (!((d & mask1) && !(d & mask2))) {
        return false;
      }
    }
    numsToPreceed--;
  }
  return numsToPreceed === 0
};

const data = [39,89,227,83,132,95,10,0]

validUtf8(data)