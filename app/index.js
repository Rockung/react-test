import React, { Component } from 'react'
import { render } from 'react-dom'

// import { Wrapper, Title } from './styled';
// import { Button, Rotate } from './styled';

// import { Welcome, Comment } from './components'
// import { Clock } from './components/Clock'
// import { Toggle } from './components/Toggle'
// import { LoggingButton } from './components/LoggingButton'
// import { Greeting } from './components/Greeting'
// import { LoginControl } from './components/LoginControl'
// import { Page } from './components/Warning'
// import { NumberList } from './components/NumberList'
// import { Blog } from './components/Blog'
import { Calculator } from './components/Calculator'

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64'
//   }
// }
// const numbers = [1, 2, 3, 4, 5];
// const posts = [
//   { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
//   { id: 2, title: 'Installation', content: 'You can install React from npm.' }
// ]

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
    // <LoggingButton />
    // <Greeting isLoggedIn={true} />
    // <LoginControl />
    // <Page />
    // <NumberList numbers={numbers} />
    // <Blog posts={posts} />
      <Calculator />
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
