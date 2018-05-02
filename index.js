import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './src/configureStore'
import Root from './src/Root'

const store = configureStore()

ReactDOM.render(
	<Root store={store}/>,
  document.getElementById('root')
);