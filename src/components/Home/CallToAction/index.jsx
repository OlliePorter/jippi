import React from 'react';
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
					<button>Join Now</button>
				</div>
    	</div>
		</div>
  );
};

export default CallToAction;
