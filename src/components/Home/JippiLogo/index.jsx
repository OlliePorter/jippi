import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./jippiLogo.module.scss";

const JippiLogo = () => {
  const [inView, setInView] = useState(false);

  return (
    <ParallaxLayer
      offset={10}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: '#fff'
      }}
      
    >
      <InView onChange={setInView}>
        <div className={inView === true ? "show" : "hidden"}>
          <p className={styles.logo}>
              jippi
            </p>
        </div>
      </InView>
    </ParallaxLayer>
  );
};

export default JippiLogo;
