import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import store from './store'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
		<Provider>
			<App/>
		</Provider>
  	);
});
