import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

const Root = ({ store }) => (
	<Provider store={store} >
		<Router>
			<Route path='/:filter(.*|)' component={App} />
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root