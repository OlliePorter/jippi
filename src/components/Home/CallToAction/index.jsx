import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./callToAction.module.scss";

const CallToAction = ({ setIsHidden, title, subtitle }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.innerCover}>
        <div>
          <img src="/jippi_iphone.png" alt="iphone" className={styles.image}></img>
        </div>
        <div className={styles.innerContainerOne}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>
            {subtitle}
          </p>
          <NavLink
            exact
            to="/sign_up"
            className={styles.signUpButton}
            onClick={() => setIsHidden(false)}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
