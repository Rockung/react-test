## Mini Requirements for react/ES6

Minimum required packages to boot a react/ES6 projects

```bash
$ npm install --save react react-dom

$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install --save-dev html-webpack-plugin clean-webpack-plugin
$ npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
```

## Lint your code

```bash
$ npm install --save-dev eslint

$ ./node_modules/.bin/eslint --init
$ ./node_modules/.bin/eslint .eslintrc.js
```

## Validate prop types

```bash
$ npm install --save prop-types
```

Here's an example:

```javascript
import React, { Component } from 'react'
import { render } from 'react-dom'
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
```

## Styled Components

CSS in javascript

```bash
$ npm install --save styled-components
```

