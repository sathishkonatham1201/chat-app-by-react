// "Gregory Goolsby" -> "GG". Used so the avatar updates when a name changes.
export default function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}
