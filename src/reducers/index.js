// REDUCERS SPECIFY HOW THE STATE APPLICATIONS CHANGE IN RESPONSE TO ACTIONS THAT SEND TO THE STORE

// The reducre is a pure function that takes the previous state and action, and return the next state
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
// import * as reducers from './reducers'


const todoApp = combineReducers({
	todos,
	visibilityFilter
})

// expor default todoApp = (state = {}, action) => {
// 	return {
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// 		todos: todos(state.todos, action)
// 	}
// }

export default todoApp