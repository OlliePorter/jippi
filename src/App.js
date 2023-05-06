import { hot } from 'react-hot-loader/root';
import React, { useState } from "react";
import {Switch, Route, HashRouter} from 'react-router-dom'

import Nav from './components/Nav';
import Home from './components/Home';
import SignUp from './components/SignUp';

import './App.scss';

const App = () => {
  const [isHidden, setIsHidden] = useState(false);  
  
  return (
    <>
      {/* <Nav isHidden={isHidden} setIsHidden={setIsHidden} /> */}
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <Home setIsHidden={setIsHidden} />
          </Route> 
          <Route exact path='/sign_up'>
            <SignUp  />
          </Route> 
        </Switch>
      </HashRouter>
    </>
  );
};

export default hot(App);
