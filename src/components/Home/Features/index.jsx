import React from 'react';
import styles from './features.module.scss'

const Features = () => {
  return (
		<>
			<div className={styles.container}>
				<img src="/campfire.png" alt="camp fire" className={styles.image}></img>
				<div className={styles.text}>
					<p className={styles.title}>Weekly tribe check-ins</p>
					<p className={styles.subtitle}>Tribes are a way to organise online gatherings around a ‘camp-fire’ and provides a structured forum through which tribe members can share stories, give advice or offer emotional support.</p>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.text}>
					<p className={styles.title}>Build close relationships</p>
					<p className={styles.subtitle}>For more of a personal touch, members are paired off with a deck topics to prompt discussions and develop intimacy in particular areas. Topics like vulnerability, compassion, grief, shame, gratitude, loss, forgiveness and many more.</p>
				</div>
				<img src="/online.png" alt="video call" className={styles.imageAlt}></img>
			</div>
			<div className={styles.container}>
				<img src="/graduation.png" alt="graduation cap" className={styles.imageAltTwo}></img>
				<div className={styles.text}>
					<p className={styles.title}>Learn life skills</p>
					<p className={styles.subtitle}>We've curated the best adoption resources available and developed structured training courses which centre around key life skills. We believe that adoption learning should be accessible to all and not break the wallet like therapy.</p>
				</div>
			</div>
		</>
  );
};

export default Features;
