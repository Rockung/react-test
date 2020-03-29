import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Welcome extends Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}

// use react/prop-types to check datatype in props
// of react components
Welcome.propTypes = {
  name: PropTypes.string.isRequired
}

export { Welcome }
