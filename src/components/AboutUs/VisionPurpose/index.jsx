import React from "react";
import styles from "./visionPurpose.module.scss";

const VisionPurpose = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/appreciate.png" alt="heart" className={styles.image}></img>
        <p>Purpose</p>
        <p>
          Jippi’s purpose is to help support adopted people everywhere with the
          many mental and social challenges that life continuously throws at
          them.
        </p>
      </div>
      <div className={styles.card}>
        <img src="/rocket.png" alt="rocket" className={styles.image}></img>
        <p>Vision</p>
        <p>
          Our vision is to build an ecosystem of tools dedicated to the adoptee
          community which will equip every individual with the skills necessary
          to live a more sociable, fulfilling and dignified life.
        </p>
      </div>
    </div>
  );
};

export default VisionPurpose;
