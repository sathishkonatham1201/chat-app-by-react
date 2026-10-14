import { useState } from "react";
import CategoryTabs from "./CategoryTabs.jsx";
import SearchBar from "./SearchBar.jsx";
import EmojiGrid from "./EmojiGrid.jsx";
import useFrequentEmojis from "../../hooks/useFrequentEmojis.js";
import { emojiCategories } from "../../data/emojiData.js";
import styles from "./EmojiPicker.module.css";

export default function EmojiPicker({ onSelect }) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("recent");
  const { frequent, addFrequent } = useFrequentEmojis();

  function handlePick(char) {
    addFrequent(char);   // remember it
    onSelect(char);      // tell the message box
  }

  // --- decide which sections to show ---
  const search = query.trim().toLowerCase();
  let sections;

  if (search) {
    // Searching: collect every emoji whose keywords match the text
    const results = emojiCategories
      .flatMap((cat) => cat.emojis)
      .filter((e) => e.keywords.some((k) => k.includes(search)))
      .map((e) => e.char);
    sections = [{ title: "Search Results", emojis: results }];
  } else if (activeTab === "recent") {
    // Default view: frequently used + the first category (like the video)
    const smileys = emojiCategories[0];
    sections = [
      { title: "Frequently Used", emojis: frequent },
      { title: smileys.title, emojis: smileys.emojis.map((e) => e.char) },
    ];
  } else {
    const cat = emojiCategories.find((c) => c.id === activeTab);
    sections = [{ title: cat.title, emojis: cat.emojis.map((e) => e.char) }];
  }

  return (
    <div className={styles.picker}>
      <CategoryTabs
        categories={emojiCategories}
        activeTab={activeTab}
        onChange={(id) => {
          setActiveTab(id);
          setQuery("");
        }}
      />
      <SearchBar value={query} onChange={setQuery} />

      <div className={styles.body}>
        {sections.map((section) => (
          <EmojiGrid
            key={section.title}
            title={section.title}
            emojis={section.emojis}
            onPick={handlePick}
          />
        ))}
      </div>
    </div>
  );
}
