import { hot } from 'react-hot-loader/root';
import React from 'react';

import SignUp from './components/SignUp';

import './App.scss';

const App = () => {
  return (
    <SignUp/>
  );
};

export default hot(App);
