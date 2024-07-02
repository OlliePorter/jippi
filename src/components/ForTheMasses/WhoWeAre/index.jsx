import React, { useState } from "react";
import styles from "./whoWeAre.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";

const WhoWeAre = () => {
  const [inView, setInView] = useState(false);

  return (
    <div>
      <ParallaxLayer
        offset={1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InView onChange={setInView}>
          <div className={inView === true ? "show" : "hidden"}>
          <div className={styles.cover}>
            <div className={styles.row}>
              <img
                src="/floating_person_square.png"
                alt="Hovering person on laptop"
                className={styles.image}
              />
             <div className={styles.column}>
                <p className={styles.capitals}>
                    WHO WE ARE
                </p>
                <p className={styles.title}>
                    Bringing financial<br/>sovereignty to all 
                </p>
                <p className={styles.subtitle}>
                  We believe that Bitcoin education<br/>should be simple, accessible, and<br/>free for everyone. Our app helps to<br/>equip Bitcoin beginners with the<br/>knowledge to achieve financial<br/>independence
                </p>
              </div>
            </div>  
          </div>
          </div>
        </InView>
      </ParallaxLayer>
    </div>
  );
};

export default WhoWeAre;
