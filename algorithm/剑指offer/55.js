
var maxDepth = function (root) {

    var dfs = function (node) {
        if (!node) return 0;
        return 1 + Math.max(dfs(node.left), dfs(node.right))
    }
    return dfs(root)
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function (root) {
    var dfs = function (node) {
        if (!node) return [true, 0]
        let left = dfs(node.left)
        let right = dfs(node.right)
        return [left[0] && right[0] && (Math.abs(left[1] - right[1]) <= 1), 1 + Math.max(left[1], right[1])]
    }
    return dfs(root)[0]
};