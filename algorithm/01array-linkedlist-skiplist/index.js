/*
 * @Author: your name
 * @Date: 2021-03-31 17:10:03
 * @LastEditTime: 2021-03-31 17:20:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\algorithm\01array-linkedlist-skiplist\index.js
 */


/**
 * 
 * 283. 移动零

 */


var moveZeroes = function(nums, l = 0, r = -1) {
    while(r++ < nums.length) 
        if (nums[r]) nums[l] === 0 && ([nums[l], nums[r]] = [nums[r], nums[l]]), l++
};

const arr = [0,1,0,3,12];
moveZeroes(arr)
console.log(arr)