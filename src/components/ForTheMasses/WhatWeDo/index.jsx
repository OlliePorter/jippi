import React, { useState } from "react";
import styles from "./whatWeDo.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

const WhatWeDo = () => {
  const [inView, setInView] = useState(false);

  return (
    <div>
      <ParallaxLayer
        offset={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InView onChange={setInView}>
          <div className={inView === true ? "show" : "hidden"}>
            <div className={styles.cover}>
              <div className={styles.column}>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <p className={styles.capitals}>
                      WHAT WE DO
                    </p>
                    <p className={styles.title}>
                      Introducing Jippi
                    </p>
                    </div>
                  </div>
                  <div className={styles.rowTwo}>
                    <div className={styles.container}>
                      <div className={styles.iconContainer}>
                        <img src="/education.png" alt="Graduation cap icon" className={styles.iconTwo} />
                      </div>
                      <p className={styles.subtitle}>
                       <strong>Learn</strong>
                      </p>
                      <p className={styles.subtitle}>
                        Written modules and<br/>audio classes provide<br/>beginner-friendly<br/>education
                      </p>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.iconContainer}>
                        <img src="/bitcoin.png" alt="Bitcoin logo icon" className={styles.icon} />
                      </div>
       
                      <p className={styles.subtitle}>
                       <strong>Earn</strong>
                      </p>
                      <p className={styles.subtitle}>
                        Bitcoin rewards via<br/>Lightning are supplied<br/>to award learning<br/>progress
                      </p>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.iconContainer}>
                       <img src="/tribe.png" alt="Camp fire icon" className={styles.icon} />
                      </div>
                      <p className={styles.subtitle}>
                       <strong>Connect</strong>
                      </p>
                      <p className={styles.subtitle}>
                        Online communities<br/>called Tribes offer<br/>support & connection<br/>with other Bitcoiners
                      </p>
                    </div>
                  </div>
              </div>  
            </div>
          </div>
        </InView>
      </ParallaxLayer>
    </div>
  );
};

export default WhatWeDo;
