import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./headline.module.scss";
import classNames from "classnames";

const Headline = ({ inView, imageSrc, subtitle }) => {

  const navClassNames = () => {
    return classNames(styles.logo, {
      [styles.hidden]: !!inView,
      [styles.show]: inView,
    });
  };

  return (
    <div className={styles.cover}>
      <img
        src="/jippi_tan.png"
        alt="jippi logo"
        className={navClassNames()}
      />
      <p className={styles.title}>Meet Jippi</p>
      <img
        src={imageSrc}
        alt="floating person"
        className={styles.image}
      />
    </div>
  );
  
  // return (
  //   <div className={styles.cover}>
  //     <div className={styles.innerCover}>
  //       {/* <div>
  //         <img
  //           src={imageSrc}
  //           alt="conversation"
  //           className={styles.image}
  //         ></img>
  //       </div> */}
  //         {/* <img
  //           src={imageSrc}
  //           alt="floating person"
  //           className={styles.image}
  //         ></img> */}
  //       <div className={styles.innerContainerOne}>
  //         <img
  //           src="/jippi_tan.png"
  //           alt="jippi logo"
  //           className={navClassNames()}
  //         ></img>
  //         <p className={styles.title}>Meet Jippi</p>
  //         {/* <p className={styles.subtitle}>
  //           {subtitle}
  //         </p> */}
  //         {/* <NavLink
  //           exact
  //           to="/sign_up"
  //           className={styles.signUpButton}
  //           onClick={() => setIsHidden(false)}
  //         >
  //           Sign Up
  //         </NavLink> */}
  //       </div>
  //     </div>
  //     <div className={styles.innerContainerTwo}>
  //     <img
  //           src={imageSrc}
  //           alt="floating person"
  //           className={styles.image}
  //         ></img>
  //       {/* <div className={styles.seeMore}>
  //         <p>See More</p>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="18px"
  //           height="18px"
  //           viewBox="0 0 25 25"
  //           fill="none"
  //           stroke="#343434"
  //           strokeWidth="2"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           className="feather feather-chevron-down"
  //         >
  //           <polyline points="6 9 12 15 18 9"></polyline>
  //         </svg>
  //       </div> */}
  //     </div>
  //   </div>
  // );
};

export default Headline;
