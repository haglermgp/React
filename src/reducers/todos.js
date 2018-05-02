import deepFreeze from 'deep-freeze'
import expect from 'expect'

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO' :
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state
			}

			return {
				...state,
				completed: !state.completed
			}
		default:
			return state
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action))
		default:
			return state
	}
}

export default todos

// SELECTOR FUNCTION
// all function that the name beggine with 'get' -> its a function that prepare the data to be displayed by the UI
// selector becouse that select something from the current state
export const getVisibleTodos = (state, filter ) => {
  switch (filter) {
    case 'all':
      return state
    case 'completed':
      return state.filter(
        t => t.completed
      )
    case 'active':
      return state.filter(
        t => !t.completed
      )
    default:
      throw new Error('Unkown filter:' + filter)
  }
}

// TEST REDUCERS

const testAddTodo = () => {
	const stateBefore = []
	const action = {
		type: 'ADD_TODO',
		id: 0,
		text: 'Learn Redux'
	}

	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		}
	]

	deepFreeze(stateBefore)
	deepFreeze(action)

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter)
}

const testToggleTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false,
		},
		{
			id: 1,
			text: 'Go Shopping',
			completed: false
		}
	]

	const action = {
		type: 'TOGGLE_TODO',
		id: 1
	}

	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Go Shopping',
			completed: true
		}
	]

	deepFreeze(stateBefore)
	deepFreeze(action)

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter)
}