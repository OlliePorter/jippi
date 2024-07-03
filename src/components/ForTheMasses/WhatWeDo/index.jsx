import React from "react";
import styles from "./whatWeDo.module.scss";

const WhatWeDo = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.row}>
        <div className={styles.container}></div>
        <div className={styles.column}>
          <p className={styles.capitals}>
            WHAT WE DO
          </p>
          <span className={styles.title}>
            Introducing Jippi
          </span>
        </div>
        <div className={styles.container}></div>
        <div className={styles.container}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.containerTwo}></div>
        <div className={styles.containerTwo}></div>
        <div className={styles.outerIconContainer}>
          <div className={styles.iconContainer}>
            <img src="/education.png" alt="Graduation cap icon" className={styles.iconTwo} />
          </div>
          <p className={styles.subtitle}>
            <strong>Learn</strong>
          </p>
          <span className={styles.subtitle}>
            Written modules and audio classes provide beginner-friendly education
          </span>
        </div>
        <div className={styles.outerIconContainer}>
          <div className={styles.iconContainer}>
            <img src="/bitcoin.png" alt="Bitcoin logo icon" className={styles.icon} />
          </div>
          <p className={styles.subtitle}>
            <strong>Earn</strong>
          </p>
          <span className={styles.subtitle}>
            Bitcoin rewards via Lightning are supplied to award learning progress
          </span>
        </div>
        <div className={styles.outerIconContainer}>
          <div className={styles.iconContainer}>
            <img src="/tribe.png" alt="Camp fire icon" className={styles.icon} />
          </div>
          <p className={styles.subtitle}>
            <strong>Connect</strong>
          </p>
          <span className={styles.subtitle}>
            Online communities called Tribes offer support & connection with other Bitcoiners
          </span>
        </div>
        <div className={styles.containerTwo}></div>
        <div className={styles.containerTwo}></div>
      </div>
    </div>
  );
};

export default WhatWeDo;
