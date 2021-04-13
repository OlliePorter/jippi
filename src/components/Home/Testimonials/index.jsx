import React from 'react';
import SpeechBubble from './SpeechBubble';

import styles from './testimonials.module.scss'

const Testimonials = () => {
  return (
	  <div className={styles.container}>
        <SpeechBubble 
          speechText="I genuinely look forward to checking in with my tribe each week. 
          It’s nice to feel supported and understood by everyone here."
          imageUrl="/jonathan.jpg"
          name="Jonathan W"
        />
        <SpeechBubble 
          speechText="I find pathways really useful. I've learned so much about myself
          and the way my brain works as an adopted person."
          imageUrl="/marcus.jpg"
          name="Marcus F"
        />
        <SpeechBubble 
          speechText="Before Jippi every little thing seemed to trigger me, but
          now I feel like I’m more equipped to deal with every day life."
          imageUrl="/kayleigh.jpg"
          name="Kayleigh S"
        />
    </div>
  );
};

export default Testimonials;
