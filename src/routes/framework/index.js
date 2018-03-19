import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Button } from 'components'

const colorPrimary = css`
  background-color: black;
`
const colorFont = 'yellow'

const root = css`
    color: ${colorFont};
    padding: 30px;
    height: 300px;
    margin: 0px;
  `

class Main extends Component {
  render () {
    return (
      <div>
        <div className={`${root} ${colorPrimary}`} >
          <Button primary >This is a Primary Button</Button>
          <Button>This is a Secondary Button</Button>
          Without component
        </div>
      </div>
    )
  }
}

export default Main
