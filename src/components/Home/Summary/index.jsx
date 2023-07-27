import React, { useState } from "react";
import styles from "./summary.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

const Summary = () => {
  const [inView, setInView] = useState(false);
  const [inView2, setInView2] = useState(false);

  return (
    <>
      <ParallaxLayer
        offset={1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(90deg, rgba(19, 182, 184, 1) 0%, rgba(73, 208, 190, 1) 100%)",
        }}
      >
        <InView onChange={setInView}>
          <div className={inView === true ? "show" : "hidden"}>
            <div className={styles.container}>
              <p className={styles.text}>
                Jippi is the easiest way to earn and learn about bitcoin with others.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(90deg, rgba(19, 182, 184, 1) 0%, rgba(73, 208, 190, 1) 100%)",
        }}
      >
        <InView onChange={setInView2}>
          <div className={inView2 === true ? "show" : "hidden"}>
            <div className={styles.container}>
              <p className={styles.text}>
                Part education platform, part social network — Jippi is a
                magical new app which pays you in bitcoin for connecting and
                learning with other bitcoiners.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
    </>
  );
};

export default Summary;
