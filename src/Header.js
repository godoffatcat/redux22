import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
  
    constructor () {
      super()
      this.state = { themeColor: '' }
    }
  
    componentWillMount () {
      this._updateThemeColor()
    }
  
    _updateThemeColor () {
      const { store } = this.context
      const state = store.getState()
      this.setState({ themeColor: state.themeColor })
    }
  
    render () {
      return (
        <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
      )
    }
  }

// class Header extends Component {
//     constructor() {
//         super()
//         this.state = {themeColor: ''}
//     }

//     componentWillMount() {
//         // 载入之前调用update，，
//         this._updateThemeColor()
//     }

//     // 会调用这个函数，对象store里是state.themeColor
//     _updateThemeColor() {
//         const {store}  = this.context
//         const state = store.getState()
//         // 设置颜色为state里一起修改的颜色
//         this.setState({themeColor: state.themeColor})
//     }

//     render() {
//         return (
//             <h1 style={{color: this.state.themeColor}}>React.js 小书</h1>
//         )
//     }
// }

export default Header