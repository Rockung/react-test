import React, { Component } from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }

  componentDidMount () {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }
}

export { Clock }

// https://reactjs.org/docs/state-and-lifecycle.html
