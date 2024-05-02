import { useEffect, useRef } from "react"; 
import { useRouteError } from "react-router-dom";
import styles from "./deck.module.scss";

export default function PitchDeck() {
  // const error = useRouteError();
  // {error.statusText || error.message}
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.click();
  }, []);

  return (
    <div className={styles.cover}>
      <a ref={buttonRef} href="/jippi_pitch_deck.pdf" target="_blank">Open Jippi Pitch Deck PDF</a>
    </div>
  );
}
