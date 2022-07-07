/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function (nums) {
    const ret = []
    const track = []
    const backtrack = (nums, track) => {
        if (nums.length === track.length) {
            ret.push(track.slice())
            return;
        }

        for (let num of nums) {

            if (track.indexOf(num) > -1) {
                continue
            }
            track.push(num)
            backtrack(nums, track)
            track.pop()
        }

    }

    backtrack(nums, track)
    return ret
};

console.log(permute([1,2,3]))