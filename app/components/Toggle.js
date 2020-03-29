import React, { Component } from 'react'

class Toggle extends Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export { Toggle }

// ===Manually binding===
// Generally, if you refer to a method without () after it, 
// such as onClick={this.handleClick}, you should bind that
// method.
// https://reactjs.org/docs/handling-events.html