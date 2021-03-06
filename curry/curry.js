/*
 * @Author: your name
 * @Date: 2021-02-19 23:30:04
 * @LastEditTime: 2021-02-19 23:33:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\curry\curry.js
 */


 const currying = (fn, arr = []) => {
     let len = fn.length
     return function (...args) {
         arr = [...arr, ...args]
         if (arr.length <len) {
             return currying(fn, arr)
         } else {
             return fn(...arr)
         }
     }
 }

 function isType (type) {
     return function(value) {
         return Object.prototype.toString.call(value) === `[object ${type}]`
     }
 }

 let isArray = currying(isType)('Array')
 let isString = currying(isType)('String')
 console.log(isArray([]))
 console.log(isArray('123'))