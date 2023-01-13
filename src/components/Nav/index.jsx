import React, { useState } from "react";
import classNames from "classnames";
import Headroom from "react-headroom";
import { NavLink, HashRouter } from "react-router-dom";

import styles from "./nav.module.scss";

const Nav = ({ isHidden, setIsHidden }) => {
  const isActiveLinkInStorage = localStorage.getItem("activeLink");
  const homeOrActiveTab = isActiveLinkInStorage
    ? isActiveLinkInStorage
    : "home";
  const [, setIsActive] = useState(homeOrActiveTab);

  const setActiveLink = (linkName) => {
    localStorage.setItem("activeLink", linkName);
    window.scrollTo(0, 0);
    setIsActive(linkName);
  };

  const navClassNames = () => {
    return classNames(styles.outerNavContainer, {
      [styles.hide]: isHidden,
    });
  };

  return (
    <HashRouter>
      <Headroom
        onPin={() => setIsHidden(false)}
        onUnpin={() => setIsHidden(true)}
      >
        <ul className={navClassNames()}>
          <NavLink exact to="/" onClick={() => setActiveLink("home")}>
            <div className={styles.jippiLogo} />
          </NavLink>
          <li>
              <NavLink
                exact
                to="/sign_up"
                className={styles.navButton}
                onClick={() => setActiveLink("sign_up")}
              >
                Sign Up
              </NavLink>
            </li>
        </ul>
      </Headroom>
    </HashRouter>
  );
};

export default Nav;
