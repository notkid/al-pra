/**
 * 78. 子集
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const res = [], track = []    
    let backtrack = (start, track) => {
        res.push(track.slice())
        for(let i = start; i< nums.length; i++) {
            track.push(nums[i])
            backtrack(i+1, track)
            track.pop()
        }
    }
    backtrack(0, track)
    return res
};