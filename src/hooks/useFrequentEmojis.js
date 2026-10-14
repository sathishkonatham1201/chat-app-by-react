import { useState } from "react";

// Remembers the last emojis the user picked (shown in "Frequently Used").
const DEFAULTS = ["😀", "👍", "😘", "😆", "😍", "👋", "😱"];
const MAX = 12;

export default function useFrequentEmojis() {
  const [frequent, setFrequent] = useState(DEFAULTS);

  function addFrequent(char) {
    // Put the new emoji first and remove any duplicate
    setFrequent((prev) => [char, ...prev.filter((c) => c !== char)].slice(0, MAX));
  }

  return { frequent, addFrequent };
}
