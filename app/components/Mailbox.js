import React from 'react'
import { PropTypes } from 'prop-types'

// Inline If with Logical && Operator
function Mailbox (props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}
Mailbox.propTypes = {
  unreadMessages: PropTypes.array.isRequired
}

export { Mailbox }

// Inline If-Else with Conditional Operator
//  <div>
// {isLoggedIn
//   ? <LogoutButton onClick={this.handleLogoutClick} />
//   : <LoginButton onClick={this.handleLoginClick} />
// }
// </div>
