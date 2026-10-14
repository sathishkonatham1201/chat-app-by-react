import styles from "./ChatHeader.module.css";

export default function ChatHeader({ channel }) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>{channel.name}</h1>
        <p className={styles.subtitle}>This Channel Is For Company Wide Chatter</p>
      </div>
      <div className={styles.members}>3 | 100 👥</div>
    </header>
  );
}
