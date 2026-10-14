import styles from "./CategoryTabs.module.css";

// The row of icons at the top of the picker
export default function CategoryTabs({ categories, activeTab, onChange }) {
  const tabs = [{ id: "recent", icon: "🕘" }, ...categories];

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${tab.id === activeTab ? styles.active : ""}`}
          onClick={() => onChange(tab.id)}
          aria-label={tab.id}
        >
          {tab.icon}
        </button>
      ))}
    </div>
  );
}
