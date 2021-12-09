/**
 * 
 * 257. 二叉树的所有路径
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const paths = []
    const traverse = (node, path) => {
        if (!node) {return ''}
        path += node.val.toString()
        if (!node.left && !node.right) {
            paths.push(path)
        } else {
            path+= '->'
            traverse(node.left, path)
            traverse(node.right, path)
        }
        
    }
    traverse(root, '')
    return paths
};