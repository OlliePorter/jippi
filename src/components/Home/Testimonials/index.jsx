import React from 'react';
import SpeechBubble from './SpeechBubble';

import styles from './testimonials.module.scss'

const Testimonials = ({speechTextOne, speechTextTwo, speechTextThree}) => {
  return (
	  <div className={styles.container}>
        <SpeechBubble 
          speechText={speechTextOne}
          imageUrl="/jonathan.jpg"
          name="Jonathan W"
        />
        <SpeechBubble 
          speechText={speechTextTwo}
          imageUrl="/marcus.jpg"
          name="Marcus F"
        />
        <SpeechBubble 
          speechText={speechTextThree}
          imageUrl="/kayleigh.jpg"
          name="Kayleigh S"
        />
    </div>
  );
};

export default Testimonials;
