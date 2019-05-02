import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import HomeContainer from './home/home_container'
import GuestForm from './session_form/guest_session_form'
import {AuthRoute, ProtectedRoute} from '../util/route_util'


const App = () => (
    <div className = "app-content">
        {/* <ProtectedRoute path ="/:userId" component = {BrowseFormContainer}/> */}
        <AuthRoute exact path ="/guest" component={GuestForm} />
        <AuthRoute exact path ="/login" component = {LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={HomeContainer} />
    </div>
);

export default App;