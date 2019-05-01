import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container'
import Home from './home/home'


const App = () => (
    <div className = "app-content">
        <Route path ="/login" component = {LogInFormContainer} />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/signup" component={SignUpFormContainer} /> */}
    </div>
);

export default App;