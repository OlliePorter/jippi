import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [ state, setState ] = useState(
    { 
      firstName: '',
      secondName: '',
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
      secondName: e.target.value,
    });
  }

	const handleEmailChange = (e) => {
		setState({
			email: e.target.value,
		});
	}

	const handlePasswordChange = (e) => {
		setState({
			password: e.target.value,
		});
	}

  async function newUser() {
    try {
      const response = await axios({
        method: 'POST',
        url: 'Api route for posting data to database',
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
		const { firstName, secondName, email, password } = state;
		await newUser({firstName, secondName, email, password}).then(alert('Finished!'));
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
        name="secondname"
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
      <input
        onChange={handlePasswordChange}
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button type="submit">
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
