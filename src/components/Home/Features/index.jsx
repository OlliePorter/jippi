import React from "react";
import classNames from "classnames";

import styles from "./features.module.scss";

const Features = () => {
  const containerClassNames = () => {
    return classNames(styles.container, {
      [styles.containerSwap]: true,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <img src="/campfire.png" alt="camp fire" className={styles.image}></img>
        <div className={styles.text}>
          <p className={styles.title}>1. Weekly Tribe gatherings</p>
          <p className={styles.subtitle}>
            Tribes are a way to organise online gatherings around a ‘camp-fire’
            and provide a structured forum through which Tribe members can share
            stories, give advice or offer emotional support.
          </p>
        </div>
      </div>
      <div className={containerClassNames()}>
        <div className={styles.text}>
          <p className={styles.title}>2. Build close relationships</p>
          <p className={styles.subtitle}>
            Each Tribe has a Jippi moderator who helps to prompt group
            discussions in particular areas. Topics like vulnerability,
            compassion, grief, shame and gratitude, just to name a few.
          </p>
        </div>
        <img
          src="/online.png"
          alt="video call"
          className={styles.imageAlt}
        ></img>
      </div>
      <div className={styles.container}>
        <img
          src="/love.png"
          alt="graduation cap"
          className={styles.imageAltTwo}
        ></img>
        <div className={styles.text}>
          <p className={styles.title}>3. Change destructive behaviours</p>
          <p className={styles.subtitle}>
            We’ve developed skill pathways to help support the formation of
            positive habits. Paths help you to unlearn negative beliefs, resolve
            painful feelings, improve your relationships, and much more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
