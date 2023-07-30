import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import styles from "./earnLearnConnect.module.scss";

const EarnLearnConnect = ({ offsetValue, headerText, text, imageUrl }) => {
  const [inView, setInView] = useState(false);

  return (
    <>
      <ParallaxLayer
        offset={offsetValue}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fffff",
        }}
      >
        <InView onChange={setInView}>
          <div className={inView === true ? "show" : "hidden"}>
            <div className={styles.container}>
              <img
                src={imageUrl}
                alt="App screen"
                className={styles.image}
              />
              <div className={styles.innerContainer}>
                <p className={styles.headerText}>{headerText}</p>
                <p className={styles.text}>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
    </>
  );
};

export default EarnLearnConnect;
