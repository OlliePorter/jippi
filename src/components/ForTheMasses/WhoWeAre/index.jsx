import React from "react";
import styles from "./whoWeAre.module.scss";

const WhoWeAre = () => {
  return (
    <div className={styles.cover}>
       <div className={styles.container}></div>
      <div className={styles.container}>
        <img
          src="/floating_person_square.png"
          alt="Hovering person on laptop"
          className={styles.image}
        />
      </div>
      <div className={styles.containerTwo}></div>
      <div className={styles.column}>
        <p className={styles.capitals}>
            WHO WE ARE
        </p>
        <span className={styles.title}>
            Bringing financial sovereignty to all 
        </span>
        <span className={styles.subtitle}>
          We believe that Bitcoin education should be simple, accessible, and free for everyone. Our app helps to equip Bitcoin beginners with the knowledge to achieve financial independence
        </span>
      </div>
      <div className={styles.container}></div>
    </div>

  );
};

export default WhoWeAre;
