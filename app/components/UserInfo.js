import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { Avatar } from './Avatar'

class UserInfo extends Component {
  render () {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">{this.props.user.name}</div>
      </div>
    )
  }
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired
}

export { UserInfo }
