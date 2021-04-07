import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [ state, setState ] = useState(
    { 
      firstname: '',
      lastname: '',
      email: '',
    }
  );

  const handleChange = (e) => {
    const {name, value} = e.target
    setState({
      [name]: value
    })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const {firstname, lastname, email} = state;

    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
    }

    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        // handleLogin(response.data)
        redirect()
      } else {
        setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  const redirect = () => {
    // history.push('/')
  };

  const {firstname, lastname, email} = state;

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="firstname"
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />
        <input
          placeholder="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
      />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
