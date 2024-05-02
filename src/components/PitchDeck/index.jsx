import { useEffect, useRef } from "react"; 
import { useRouteError } from "react-router-dom";
import styles from "./deck.module.scss";

export default function PitchDeck() {
  // const error = useRouteError();
  // {error.statusText || error.message}

  return (
    <div className={styles.cover}>
      <a className={styles.navButton} href="/jippi_pitch_deck.pdf" target="_blank">Download Jippi Pitch Deck PDF</a>
    </div>
  );
}
