import React from "react";
import classNames from "classnames";

import styles from "./features.module.scss";

const Features = ({
  firstTitle, 
  firstSubtitle,
  firstImage,
  secondTitle,
  secondSubtitle,
  secondImage,
  thirdTitle,
  thirdSubtitle,
  thirdImage,
}) => {
  const containerClassNames = () => {
    return classNames(styles.container, {
      [styles.containerSwap]: true,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <img src={firstImage} alt={firstTitle} className={styles.image}></img>
        <div className={styles.text}>
          <p className={styles.title}>
            {firstTitle}
          </p>
          <p className={styles.subtitle}>
          {firstSubtitle}
          </p>
        </div>
      </div>
      <div className={containerClassNames()}>
        <div className={styles.text}>
          <p className={styles.title}>{secondTitle}</p>
          <p className={styles.subtitle}>
           {secondSubtitle}
          </p>
        </div>
        <img
          src={secondImage}
          alt={secondTitle}
          className={styles.imageAlt}
        ></img>
      </div>
      <div className={styles.container}>
        <img
          src={thirdImage}
          alt={thirdTitle}
          className={styles.imageAltTwo}
        ></img>
        <div className={styles.text}>
          <p className={styles.title}>{thirdTitle}</p>
          <p className={styles.subtitle}>
            {thirdSubtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
