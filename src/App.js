import { hot } from 'react-hot-loader/root';
import React, { useState } from "react";
import {Switch, Route, HashRouter} from 'react-router-dom'

import Nav from './components/Nav';
import Home from './components/Home';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';

import './App.scss';

const App = () => {
  const [isHidden, setIsHidden] = useState(false);  
  const [subdomain, setSubdomain] = useState(null);  

  useState(()=> {
    const host = window.location.host;

    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);

    if (arr.length > 0) setSubdomain(arr[0]);

  }, [])


  console.log(subdomain)

  return (
    <>
      <Nav isHidden={isHidden} setIsHidden={setIsHidden} />
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <Home setIsHidden={setIsHidden} subdomain={subdomain} />
          </Route> 
          <Route exact path='/about_us'>
            <AboutUs subdomain={subdomain} />
          </Route> 
          <Route exact path='/sign_up'>
            <SignUp subdomain={subdomain} />
          </Route> 
        </Switch>
      </HashRouter>
    </>
  );
};

export default hot(App);
