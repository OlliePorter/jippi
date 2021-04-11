import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Home from './components/Home';
import SignUp from './components/SignUp';

import './App.scss';

const App = () => {
  const [ state, setState ] = useState(
    {
      isLoggedIn: false,
      user: {}
    }
  );

  const handleLogin = (data) => {
    setState({
      isLoggedIn: true,
      user: data.user
    })
  };
 
  return (
    <>
      <div>
        <Nav />
        <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route> 
          <Route exact path='/sign_up'>
            <SignUp />
          </Route> 
        </Switch>
      </BrowserRouter>
      </div>
    </>
  );
};

export default hot(App);
