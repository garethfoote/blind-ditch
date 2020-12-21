import styles from "./HighlightBox.module.css";
import classnames from "classnames";

export const HighlightBox = ({ html }) => {
  return (
    <div
      className={classnames(styles.container)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
