import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./callToAction.module.scss";

const CallToAction = ({ setIsHidden }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.innerCover}>
        <div>
          <img src="/mockup.png" alt="iphone" className={styles.image}></img>
        </div>
        <div className={styles.innerContainerOne}>
          <p className={styles.title}>Explore for free</p>
          <p className={styles.subtitle}>
            Jippi helps adopted people to find their authentic selves. Best of
            all, it won't break the bank like therapy.
          </p>
          <NavLink
            exact
            to="/sign_up"
            className={styles.signUpButton}
            onClick={() => setIsHidden(false)}
          >
            Join Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
