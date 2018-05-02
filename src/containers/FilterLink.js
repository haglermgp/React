import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
	<NavLink
		exact
		to={'/' + (filter === 'all' ? '' : filter)}
		activeStyle={{
			textDecoration: 'none',
			color: 'red'
		}}
	>
		{children}
	</NavLink>
)

FilterLink.propTypes = {
	filter: propTypes.oneOf(['all', 'completed', 'active']).isRequired,
	children: propTypes.node.isRequired
}

export default FilterLink
