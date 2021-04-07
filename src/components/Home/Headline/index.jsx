import React from 'react';
import styles from './headline.module.scss'

const Headline = () => {
  return (
    <div className={styles.cover}>
			<p>This is text</p>
			<img src="/conversation.png" alt="conversation" className={styles.image}></img>
    </div>
  );
};

export default Headline;
