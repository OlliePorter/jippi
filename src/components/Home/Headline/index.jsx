import React from 'react';
import styles from './headline.module.scss'

const Headline = () => {
  return (
    <div className={styles.cover}>
			<div>
				<img src="/conversation.png" alt="conversation" className={styles.image}></img>
			</div>
			<div className={styles.innerContainer}>
				<img src="/jippi_blue_square.png" alt="jippi logo" className={styles.logo}></img>
				<p className={styles.title}>Find your tribe</p>
				<p className={styles.subtitle}>An online adoption community for building relationships and alleviating loneliness.</p>
				<button>Sign up</button>
			</div>
    </div>
  );
};

export default Headline;
