import React, { useState } from 'react';

const SignUp = () => {
  const [ state, setState ] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    picture: '',
  });

  handleFirstNameChange = (e) => {
    setState({
      firstName: e.target.value,
    });
  }

  handleLastNameChange = (e) => {
    setState({
      secondName: e.target.value,
    });
  }

	handleEmailChange = (e) => {
		setState({
			email: e.target.value,
		});
	}

	handlePasswordChange = (e) => {
		setState({
			password: e.target.value,
		});
	}

	handleAvatarChange = (e) => {
		setState({
			picture: e.target.files[0],
		});
	}

  return (
    <form onSubmit={this.onSubmitHandler}>
      <h1>{message}</h1>
      <input
        onChange={handleFirstNameChange}
        type="text"
        name="firstname"
        placeholder="First name"
        required
      />

      <input
        onChange={handleSecondNameChange}
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
          
      <input
        onChange={handleAvatarChange}
        type="file"
        accept="/images/*"
      />    

      <button type="submit">
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
