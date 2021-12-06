import React from "react";
import Mailchimp from "react-mailchimp-form";

import styles from "./signUp.module.scss";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>Join Jippi</p>
        <Mailchimp
          action="https://joyerapp.us20.list-manage.com/subscribe/post?u=9c4cca26d3bea1021320b9967&amp;id=acadd8479b"
          className={styles.form}
          fields={[
            {
              name: "FNAME",
              placeholder: "First Name",
              type: "text",
              required: true,
            },
            {
              name: "LNAME",
              placeholder: "Last Name",
              type: "text",
              required: true,
            },
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
          messages={{
            sending: "Sending...",
            success: "Done, we'll be in touch!",
            error: "An error has occurred",
            empty: "Please enter in some info",
            duplicate: "Too many attempts",
            button: "Sign Up",
          }}
        />
      </div>
    </div>
  );
};

export default SignUp;
