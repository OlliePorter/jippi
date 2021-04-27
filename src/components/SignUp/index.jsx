import React from 'react';
import Mailchimp from 'react-mailchimp-form';

import styles from './signUp.module.scss'

const SignUp = () => {
  return (
    <div className={styles.container}>
      <img src="/smudge.png" alt="smudge of paint" className={styles.image}></img>
      <div className={styles.box}>
      <p>Join Jippi</p>
        <Mailchimp
          action="https://joyerapp.us20.list-manage.com/subscribe/post?u=9c4cca26d3bea1021320b9967&amp;id=acadd8479b"
          className={styles.form}
          fields={[
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
            },
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true
            }
          ]}
          messages = {
            {
              sending: "Sending...",
              success: "Done, thanks for joining us!",
              error: "An unexpected internal error has occurred.",
              empty: "Please enter in some information.",
              duplicate: "Too many subscribe attempts for this email address",
              button: "Sign Up"
            }
          }
        />
      </div>
    </div>
  );
};

export default SignUp;
