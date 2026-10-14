import Avatar from "../Avatar/Avatar.jsx";
import EditableName from "../EditableName/EditableName.jsx";
import getInitials from "../../utils/getInitials.js";
import styles from "./Sidebar.module.css";

export default function Sidebar({ user, channels, activeChannelId, onSelectChannel, onRename }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <Avatar initials={getInitials(user.name)} color={user.color} size={62} online />
        <div>
          <EditableName
            className={styles.name}
            name={user.name}
            onSave={(newName) => onRename(user.id, newName)}
          />
          <div className={styles.title}>{user.title}</div>
        </div>
      </div>

      <div className={styles.heading}>
        <span>Conversations</span>
        <button className={styles.addBtn} aria-label="New conversation">+</button>
      </div>

      <ul className={styles.list}>
        {channels.map((channel) => (
          <li key={channel.id}>
            <button
              className={`${styles.channel} ${channel.id === activeChannelId ? styles.active : ""}`}
              onClick={() => onSelectChannel(channel.id)}
            >
              <span className={styles.hash}>#</span>
              {channel.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
