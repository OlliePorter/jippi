import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import DraftsIcon from '@material-ui/icons/Drafts';
import MapIcon from '@material-ui/icons/Map';

import styles from './footer.module.scss'

const Footer = () => {
  return (
		<div className={styles.container}>
			<div className={styles.column}>
				<p>Social</p>
        <FacebookIcon className={styles.footerIcon} onClick={()=> window.open("https://facebook.com/joyerapp", "_blank")}/>
        <TwitterIcon className={styles.footerIcon} onClick={()=> window.open("https://twitter.com/joyer_app", "_blank")}/>
        <InstagramIcon className={styles.footerIcon} onClick={()=> window.open("https://instagram.com/joyer_app", "_blank")}/>
			</div>
			<div className={styles.column}>
				<p>Legal</p>
				<p>Copyright © 2021 Jippi</p>
			</div>
		</div>
  );
};

export default Footer;
