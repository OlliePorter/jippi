import React from "react";
import classNames from "classnames";
import styles from "./nav.module.scss";

const Nav = ({ shouldShowNav, innerRef }) => {
  const navClassNames = () => {
    return classNames(styles.nav, {
      [styles.navBlue]: shouldShowNav,
    });
  };

  const handleClick = () => {   
   if (!innerRef.current) return;

    return innerRef.current?.scrollTo(16);
  };

  return (
    <div className={navClassNames()}>
      <div className={styles.jippiLogo} />
      <button
        className={styles.navButton}
        onClick={handleClick}
      >
        Download
      </button>
    </div>
  );
};

export default Nav;
