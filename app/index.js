import React, { Component } from 'react'
import { render } from 'react-dom'

// import { Wrapper, Title } from './styled';
// import { Button, Rotate } from './styled';

// import { Welcome, Comment } from './components'
// import { Clock } from './components/Clock'
// import { Toggle } from './components/Toggle'
import { LoggingButton } from './components/LoggingButton'

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
}

class Root extends Component {
  render () {
    return (
    // <h1>Hello, world</h1>
    // <div>
    //   <Welcome name="Kelvin" />
    //   <Comment
    //     date={comment.date}
    //     text={comment.text}
    //     author={comment.author}
    //   />
    // </div>
    // <Clock />
    // <Toggle />
      <LoggingButton />
    /*
    <Wrapper>
      <Title>
        Hello, world!
      </Title>
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Rotate>&lt; 💅 &gt;</Rotate>
      </div>
    </Wrapper>
*/
    )
  }
}

render(<Root />, document.getElementById('app'))
