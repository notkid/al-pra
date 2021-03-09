/*
 * @Author: your name
 * @Date: 2021-02-08 20:47:09
 * @LastEditTime: 2021-03-08 20:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\react-demo-app\src\react-dom.js
 */
import { REACT_TEXT } from "./constants";
import { addEvent } from "./event";

function render(vdom, container) {
  const dom = createDOM(vdom);
  container.appendChild(dom);
  dom.componentDidMount && dom.componentDidMount();
}

export function createDOM(vdom) {
  if (typeof vdom === "string" || typeof vdom === "number") {
    return document.createTextNode(vdom);
  }
  let { type, props } = vdom;
  let dom;
  if (type === REACT_TEXT) {
    dom = document.createTextNode(props.content);
  } else if (typeof type === "function") {
    if (type.isReactComponent) {
      return mountClassComponent(vdom);
    } else {
      return mountFunctionComponent(vdom);
    }
  } else {
    dom = document.createElement(type);
  }

  updateProps(dom, props);
  if (typeof props.children === "object" && props.children.type) {
    render(props.children, dom);
  } else if (Array.isArray(props.children)) {
    reconcileChildren(props.children, dom);
  } else {
    document.textContent = props.children ? props.children.toString() : "";
  }
  vdom.dom = dom;

  return dom;
}

function mountClassComponent(vdom) {
  let { type, props } = vdom;
  let classInstance = new type(props);
  // vdom.classInstance = classInstance
  if (classInstance.componentWillMount) {
    classInstance.componentWillMount();
  }

  let oldRenderVdom = classInstance.render();
  classInstance.oldRenderVdom = oldRenderVdom;
  vdom.oldRenderVdom = oldRenderVdom;
  let dom = createDOM(oldRenderVdom);
  if (classInstance.componentDidMount) {
    dom.componentDidMount = classInstance.componentDidMount.bind(classInstance);
  }
  classInstance.dom = dom;
  return dom;
}

/**
 * 把一个类型为自定义函数组件的虚拟dom转换为真实dom
 * @param {*} childrenVdom
 * @param {*} parentDOM
 */
function mountFunctionComponent(vdom) {
  let { type: FunctionComponent, props } = vdom;
  let oldRenderVdom = FunctionComponent(props);
  vdom.oldRenderVdom = oldRenderVdom;
  return createDOM(oldRenderVdom);
}

function reconcileChildren(childrenVdom, parentDOM) {
  for (let i = 0; i < childrenVdom.length; i++) {
    let childVdom = childrenVdom[i];
    render(childVdom, parentDOM);
  }
}

function updateProps(dom, newProps) {
  for (let key in newProps) {
    if (key === "children") continue;
    if (key === "style") {
      let styleObj = newProps.style;
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      }
    } else if (key.startsWith("on")) {
      // dom[key.toLocaleLowerCase()] = newProps[key]
      addEvent(dom, key.toLocaleLowerCase(), newProps[key]);
    } else {
      dom[key] = newProps[key];
    }
  }
}

export function compareTwoVdom(parentDOM, oldVdom, newVdom, nextDOM) {
  if (!oldVdom && !newVdom) {
    return null;
  } else if (oldVdom && !newVdom) {
    let currentDOM = findDOM(oldVdom);
    if (currentDOM) parentDOM.removeChild(currentDOM);
    if (oldVdom.classInstance && oldVdom.classInstance.componentWillUnmount) {
      oldVdom.componentWillMount();
    }
  } else if (!oldVdom && newVdom) {
    let newDOM = createDOM(newVdom);
    if (nextDOM) parentDOM.insertBefore(newDOM, nextDOM);
    else parentDOM.appendChild(newDOM);
    return newDOM;
  } else if (oldVdom && newVdom && oldVdom.type !== newVdom.type) {
    let oldDOM = findDOM(oldDOM);
    let newDOM = createDOM(newVdom);
    parentDOM.replaceChild(newDOM, oldDOM);
    if (oldVdom.classInstance && oldVdom.classInstance.componentWillUnmount) {
      oldVdom.classInstance.componentWillUnmount();
    }
  } else {
    updateElement(oldVdom, newVdom);
    // return newVdom
  }
}

function updateElement(oldVdom, newVdom) {
  if (typeof oldVdom.type === "string") {
    let currentDOM = (newVdom.dom = oldVdom.dom);
    updateProps(currentDOM, oldVdom.props, newVdom.props);
  }
}

function findDOM(vdom) {
  let { type } = vdom;
  let dom;
  if (typeof type === "function") {
    if (type.isReactComponent) {
      dom = findDOM(vdom.classInstance.oldRenderVdom);
    } else {
      dom = findDOM(vdom.oldRenderVdom);
    }
  } else {
    dom = vdom.dom;
  }
}

const ReactDOM = { render };

export default ReactDOM;
