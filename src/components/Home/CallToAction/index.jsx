import React, { useState } from "react";
import styles from "./callToAction.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

const CallToAction = ({ offsetValue, title, subtitle }) => {
  const [inView, setInView] = useState(false);

  return (
    <>
      <ParallaxLayer
        offset={offsetValue}
      >
        <InView onChange={setInView}>
          <div className={inView === true ? "show" : "hidden"}>
            <div className={styles.cover}>
              <div className={styles.innerCover}>
                <div>
                  <img
                    src="/person_bubble.png"
                    alt="person"
                    className={styles.image}
                  />
                </div>
                <div className={styles.innerContainerOne}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.subtitle}>{subtitle}</p>
                  <div className={styles.innerContainerTwo}>
                    <img
                      src="/app_store_badge.png"
                      alt="person"
                      className={styles.badge}
                    />
                    <img
                      src="/google_play_badge.png"
                      alt="person"
                      className={styles.badge}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
    </>
  );
};

export default CallToAction;
