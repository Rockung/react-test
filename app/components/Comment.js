import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { UserInfo } from './UserInfo'

function formatDate (date) {
  return date.toLocaleDateString()
}

class Comment extends Component {
  render () {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author} />
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">
          { formatDate(this.props.date) }
        </div>
      </div>
    )
  }
}

Comment.propTypes = {
  author: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
}

export { Comment }
