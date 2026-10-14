import { useState } from "react";
import EmojiPicker from "../EmojiPicker/EmojiPicker.jsx";
import styles from "./MessageInput.module.css";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();               // stop the page from reloading
    const trimmed = text.trim();
    if (!trimmed) return;                 // ignore empty messages
    onSend(trimmed);
    setText("");
    setPickerOpen(false);
  }

  // Called by the picker: add the chosen emoji to the end of the text
  function handleEmojiSelect(char) {
    setText((prev) => prev + char);
  }

  return (
    <div className={styles.wrapper}>
      {pickerOpen && <EmojiPicker onSelect={handleEmojiSelect} />}

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type Message"
        />
        <button
          type="button"
          className={styles.emojiBtn}
          aria-label="Open emoji picker"
          onClick={() => setPickerOpen((open) => !open)}
        >
          🙂
        </button>
      </form>
    </div>
  );
}
