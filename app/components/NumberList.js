import React from 'react'
import { PropTypes } from 'prop-types'

// if you extract a ListItem component, you should keep
// the key on the <ListItem /> elements in the array 
// rather than on the <li> element in the ListItem itself.

function ListItem (props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>
}
ListItem.propTypes = {
  value: PropTypes.number.isRequired
}

function NumberList (props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  )

  return (
    <ul>
      {listItems}
    </ul>
  )
}
NumberList.propTypes = {
  numbers: PropTypes.array.isRequired
}

export { NumberList }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// )
