import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./jippiLogoAnimated.module.scss";

const JippiLogoAnimated = () => {
  const [inView, setInView] = useState(false);

  return (
    <ParallaxLayer
      offset={10}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#171717"
      }}
      
    >
      <InView onChange={setInView}>
        <div className={inView === true ? "show" : "hidden"}>
          {/* <p className={styles.logo}>
              jippi
            </p> */}
          {/* <div className={styles.jippiLogo} /> */}
          <div className={styles.words}>
            <span>j</span>
            <span>i</span>
            <span>p</span>
            <span>p</span>
            <span>i</span>
          </div>
        </div>
      </InView>
    </ParallaxLayer>
  );
};

export default JippiLogoAnimated;
