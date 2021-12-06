import React from "react";
import PropTypes from "prop-types";
import styles from "./speechBubble.module.scss";

const SpeechBubble = ({ speechText, imageUrl, name }) => {
  return (
    <div className={styles.speechContainer}>
      <div className={styles.speechSquare}>
        <p className={styles.speechText}>{speechText}</p>
      </div>
      <div className={styles.speechCircle} />
      <img src={imageUrl} alt="Person" className={styles.testimonialImage} />
      <p className={styles.altSpeechText}>{name}</p>
      <p className={styles.altSpeechText}>Early member</p>
    </div>
  );
};

SpeechBubble.propTypes = {
  speechText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SpeechBubble;
