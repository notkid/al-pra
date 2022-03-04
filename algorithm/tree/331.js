/**
 * 331. 验证二叉树的前序序列化
 */

 var isValidSerialization = function(preorder) {
    const n = preorder.length;
    let i = 0;
    let slots = 1;
    while (i < n) {
        if (slots === 0) {
            return false;
        }
        if (preorder[i] === ',') {
            ++i;
        } else if (preorder[i] === '#') {
            --slots;
            ++i;
        } else {
            // 读一个数字
            while (i < n && preorder[i] !== ',') {
                ++i;
            }
            ++slots; // slots = slots - 1 + 2
        }
    }
    return slots === 0;
};

