import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./dollarChart.module.scss";

const DollarChart = ({isMobile}) => {
  const [inView, setInView] = useState(false);
  const [inView2, setInView2] = useState(false);
  const [inView3, setInView3] = useState(false);

  return (
    <div>
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
            <div className={styles.container}>
              <p className={styles.text}>
                The global monetary system is{" "}
                <span className={styles.highlight}>broken</span> and continues
                to <span className={styles.highlight}>leak value</span> because
                of inflation.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
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
                The dollar has lost{" "}
                <span className={styles.highlight}> 90% of its value</span>{" "}
                since 1950 due to irresponsible money printing.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
      <ParallaxLayer
        offset={5}
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
              <img
                src={isMobile ? "/line_chart_mobile.png" : "/line_chart.png"}
                alt="Dollar price graph"
                className={styles.image}
              />
            </div>
          </div>
        </InView>
      </ParallaxLayer>
    </div>
  );
};

export default DollarChart;
