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
  const [isHidden, setIsHidden] = useState(false);  
	const isActiveLinkInStorage = localStorage.getItem('activeLink');
	const homeOrActiveTab = isActiveLinkInStorage ? isActiveLinkInStorage : 'home';
	const [isActive, setIsActive] = useState(homeOrActiveTab);

	const setActiveLink = (linkName) => {
		localStorage.setItem('activeLink', linkName);
		setIsActive(linkName);
	}

	const isActiveLink = (linkName) => {
		return linkName === isActive;
	}

	const navClassNames = () => {
    return classNames(styles.outerNavContainer, {
      [styles.hide]: isHidden,
    });
  };
	
	const linkClassNames = (name) => {
    return classNames(styles.jippiText, {
      [styles.selected]: isActiveLink(name),
    });
  };
	
  return (
		<HashRouter>
			<Headroom 
				onPin={() => setIsHidden(false)}
				onUnpin={() => setIsHidden(true)}
			>
				<ul className={navClassNames()}>
					<img src="/jippi_blue.png"className={styles.jippiLogo} alt="Jippi logo"/>
					<div className={styles.innerNavContainer}>
						<li><NavLink exact to="/" className={linkClassNames('home')} onClick={() => setActiveLink('home')}>Home</NavLink></li>
						<li><NavLink exact to="/about_us" className={linkClassNames('about')} onClick={() => setActiveLink('about')}>About Us</NavLink></li>
						<li><NavLink exact to="/sign_up" className={styles.navButton} onClick={() => setActiveLink('sign_up')}>Sign Up</NavLink></li>
					</div>
				</ul>
			</Headroom>
		</HashRouter>
  );
};

export default Nav;
