const todos = (state = [], action) => {
	switch (actions.type) {
		case 'ADD_TODO'
		return [
			...state,
			{
				id: action.id,
				text: action.text,
				completed: true
			}
		]
		case 'TOGGLE_TODO';
			return state.map( todo => 
				(todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
			)
		default:
			return state
	}
}