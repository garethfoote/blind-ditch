import styles from "./SectionTitle.module.css";

export const SectionTitle = ({ children }) => (
  <div className="text-center px-5 max-w-xl mx-auto my-lg">
    <div className="text-center">
      <h2 className={styles.title}>{children}</h2>
    </div>
  </div>
);
