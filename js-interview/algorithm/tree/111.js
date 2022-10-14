/**
111. 二叉树的最小深度


*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    if (!root) return 0
    let depth = 1
    const q = [root]
    while (q.length) {
        const length = q.length
        for (let i = 0; i< length ;i ++) {
            const node = q.pop()

        
            if (!node.left && !node.right) {
                return depth
            }
            if (node.left) {
                q.unshift(node.left)
            }
            if (node.right) {
                q.unshift(node.right)
            }
        }
        depth ++
       
    }
    return depth
};