import React, { Component } from 'react'

// public class fields syntax
class LoggingButton extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this)
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    )
  }
}

export { LoggingButton }

// ===arrow function syntax===

// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <button onClick={() => this.handleClick()}>
//         Click me
//       </button>
//     );
//   }
// }

// ===passing arguments to event handler===

// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
