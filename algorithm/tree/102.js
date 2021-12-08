/**
 * 
 * 102. 二叉树的层序遍历
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const ret = [],q =[]
    if (!root) {
        return ret;
    }

    q.push(root)
    while(q.length) {
        const currentLevelSize = q.length
        ret.push([])
        for (let i = 1; i<=currentLevelSize; i++) {
            const node =q.shift()
            if (node) {ret[ret.length -1].push(node.val)}
            if (node.left) {q.push(node.left)}
            if (node.right) {q.push(node.right)}
        }
    }
    return ret
};