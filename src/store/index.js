import { createStore } from 'redux'

const reducer = (state, action) => {
	if (action.type === 'action_type') {
		console.log('action_type', action.type)
		console.log('state', state)
	}
	return state
}

export default createStore(reducer, { state_home: [] })