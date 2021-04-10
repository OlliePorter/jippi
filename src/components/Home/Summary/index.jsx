import React from 'react';
import styles from './summary.module.scss'

const Summary = () => {
  return (
		<div className={styles.container}>
			<img src="/people.png" alt="people" className={styles.image}></img>
			<div className={styles.text}>
				<p className={styles.title}>Made for adoptees, by adoptees</p>
				<p className={styles.subtitle}>Our app helps adopted people everywhere to form meaningful connections and provides each individual with the necessary skills to live a more fulfilling life.</p>
			</div>
		</div>
  );
};

export default Summary;
