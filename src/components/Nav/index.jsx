import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import styles from './nav.module.scss'

const Nav = () => {
  const [isHide, setIsHide] = useState(false);  

	const navClassNames = () => {
    return classNames(styles.outerNavContainer, {
      [styles.hide]: isHide,
    });
  };
	
  return (
		<HashRouter>
			<Headroom 
				onPin={() => setIsHide(false)}
				onUnpin={() => setIsHide(true)}
			>
				<ul className={navClassNames()}>
					<img src="/jippy_blue.png"className={styles.joyerLogo} alt="JOYER logo"/>
					<div className={styles.innerNavContainer}>
						<li><NavLink exact to="/" className={styles.joyerText}>Home</NavLink></li>
						<li><NavLink exact to="/about-us" className={styles.joyerText}>About Us</NavLink></li>
						<li><button component={Link} variant="outlined" to="/sign-up" className={styles.navButton}>Sign Up</button></li>
					</div>
				</ul>
			</Headroom>
		</HashRouter>
  );
};

export default Nav;
