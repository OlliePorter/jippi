import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./headline.module.scss";
import classNames from "classnames";

const Headline = ({ inView, imageSrc, subtitle }) => {

  const navClassNames = () => {
    return classNames(styles.logo, {
      [styles.hidden]: !!inView,
      [styles.show]: inView,
    });
  };

  return (
    <div className={styles.cover}>
      <img
        src="/jippi_tan.png"
        alt="jippi logo"
        className={navClassNames()}
      />
      <p className={styles.title}>Meet Jippi</p>
      <img
        src={imageSrc}
        alt="floating person"
        className={styles.image}
      />
    </div>
  );

};

export default Headline;
