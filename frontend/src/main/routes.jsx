import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import User from '../user/user'
import Home from '../home/home'

export default props => (
    <Router history={hashHistory}>
        <Route path='/users' component={User} />
        <Route path='/home' component={Home} />
        <Redirect from='*' to='/home' />
    </Router>

)