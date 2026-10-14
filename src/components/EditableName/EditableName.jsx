import { useState } from "react";
import styles from "./EditableName.module.css";

// Shows a name as text. Click it to edit.
//   Enter or clicking away -> save     Escape -> cancel
export default function EditableName({ name, onSave, className = "" }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);

  function startEditing() {
    setDraft(name);        // start from the current name
    setEditing(true);
  }

  function save() {
    const cleaned = draft.trim();
    if (cleaned && cleaned !== name) onSave(cleaned);   // ignore empty names
    setEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") save();
    if (event.key === "Escape") setEditing(false);
  }

  if (editing) {
    return (
      <input
        className={styles.input}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={save}
        autoFocus
        maxLength={30}
      />
    );
  }

  return (
    <button
      className={`${styles.name} ${className}`}
      onClick={startEditing}
      title="Click to change name"
    >
      {name}
    </button>
  );
}
