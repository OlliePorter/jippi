import styles from "./deck.module.scss";

export default function PitchDeck() {
  return (
    <div className={styles.cover}>
      <object data="/jippi_pitch_deck.pdf" type="application/pdf" width="100%" height="100%">
      </object>
    </div>
  );
}
