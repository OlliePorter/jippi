import React from "react";
import styles from "./partnerships.module.scss";

const Partnerships = () => {

  return (
    <div className={styles.cover}>
      <p className={styles.capitals}>
        PARTNERSHIPS
      </p>
      <p className={styles.title}>
        Meet our affiliate partners
      </p>
      <div className={styles.row}>
        <div className={styles.column}>
          <img
          src="/yopaki.png"
          alt="App with Yopaki Partner"
          className={styles.image}
          />
          <div className={styles.row}>
            <span>
              Yopaki
              <a href="https://www.yopaki.com/learn" target="_blank" rel="noreferrer">
                <img
                src="/link.png"
                alt="Link icon"
                className={styles.image}
                />
              </a>
            </span>
          </div>
          <p className={styles.text}>We partnered with Bitcoin<br/>Neobank Yopaki to provide<br/>accessible education to the<br/>Mexican population.</p>
        </div>
        <div className={styles.column}>
          <img
          src="/pleb_lab.png"
          alt="PlebLab TopBuilder logo"
          className={styles.image}
          />
          <div className={styles.row}>
            <span>
              PlebLab
              <a href="https://www.topbuilder.dev" target="_blank" rel="noreferrer">
                <img
                src="/link.png"
                alt="Link icon"
                className={styles.image}
                />
              </a>
            </span>
          </div>
          <p className={styles.text}>We progressed to the<br/>semifinals of the TopBuilder<br/>competition which amplified<br/>our visibility and reach to the<br/>global BTC community.</p>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
