/*
 * @Author: your name
 * @Date: 2021-03-31 17:10:03
 * @LastEditTime: 2021-04-01 14:28:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\algorithm\01array-linkedlist-skiplist\index.js
 */


/**
 * 
 * 283. 移动零

 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let l = 0, r = -1
    while(r++<nums.length) {
        console.log([nums[r], nums[l]])
        if (nums[r]) {
            !nums[l] && ([nums[l], nums[r]] =[nums[r], nums[l]])
            l++
        }
    }
};

// const arr = [0,1,0,3,12]
// moveZeroes(arr) 
// console.log(arr)
 
/**
 * 
 * 11. 盛最多水的容器
 * 
 */

var maxArea = function (height) {
    let left = 0, right = height.length - 1
    let result = 0
    while (left < right) {
        let curArea = Math.min(height[right], height[left]) * (right - left)
        result = Math.max(result, curArea)
        if (height[left] <= height[right]) {
            ++left
        } else {
            --right
        }
    }
    return result
};

/**
 * 
 * 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。


 */