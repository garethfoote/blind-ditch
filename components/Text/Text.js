import styles from "./Text.module.css";
import classnames from "classnames";

export const Text = ({ content, isLarge = false }) => {
  return (
    <div
      className={classnames(styles.text, { [styles.large]: isLarge })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
