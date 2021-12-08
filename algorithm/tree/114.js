/**
 * 
 * 114. 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */


 var flatten = function(root) {

    let cur = root
    while(cur) {
        if (cur.left !== null) {
            let next = cur.left
            let predecessor  = next
            while(predecessor .right) {
                predecessor  = predecessor .right
            }
            predecessor .right = cur.right
            cur.left = null
            cur.right = next
        }
        cur = cur.right
    }
};

