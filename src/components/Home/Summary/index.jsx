import React, { useState } from "react";
import styles from "./summary.module.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useInView, InView } from "react-intersection-observer";

const Summary = ({ imageSrc, title, subtitle }) => {
  // return (
  // 	<div className={styles.container}>
  // 		<img src={imageSrc} alt="people" className={styles.image}></img>
  // 		<div className={styles.text}>
  // 			<p className={styles.title}>{title}</p>
  // 			<p className={styles.subtitle}>{subtitle}</p>
  // 		</div>
  // 	</div>
  // );
  const [inView2, setInView2] = useState(false);
  const [inView3, setInView3] = useState(false);

  return (
    <>
      <ParallaxLayer
        offset={1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(90deg, rgba(19, 182, 184, 1) 0%, rgba(73, 208, 190, 1) 100%)",
        }}
      >
        <InView onChange={setInView2}>
          <div className={inView2 === true ? "show" : "hidden"}>
            <div className={styles.container}>
              <p className={styles.text}>
                Jippi is the easiest, most interactive way to earn and learn
                about bitcoin.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(90deg, rgba(19, 182, 184, 1) 0%, rgba(73, 208, 190, 1) 100%)",
        }}
      >
        <InView onChange={setInView3}>
          <div className={inView3 === true ? "show" : "hidden"}>
            <div className={styles.container}>
              <p className={styles.text}>
                Part education platform, part social network — our app is the
                best place to grow your knowledge and your connections with
                unbeatable bitcoin rewards.
              </p>
            </div>
          </div>
        </InView>
      </ParallaxLayer>
    </>
  );
};

export default Summary;
