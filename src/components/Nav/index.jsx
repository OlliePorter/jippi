import React from 'react';
import { Link } from 'react-router-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import styles from './nav.module.scss'

const Nav = () => {
  return (
		<HashRouter>
			<div>
				<ul className={styles.outerNavContainer}>
					<img src="/jippy_blue.png"className={styles.joyerLogo} alt="JOYER logo"/>
					<div className={styles.innerNavContainer}>
						<li><NavLink exact to="/" className={styles.joyerText}>Home</NavLink></li>
						<li><NavLink exact to="/about-us" className={styles.joyerText}>About Us</NavLink></li>
						<li><button component={Link} variant="outlined" to="/sign-up" className={styles.navButton}>Sign Up</button></li>
					</div>
				</ul>
			</div>
		</HashRouter>
  );
};

export default Nav;
