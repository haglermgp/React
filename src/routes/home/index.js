import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import store from 'store'

// css
const UltraButton = styled('button')`
  border: 1px solid grey;
  color: grey;
`

class Home extends Component {
  render () {
    return (
      <div>
        <div className={css`
            text-align: center;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          `} >
          <h1> UltraJockey </h1>
          <UltraButton onClick={() => this.initDispatch('homeState')} >Start Game</UltraButton>
        </div>
        <div className={css`text-align: center;`} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque qui amet, necessitatibus aperiam animi illum labore repellat assumenda, a nobis. Perferendis, adipisci, libero! Aliquam ratione labore earum repellendus, alias.</div>
      </div>
    )
  }

  initDispatch = (homeState) => {
    store.dispatch({
      type: 'action_type',
      homeState
    })
  }
}

export default Home
