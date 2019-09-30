import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from '../pages/Login'
import Homepage from '../pages/Homepage'
import { connect } from 'react-redux'
import * as types from '../actions/ActionTypes'


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated ? <Component {...props} />
      : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )} />
)

const Routes = (props) => (
  <Router>
    <Switch>
    <Route path="/" exact component={Login} />
    <PrivateRoute path="/homepage" exact isAuthenticated={props.isAuthenticated} component={Homepage}/>
    </Switch>
  </Router>
);

const mapStateToProps = state => ({
  isAuthenticated: (state.users.loginState===types.STATE_SUCCESS)
})

export default connect(mapStateToProps, {})(Routes)