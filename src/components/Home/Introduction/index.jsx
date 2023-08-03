import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./introduction.module.scss";

const Introduction = () => {
  const [inView, setInView] = useState(false);

  return (
    <ParallaxLayer
      offset={9}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#171717",
      }}
    >
      <InView onChange={setInView}>
        <div className={inView === true ? "show" : "hidden"}>
            <p className={styles.text}>
              Introducing
            </p>
        </div>
      </InView>
    </ParallaxLayer>
  );
};

export default Introduction;
