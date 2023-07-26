import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./actualCost.module.scss";

const ActualCost = () => {
  const [inView, setInView] = useState(false);

  return (
    <ParallaxLayer
      offset={8}
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
            <p className={styles.text}>
              The <span className={styles.highlight}>actual cost</span>{" "}
              of unsound, leaky money is an erosion of purchasing power over
              time. It becomes impossible to save leaky money in the long term.
            </p>
          </div>
        </div>
      </InView>
    </ParallaxLayer>
  );
};

export default ActualCost;
