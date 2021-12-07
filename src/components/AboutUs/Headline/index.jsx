import React from "react";
import styles from "./headline.module.scss";

const Headline = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.innerCover}>
        <div>
          <img
            src="/mother.png"
            alt="mother and baby"
            className={styles.image}
          ></img>
        </div>
        <div className={styles.innerContainerOne}>
          <p className={styles.title}>Jippi</p>
          <p className={styles.subtitleAlt}>
            じっぴ (Japanese) <b>noun</b>
          </p>
          <p className={styles.subtitle}>Actual expense</p>
        </div>
      </div>
      <div className={styles.innerContainerTwo}>
        <div className={styles.seeMore}>
          <p className={styles.title}>Our Story</p>
          <p>
            Our challenges and our experiences shape us into the people we are
            today. Adoptees face more traumas and more challenges than most
            other people. Statistically adopted people are 43% more likely to
            develop substance abuse and 75% more likely to commit suicide than
            non adopted people. The actual expense of adoption is deep,
            ingrained mental scarring that can handicap adoptees in many
            different ways. Our belief is that every adopted person can be
            empowered to live life to the fullest through technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
