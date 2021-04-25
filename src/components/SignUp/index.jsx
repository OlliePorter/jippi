import React from 'react';
import Mailchimp from 'react-mailchimp-form';

import styles from './signUp.module.scss'

const SignUp = () => {
  return (
    <div>
      <p>Sign Up</p>
      <Mailchimp
        action="https://joyerapp.us20.list-manage.com/subscribe/post?u=9c4cca26d3bea1021320b9967&amp;id=acadd8479b"
        className={styles.container}
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          },
          {
            name: 'FNAME',
            placeholder: 'First Name',
            type: 'text',
            required: true
          },
          {
            name: 'LNAME',
            placeholder: 'Last Name',
            type: 'text',
            required: true
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thanks for joining us!",
            error: "An unexpected internal error has occurred.",
            empty: "Please enter in some information.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Sign Up"
          }
        }
      />
    </div>
  );
};

export default SignUp;
