import React from 'react'
import { PropTypes } from 'prop-types'

import { Greeting } from './Greeting'

function LoginButton (props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

function LogoutButton (props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}
LogoutButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

class LoginControl extends React.Component {
  constructor (props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick () {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick () {
    this.setState({ isLoggedIn: false })
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

export { LoginControl }
