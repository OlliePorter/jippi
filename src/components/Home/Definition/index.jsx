import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./definition.module.scss";

const Definition = () => {
  const [inView, setInView] = useState(false);

  return (
    <ParallaxLayer
      offset={6}
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
            <p className={styles.jippi}>Jippi</p>
            <p className={styles.japanese}>じっぴ</p>
            <p className={styles.noun}>(Japanese) noun</p>
          </div>
        </div>
      </InView>
    </ParallaxLayer>
  );
};

export default Definition;
