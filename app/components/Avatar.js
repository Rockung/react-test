import React, { Component } from 'react';
import { render } from 'react-dom';

class Avatar extends Component {
	render() {
		return (
			<img
				className="Avatar"
				src={this.props.user.avatarUrl}
				alt={this.props.user.name}
			/>
		);
	}
}

export { Avatar };
