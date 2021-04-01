/*
 * @Author: your name
 * @Date: 2021-03-06 15:43:39
 * @LastEditTime: 2021-03-29 15:13:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\binarySearch\index.js
 */

let left = 0, right = len(array) - 1
while(left <= right) {
    let mid = (left + right) >> 1
    if (array[mid]  === target) {
        return mid
    } else if (array[mid] < target) {
        left = mid + 1
    } else {
        right = mid - 1
    }
    return right
}


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x
    while(left <= right) {
       let mid = left + (( right - left) >> 1)
       if (mid * mid === x) {
           return mid
       } else if (mid * mid < x) {
           left = mid +1
       } else {
           right = mid - 1
       }
    }
    return right
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0 , right = nums.length - 1, ans = nums.length

    while(left <= right ) {
        let mid = left + ((right - left) >> 1 )
        let midNum = nums[mid]
        if (midNum === target) {
            right = mid - 1
        } else if (midNum > target) {
            right = mid -1 
        } else if (midNum <target) {
            left = mid + 1 
        }
    }

    return left
};                                                                                  