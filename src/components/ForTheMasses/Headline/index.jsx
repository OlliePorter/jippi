import React from "react";
import styles from "./headline.module.scss";

const Headline = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.column}>
        <div className={styles.row}>
          <img src="/jippi_blue_square.png" alt="jippi logo" className={styles.logo} />
          <div className={styles.jippiLogo} />
        </div>
        <p className={styles.title}>Bitcoin education<br/>for the masses</p>
        <p className={styles.subtitle}>A gamified social education app<br/>for beginners to earn and learn<br/>about Bitcoin with others.</p>
      </div>
      <div className={styles.container}>
        <img
          src="/islands.png"
          alt="iPhone with Jippi App"
          className={styles.image}
        />
      </div>  
    </div>
  );
};

export default Headline;
