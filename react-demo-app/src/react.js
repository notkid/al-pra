/*
 * @Author: your name
 * @Date: 2021-02-08 20:38:11
 * @LastEditTime: 2021-03-06 13:38:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\react-demo-app\src\react.js
 */
import Component from './Component'
 /**
  * @description: 
  * @param {*} type
  * @param {*} config
  * @param {*} children
  * @return {*}
  */
 function createElement(type, config, children) {
     let props = {...config}
     if (arguments.length > 3) {
         children = Array.prototype.slice.call(arguments, 2)
     }
     props.children = children
     return {
         type,
         props,
     }
 }

const React = {createElement, Component}

export default React