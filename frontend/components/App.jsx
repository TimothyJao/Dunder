import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container'
import BrowseFormContainer from './browse_form/browse_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import HomeContainer from './home/home_container'
import ShowServerContainer from './browse_form/show_server_container'
import Modal from './modal/modal'
import GuestFormContainer from './session_form/guest_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'


const App = () => (
    <div className = "app-content">
        <Modal />
        <ProtectedRoute path="/browse/:server_id" component = {ShowServerContainer} />
        <ProtectedRoute exact path ="/browse" component = {BrowseFormContainer}/>
        <AuthRoute exact path ="/guest" component={GuestFormContainer} />
        <AuthRoute exact path ="/login" component = {LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={HomeContainer} />
    </div>
);

export default App;