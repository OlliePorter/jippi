import { useRouteError } from "react-router-dom";
import styles from "./deck.module.scss";

export default function PitchDeck() {
  // const error = useRouteError();
  // {error.statusText || error.message}

  return (
    <div className={styles.cover}>
      <object data="/jippi_pitch_deck.pdf" type="application/pdf" width="100%" height="100%">
      <p>Tap <a href="/jippi_pitch_deck.pdf">here</a> for Jippi Pitch Deck</p>
      </object>
    </div>
  );
}
