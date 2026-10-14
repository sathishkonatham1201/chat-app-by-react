import styles from "./Avatar.module.css";

// A small round circle with initials. Reused in the sidebar and messages.
export default function Avatar({ initials, color, size = 40, online = false }) {
  return (
    <div
      className={styles.avatar}
      style={{ width: size, height: size, background: color, fontSize: size * 0.3 }}
    >
      {initials}
      {online && <span className={styles.dot} />}
    </div>
  );
}
