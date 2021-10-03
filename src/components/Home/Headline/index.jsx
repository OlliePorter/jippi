import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './headline.module.scss'

const Headline = () => {
  return (
		<div className={styles.cover}>
			<div className={styles.innerCover}>
				<div>
					<img src="/conversation.png" alt="conversation" className={styles.image}></img>
				</div>
				<div className={styles.innerContainerOne}>
					<img src="/jippi_blue_square.png" alt="jippi logo" className={styles.logo}></img>
					<p className={styles.title}>Find your tribe</p>
					<p className={styles.subtitle}>A social connection and emotional support app for the adoptee community.</p>
					<NavLink exact to="/sign_up" className={styles.signUpButton}>Sign Up</NavLink>
				</div>
    	</div>
			<div className={styles.innerContainerTwo}>
				<div className={styles.seeMore}>
					<p>See More</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 25 25" fill="none" stroke="#13b6b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
				</div>
			</div>
		</div>
  );
};

export default Headline;
