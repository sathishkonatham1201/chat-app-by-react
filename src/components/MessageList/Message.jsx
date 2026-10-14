import Avatar from "../Avatar/Avatar.jsx";
import EditableName from "../EditableName/EditableName.jsx";
import getInitials from "../../utils/getInitials.js";
import styles from "./Message.module.css";

export default function Message({ message, user, onRename }) {
  return (
    <div className={styles.message}>
      <Avatar initials={getInitials(user.name)} color={user.color} size={40} />
      <div>
        <div className={styles.meta}>
          <EditableName
            className={styles.author}
            name={user.name}
            onSave={(newName) => onRename(user.id, newName)}
          />
          <span className={styles.time}>{message.time}</span>
        </div>
        <div className={styles.bubble}>{message.text}</div>
      </div>
    </div>
  );
}
