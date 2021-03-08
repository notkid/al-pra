/*
 * @Author: your name
 * @Date: 2021-02-08 20:33:38
 * @LastEditTime: 2021-03-08 13:07:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\react-demo-app\src\index.js
 */
import React from './react';
import ReactDOM from './react-dom';
import { updateQueue} from './Component'

// let element1 = (
//   <div className="title" style={{color:'red'}}><span>hello</span>world</div>
// )

// let element2 = React.createElement('div', {"className": "title", "style": {"color": "red"}}, React.createElement("span", null, "hello"), "world")
// console.log(JSON.stringify(element1, null, 2))
// ReactDOM.render(element2,
//   document.getElementById('root')
// );

/**
 * 
 * 函数式组件
 * 
 */

//  function Welcome(props) {
//    return <h1>Hello, {props.name}</h1>
//  }


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number : 0}
    console.log('Counter 1.constructor')
  }

  componentWillMount() {
    console.log('Counter 2.componentWillMount')
  }
  componentDidMount() {
    console.log('Counter 4.componentDidMount')
  }

  componentWillUpdate() {
    console.log('Counter 6.componentWillUpdate')
  }

  compoentDidUpdate() {
    console.log('Counter 7.compoentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Counter 5.shouldComponentUpdate')
    return true
  }

  handleClick = (event) => {
    updateQueue.isBatchingUpdate = true
    this.setState({number: this.state.number+1})
    console.log(this.state.number)
    this.setState({number: this.state.number+1})
    console.log(this.state.number)
    setTimeout(() => {
      this.setState({number: this.state.number+1})
      console.log(this.state.number)
      this.setState({number: this.state.number+1})
      console.log(this.state.number)
    })
    updateQueue.batchUpdate()
  }
  render() {
    console.log('Counter 3.render')
    return <div >
      <p>{this.state.number}</p>
    <button onClick={this.handleClick}> <span> + </span> </button>
    </div>
  }
}


 ReactDOM.render(<Counter name="world"/>, document.getElementById('root'))