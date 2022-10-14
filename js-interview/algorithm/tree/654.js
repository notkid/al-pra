/**
 * 
 * 654. 最⼤⼆叉树
 * 
 */

 var constructMaximumBinaryTree = function(nums) {

    var buildTree = (nums, lo, hi) => {
        if (lo > hi ) return null
        let max = Number.MIN_SAFE_INTEGER
        let p = -1
        for (let i = lo; i<=hi;i ++) {
            if (nums[i] > max) {
                max = nums[i]
                p = i
            }
        }
        let root = new TreeNode(max)
        root.left = buildTree(nums, lo, p-1)
        root.right = buildTree(nums, p + 1, hi)
        return root
    }
 
    return buildTree(nums, 0, nums.length - 1)
};