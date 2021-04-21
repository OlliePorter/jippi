import React from 'react';
import styles from './footer.module.scss'

const Footer = () => {

	const date = new Date();
	const year = date.getFullYear();

  return (
		<div className={styles.container}>
			<p>Copyright © {year} Jippi. All rights reserved.</p>
		</div>
  );
};

export default Footer;
