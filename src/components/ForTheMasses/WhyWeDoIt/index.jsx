import React, { useState } from "react";
import styles from "./whyWeDoIt.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

const WhoWeAre = () => {
  const [inView, setInView] = useState(false);

  return (
    <div>
      <ParallaxLayer
        offset={3}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InView onChange={setInView}>
          <div className={inView === true ? "show" : "hidden"}>
          <div className={styles.cover}>
            <p className={styles.capitals}>
              WHY WE DO IT
            </p>
            <p className={styles.title}>
              For the overlooked, the unbanked,<br/>and the underrepresented
            </p>
            <img
                src="/map.png"
                alt="World map"
                className={styles.image}
              />
          </div>
          </div>
        </InView>
      </ParallaxLayer>
    </div>
  );
};

export default WhoWeAre;
