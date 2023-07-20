import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./dollarChart.module.scss";

const DollarChart = () => {
  const [inView, setInView] = useState(false);

  return (
    <ParallaxLayer
      offset={3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fffff",
      }}
    >
      <InView onChange={setInView}>
        <div className={inView === true ? "show" : "hidden"}>
          {/* <div className={styles.container}>
            <p className={styles.jippi}>Jippi</p>
            <p className={styles.japanese}>じっぴ</p>
            <p className={styles.noun}>(Japanese) noun</p>
          </div> */}
          <img src="/line_chart.png" alt="Dollar price graph" className={styles.image} />
        </div>
      </InView>
    </ParallaxLayer>
  );
};

export default DollarChart;
