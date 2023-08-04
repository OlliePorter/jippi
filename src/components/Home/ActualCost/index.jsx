import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./actualCost.module.scss";

const ActualCost = () => {
  const [inView, setInView] = useState(false);
  const [inView2, setInView2] = useState(false);
  const [inView3, setInView3] = useState(false);

  return (
    <>
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
                The <span className={styles.highlight}>actual cost</span> of
                debt based money is hidden from the general population.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
      <ParallaxLayer
        offset={9}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fffff",
        }}
      >
        <InView onChange={setInView2}>
          <div className={inView2 === true ? "show" : "hidden"}>
            <div className={styles.container}>
              <p className={styles.text}>
                In reality, fiat money is a{" "}
                <span className={styles.highlight}>criminal enterprise</span> which
                redistributes wealth from the poor to the rich.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
      <ParallaxLayer
        offset={10}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fffff",
        }}
      >
        <InView onChange={setInView3}>
          <div className={inView3 === true ? "show" : "hidden"}>
            <div className={styles.container}>
              <p className={styles.text}>
                Bitcoin fixes this.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
    </>
  );
};

export default ActualCost;
