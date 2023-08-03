import React from "react";
import classNames from "classnames";

import styles from "./nav.module.scss";

const Nav = ({ shouldShowNav, ref }) => {
  const navClassNames = () => {
    return classNames(styles.nav, {
      [styles.navBlue]: shouldShowNav,
    });
  };

  return (
    <div className={navClassNames()}>
      <div className={styles.jippiLogo} />
      <button
        className={styles.navButton}
        onClick={() => {
          // if (ref.current != null) return null;

          // console.log('ref.current', ref)
          
          // ref.current.current.scrollTo(13)
        }
        }
      >
        Download
      </button>
    </div>
  );
};

export default Nav;
