import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './callToAction.module.scss'

const CallToAction = () => {
  return (
		<div className={styles.cover}>
			<div className={styles.innerCover}>
				<div>
					<img src="/mockup.png" alt="iphone" className={styles.image}></img>
				</div>
				<div className={styles.innerContainerOne}>
					<p className={styles.title}>Sign up to Jippi today</p>
					<p className={styles.subtitle}>Join a global community of adoptees each on their own path to a more authentic self.</p>
					<NavLink exact to="/sign_up" className={styles.signUpButton}>Join Now</NavLink>
				</div>
    	</div>
		</div>
  );
};

export default CallToAction;
