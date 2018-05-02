import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions/actionsCreator'
import { getVisibleTodos } from '../reducers'
import TodoList from '../components/TodoList'

const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  }
}

const mapStateToTodoListProps = (state, { match: { params } }) => {
  return {
    todos: getVisibleTodos(state, params.filter || 'all')
  }
}

const VisibleTodoList = withRouter(connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList))

export default VisibleTodoList;