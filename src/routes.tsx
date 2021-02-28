import React from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'

import applicationHistory from './history'
import  Login from './pages/login'
import  Register from './pages/register'
import  Home from './pages/home'

function Routes () {
  return (
    <Router history={applicationHistory}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"/>
        </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes