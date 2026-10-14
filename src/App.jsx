import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ChatHeader from "./components/ChatHeader/ChatHeader.jsx";
import MessageList from "./components/MessageList/MessageList.jsx";
import MessageInput from "./components/MessageInput/MessageInput.jsx";
import { initialUsers, currentUserId, channels, initialMessages } from "./data/chatData.js";
import styles from "./App.module.css";

export default function App() {
  const [users, setUsers] = useState(initialUsers);                 // NEW: all people
  const [activeChannelId, setActiveChannelId] = useState("intro");
  const [messagesByChannel, setMessagesByChannel] = useState(initialMessages);

  const activeChannel = channels.find((c) => c.id === activeChannelId);
  const messages = messagesByChannel[activeChannelId];

  // NEW: change one person's name. Because messages only store the id,
  // every old and new message shows the new name automatically.
  function handleRename(userId, newName) {
    setUsers((prev) => ({
      ...prev,
      [userId]: { ...prev[userId], name: newName },
    }));
  }

  function handleSend(text) {
    const newMessage = {
      id: Date.now(),
      authorId: currentUserId,                                      // CHANGED: id, not name
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }),
      text,
    };

    setMessagesByChannel((prev) => ({
      ...prev,
      [activeChannelId]: [...prev[activeChannelId], newMessage],
    }));
  }

  return (
    <div className={styles.app}>
      <Sidebar
        user={users[currentUserId]}
        channels={channels}
        activeChannelId={activeChannelId}
        onSelectChannel={setActiveChannelId}
        onRename={handleRename}
      />

      <main className={styles.chat}>
        <ChatHeader channel={activeChannel} />
        <MessageList messages={messages} users={users} onRename={handleRename} />
        <MessageInput onSend={handleSend} />
      </main>
    </div>
  );
}
