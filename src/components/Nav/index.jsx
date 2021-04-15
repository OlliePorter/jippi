import React, { useState } from 'react';
import classNames from 'classnames';
import Headroom from 'react-headroom';
import {
  NavLink,
  HashRouter,
} from "react-router-dom";

import styles from './nav.module.scss'
import SignUp from '../SignUp';

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
					<img src="/jippi_blue.png"className={styles.jippiLogo} alt="Jippi logo"/>
					<div className={styles.innerNavContainer}>
						<li><NavLink exact to="/" className={styles.jippiText}>Home</NavLink></li>
						<li><NavLink exact to="/about_us" className={styles.jippiText}>About Us</NavLink></li>
						<li><NavLink exact to="/sign_up" className={styles.navButton}>Sign Up</NavLink></li>
					</div>
				</ul>
			</Headroom>
		</HashRouter>
  );
};

export default Nav;
