import styles from "./deck.module.scss";

export default function PitchDeck() {
  return (
    <div className={styles.cover}>
      <iframe
      id="pitchDeck"
      src="/jippi_pitch_deck.pdf"
      width="100%"
      height="100%"
      />
    </div>
  );
}
