import { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import styles from "./MessageList.module.css";

export default function MessageList({ messages, users, onRename }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.list}>
      {messages.map((m) => (
        <Message
          key={m.id}
          message={m}
          user={users[m.authorId]}     // look up the author by id
          onRename={onRename}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
