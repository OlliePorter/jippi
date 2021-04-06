import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [ state, setState ] = useState(
    { 
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  );

  const handleFirstNameChange = (e) => {
    setState({
      firstName: e.target.value,
    });
  }

  const handleLastNameChange = (e) => {
    setState({
      lastName: e.target.value,
    });
  }

	const handleEmailChange = (e) => {
		setState({
			email: e.target.value,
		});
	}

  async function newUser() {
    try {
      const response = await axios({
        method: 'POST',
        url: 'backend/users',
        data: { user: state },
        crossdomain: true,
      });
      const { token } = response.data;
      localStorage.setItem('jwt', token);	
    } catch {
      alert('THERE WAS A PROBLEM');
    }
  };

  const onSubmitHandler = async (e) => {
		e.preventDefault();
		const { firstName, lastName, email } = state;
		await newUser({firstName, lastName, email}).then(alert('Finished!'));
	}

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Sign Up</h1>
      <input
        onChange={handleFirstNameChange}
        type="text"
        name="firstname"
        placeholder="First name"
        required
      />
      <input
        onChange={handleLastNameChange}
        type="text"
        name="lastname"
        placeholder="Last name"
        required
      />
      <input
        onChange={handleEmailChange}
        type="email"
        name="email"
        placeholder="Email"
        required
      /> 
      <button type="submit">
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
