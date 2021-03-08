/*
 * @Author: your name
 * @Date: 2021-03-06 14:12:51
 * @LastEditTime: 2021-03-06 15:38:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\react-demo-app\src\event.js
 */
import { updateQueue } from './Component'

/**
 * 给真是DOM添加事件处理函数
 * @param {*} dom 
 * @param {*} eventType 
 * @param {*} listener 
 */
export function addEvent(dom, eventType, listener) {
    let store = dom.store || (dom.store = {})
    store[eventType] = listener
    if (!document[eventType]) {
        document[eventType] = dispatchEvent
    }
}


let syntheticEvent = {}
function dispatchEvent(event = {}) {
    let { target, type } = event
    let eventType = `on${type}`
    updateQueue.isBatchingUpdate = true
    createSyntheticEvent(event)
    while(target) {
        let { store } = target
        let listener = store && store[eventType]
        listener && listener.call(target, syntheticEvent)
        target = target.parentNode
    }
    for (let key in syntheticEvent) {
        syntheticEvent[key] = null
    }
    updateQueue.batchUpdate()
}

function createSyntheticEvent(nativeEvent) {
    for (let key in nativeEvent) {
        syntheticEvent[key] = nativeEvent[key]
    }
    return syntheticEvent
}