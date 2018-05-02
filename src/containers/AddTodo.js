import React from 'react';
import { connect } from 'react-redux'

// action creators
import { addTodo } from '../actions/actionsCreator'

let AddTodo = ({ dispatch }) => {
  let input

  return(
    <div>
      <input type="text" ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value))
        input.value = ''
      }} >
        add Todo 
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo;