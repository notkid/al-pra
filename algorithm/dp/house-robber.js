/*
 * @Author: your name
 * @Date: 2021-03-17 17:21:55
 * @LastEditTime: 2021-03-17 17:38:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\algorithm\dp\house-robber.js
 */


/**
 * 198. 打家劫舍
 * 
 */

 var rob = function (nums) {
     //base case max(nums[0], nums[1])
     // f(n) => max, f(n-1), f(n-2) + nums[n]
     // 2 => max, nums[0], nums[1]
     // 3 => max , num[0] + num[3], num[2]
     let n = nums.length
     if (n === 0) return 0
     if (n === 1) return nums[0]
     if (n === 2) return Math.max(nums[0], nums[1])
     let d0 = nums[0], d1 = Math.max(nums[0], nums[1])
     for (let i = 2; i< n; i++) {
        let tmp = d1
        d1 = Math.max(d0 + nums[i], d1)
        d0 = tmp
     }
     return d1
 }
