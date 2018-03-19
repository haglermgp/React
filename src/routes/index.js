import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './home'
import Framework from './framework'

class Routes extends Component {
  render () {
    return (
    	<BrowserRouter>
	      <Switch>
	        <Route exact path='/' component={Home} />
	        <Route exact path='/framework' component={Framework} />
	      </Switch>
    	</BrowserRouter>
    )
  }
}

export default Routes
