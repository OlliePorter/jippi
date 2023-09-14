import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./btcBackground.module.scss";

const BtcBackground = ({ offsetInteger, text }) => {
  const [inView, setInView] = useState(false);

  return (
    <ParallaxLayer
      offset={7}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fffff",
      }}
    >
      <InView onChange={setInView}>
        <div className={inView === true ? "show" : "hidden"}>
          <div className={styles.container}>
            <p className={styles.text}>In Japanese, Jippi means <span className={styles.highlight}>actual cost.</span></p>
          </div>
        </div>
      </InView>
    </ParallaxLayer>
  );
};

export default BtcBackground;
