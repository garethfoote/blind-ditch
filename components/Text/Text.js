import styles from "./Text.module.css";
import classnames from "classnames";
import Container from "../../components/container";

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
