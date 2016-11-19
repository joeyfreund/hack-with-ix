// Dependencies

import React, { Component } from 'react'

// Components

import { Center } from 'components/Flex'


export default class Example extends Component {

  sayHello() {
    alert('Hello')
  }

  render () {
    return (
      <div>
        <Post text="I am post #1" callback={this.sayHello}/>
        <br />
        <Post text="I am post #2" callback={this.sayHello}/>
      </div>
    )
  }
}



export class Post extends Component {

  render () {
    return (
      <div>
        { this.props.text }
        <button onClick={this.props.callback}>Click me</button>
      </div>
    )
  }
}
