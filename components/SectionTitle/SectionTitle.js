import styles from "./SectionTitle.module.css";

export const SectionTitle = ({ title }) => (
  <div className="container flex justify-center">
    <h2 className={styles.title}>{title}</h2>
  </div>
);
