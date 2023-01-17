import React from 'react';
import styles from './summary.module.scss'

const Summary = ({imageSrc, title, subtitle}) => {
  return (
		<div className={styles.container}>
			<img src={imageSrc} alt="people" className={styles.image}></img>
			<div className={styles.text}>
				<p className={styles.title}>{title}</p>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</div>
  );
};

export default Summary;
