// Dependencies

import React, { Component } from 'react'

// Components

import { Center } from 'components/Flex'
import { Post } from './Example'


function tmp(){
  alert("I am temporary!");
}

export default class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <Center>
          <h1>Hello there! Time to get started.</h1>
        </Center>
        <Post text="Some other post" callback={tmp} />
      </div>
    )
  }
}
