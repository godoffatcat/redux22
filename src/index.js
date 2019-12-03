import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Content from './Content'

// 综合区，初始state是null，listeners是处理队列，dispatch是处理器
function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({})
    return { getState, dispatch, subscribe }
}

// 判断执行区  themeReducer = reducer，修改更新
const themeReducer = (state, action) => {
    if(!state) return {themeColor: 'red'}
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

// 处理完的状态store
const store = createStore(themeReducer)


class Index extends Component {
    // static childContextTypes = {
    //   store: PropTypes.object
    // }
  
    getChildContext () {
      return { store }
    }
  
    render () {
      return (
        <div>
          <Header />
          <Content />
        </div>
      )
    }
  }


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
