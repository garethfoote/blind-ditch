import styles from "./SectionTitle.module.css";

export const SectionTitle = ({ children, text }) => (
  <div className="text-center px-5 max-w-xl mx-auto my-lg sm:my-xl">
    <div className="text-center">
      <h2 className={styles.title}>{text || children}</h2>
    </div>
  </div>
);
