import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

// components
import Routes from 'routes'

ReactDOM.render(
    <Provider store={store}>
      <Routes/>
    </Provider>
  , document.getElementById('root'))
