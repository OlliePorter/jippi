import React, { useState, useEffect } from "react";
import styles from "./whyWeDoIt.module.scss";

const WhoWeAre = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  return (
    <div className={styles.cover}>
      <p className={styles.capitals}>
        WHY WE DO IT
      </p>
      <p className={styles.title}>
        For the overlooked, the unbanked,<br/>and the underrepresented
      </p>
      { 
        isMobile ?
          <img
            src="/mini_world_map.png"
            alt="World map"
            className={styles.image}
          /> 
          :  
          <img
            src="/map.png"
            alt="World map"
            className={styles.image}
          />
      }
    </div>
  );
};

export default WhoWeAre;
