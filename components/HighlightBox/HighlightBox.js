import styles from "./HighlightBox.module.css";

export const HighlightBox = ({ html }) => {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
