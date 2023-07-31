import React from "react";
import styles from "./headline.module.scss";

const Headline = ({ imageSrc }) => {
  return (
    <div className={styles.cover}>
      <img src="/jippi_tan.png" alt="jippi logo" className={styles.logo} />
      <p className={styles.title}>Meet Jippi</p>
      <img src={imageSrc} alt="floating person" className={styles.image} />
      <img
        src="/chevron-down.png"
        alt="Chevron"
        className={styles.chevron}
      />
    </div>
  );
};

export default Headline;
