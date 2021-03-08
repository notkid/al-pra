/*
 * @Author: your name
 * @Date: 2021-03-02 23:14:06
 * @LastEditTime: 2021-03-06 15:10:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\react-demo-app\src\Component.js
 */
import { createDOM } from './react-dom'

export let updateQueue = {
    isBatchingUpdate: false,
    updaters: new Set(),
    batchUpdate() {
        for (let updater of this.updaters) {
            updater.updateClassComponent()
        }
        this.isBatchingUpdate = false
    }
}

class Updater {
    constructor(classInstance) {
        this.classInstance = classInstance //类组件的实例
        this.pendingStates = []
        this.callbacks = []
    }
    addState(partialState, callback) {
        this.pendingStates.push(partialState)
        if (typeof callback === 'fucntion') {
            this.callbacks.push(callback)
        }
        if (updateQueue.isBatchingUpdate) {
            updateQueue.updaters.add(this)
        } else {
            this.updateClassComponent()
        }
    }
    updateClassComponent() {
        let { classInstance, pendingStates, callbacks } = this
        if (pendingStates.length > 0) {
            classInstance.state = this.getState()
            classInstance.forceUpdate()
            callbacks.forEach(cb => cb())
        }
    }
    getState() {
        let { classInstance, pendingStates } = this
        let { state } = classInstance
        pendingStates.forEach((nextState) => {
            if (typeof nextState === 'function') {
                nextState = nextState.call(classInstance, state)
            }
            state = { ...state, ...nextState }
        })
        pendingStates.length = 0
        return state
    }
}


export default class Component {
    static isReactComponent = true
    constructor(props) {
        this.props = props
        this.state = {}
        this.updater = new Updater(this)
    }
    setState(partialState, callback) {
        this.updater.addState(partialState, callback)
        // let state = this.state;
        // this.state = { ...state, ...partialState }
        // let newVdom = this.render()
        // updateClassComponent(this, newVdom)
    }

    forceUpdate() {
        let newVdom = this.render()
        updateClassComponent(this, newVdom)
    }
    render() {
        throw new Error('此方法为抽象方法')
    }

}

function updateClassComponent(classInstance, vdom) {
    let oldDom = classInstance.dom;
    let newDom = createDOM(vdom)
    oldDom.parentNode.replaceChild(newDom, oldDom)
    classInstance.dom = newDom
}

