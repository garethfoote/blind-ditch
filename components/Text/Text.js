import styles from "./Text.module.css";
import classnames from "classnames";

export const Text = ({ content, isCentred = false, makeLarge = false }) => {
  return (
    <div
      className={classnames(styles.text, {
        "text-center": isCentred,
        [styles.large]: makeLarge,
      })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
