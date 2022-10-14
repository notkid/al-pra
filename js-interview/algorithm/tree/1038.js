/**
 * 
 * 1038. 从二叉搜索树到更大和树
 */

 var bstToGst = function(root) {
    let sum = 0
    var traverse = (root) => {
        if (!root) return
        traverse(root.right)
        sum+=root.val
        root.val = sum
        traverse(root.left)
    }
    traverse(root)
    return root
};