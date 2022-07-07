
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
 * @return {number}
 */
 var maxProduct = function(root) {
     let sum = 0, cur = 0
    const dfs = (node) => {
        if (!node) return
        sum += node.val
        dfs(node.left)
        dfs(node.right)
    }

    const dfs1 = (node) => {
        if (!node) return 0
        const left = dfs1(node.left)
        const right = dfs1(node.right)
        const val = left + right + node.val
        if (Math.abs(val * 2 - sum) < Math.abs(cur * 2-sum)) {
            cur = val
        }
        return val
    }

    dfs(root)
    dfs1(root)
   return cur* (sum - cur) % 1000000007
};

const root = [1,2,3,4,5,6]
console.log(maxProduct(root))