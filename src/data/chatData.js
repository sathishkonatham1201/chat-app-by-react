// Fake data so the app works without a server.

// Every person lives here, keyed by id. Messages only store the id,
// so changing a name here changes it in ALL of that person's messages.
export const initialUsers = {
  me:      { id: "me",      name: "Rolande Raimondi", title: "Research Nurse", color: "#e0788a" },
  bot:     { id: "bot",     name: "PubNub Bot",       color: "#d6314a" },
  gregory: { id: "gregory", name: "Gregory Goolsby",  color: "#d3e05f" },
  elin:    { id: "elin",    name: "Elin Emmanuel",    color: "#e0788a" },
};

export const currentUserId = "me";

export const channels = [
  { id: "poland", name: "Poland Office" },
  { id: "intro", name: "Introductions" },
  { id: "india", name: "India Office" },
];

// Messages use authorId instead of a copied name
export const initialMessages = {
  poland: [],
  intro: [
    { id: 1, authorId: "bot", time: "12:16",
      text: "Welcome to Team Chat. 👏👏 Send a message now to start interacting with other users in the app. ⬇️" },
    { id: 2, authorId: "gregory", time: "17:28", text: "Hey everyone!" },
    { id: 3, authorId: "elin", time: "17:30", text: "Oh hi, Gregory! Rolande is around, too..." },
  ],
  india: [],
};
