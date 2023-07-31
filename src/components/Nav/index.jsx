import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { NavLink, HashRouter } from "react-router-dom";

import styles from "./nav.module.scss";

const Nav = ({ shouldShowNav }) => {
  const navClassNames = () => {
    return classNames(styles.nav, {
      [styles.navBlue]: shouldShowNav,
    });
  };

  return (
    <div className={navClassNames()}>
      <div className={styles.jippiLogo} />
      <button className={styles.navButton} onClick={()=>{}}>Download</button>
    </div>
    // <HashRouter>
    //   {/* <p>This is a nav</p> */}
    //   <Headroom
    //     // onPin={() => setIsHidden(false)}
    //     // onUnpin={() => setIsHidden(true)}
    //   >
    //     <ul className={navClassNames()}>
    //       <NavLink exact to="/" onClick={() => setActiveLink("home")}>
    //         <div className={styles.jippiLogo} />
    //       </NavLink>
    //       <li>
    //           <NavLink
    //             exact
    //             to="/sign_up"
    //             className={styles.navButton}
    //             onClick={() => setActiveLink("sign_up")}
    //           >
    //             Sign Up
    //           </NavLink>
    //         </li>
    //     </ul>
    //   </Headroom>
    // </HashRouter>
  );
};

export default Nav;
