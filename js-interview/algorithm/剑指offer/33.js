/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  var verify = function (postorder, i, j) {
    if (i >= j) return true;
    let p = i;
    while (postorder[p] < postorder[j]) p++;
    let m = p;
    while (postorder[p] > postorder[j]) p++;
    return p === j && verify(postorder, i, m - 1) && verify(postorder, m, j-1);
  };
  return verify(postorder, 0, postorder.length - 1);
};
