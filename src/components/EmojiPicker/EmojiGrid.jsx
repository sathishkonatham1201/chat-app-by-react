import styles from "./EmojiGrid.module.css";

// One titled section of emoji buttons
export default function EmojiGrid({ title, emojis, onPick }) {
  return (
    <section>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.grid}>
        {emojis.map((char) => (
          <button key={char} className={styles.emoji} onClick={() => onPick(char)}>
            {char}
          </button>
        ))}
      </div>
    </section>
  );
}
