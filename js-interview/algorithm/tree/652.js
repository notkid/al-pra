/**
 * 652. 寻找重复的子树
 * 
 */

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
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
    var hashMap = new Map()
    var res = new Set()
    var traverse = (node) => {
        if (!node) return '#'
        let left = traverse(node.left)
        let right = traverse(node.right)
        let subTree = left + ',' + right + ',' + node.val
        if (hashMap.has(subTree)) {
            res.add(hashMap.get(subTree))
        } else{
            hashMap.set(subTree, node)
        }
        return subTree
    }
    traverse(root)
    return [...res]
};