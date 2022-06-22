
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    const hashMap = new Map(), res = []
    const getSum = function (node) {
        if (!node) return 0
        const left = getSum(node.left)
        const right = getSum(node.right)
        const sum = left + right + node.val

        hashMap.set(sum, (hashMap.get(sum) || 0) + 1)
        return sum
    }

    getSum(root)

    let maxCount = Math.max(...hashMap.values())
    for (let [key, val] of hashMap) {
        if (val === maxCount) {
            res.push(key)
        }
    }
    return res
};