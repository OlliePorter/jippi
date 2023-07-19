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

  return (
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
          <p className={styles.text} >
            Jippi is the easiest, most interactive way to earn and learn about
            Bitcoin.
          </p>
					</div>
        </div>
      </InView>
    </ParallaxLayer>
  );
};

export default Summary;
