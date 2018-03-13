import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/reducers'
import App from './src/components/App'

let store = createStore(reducer)
 
 render(
 	<Provider store={store} >
 		<App />
 	</Provider>,
 	document.getElementById('root')
 )