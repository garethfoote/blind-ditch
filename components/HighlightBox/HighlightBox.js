import classnames from "classnames";
import styles from "./HighlightBox.module.css";

export const HighlightBox = ({ html, hasShadow = false, isQuote = false }) => {
  return (
    <div
      className={classnames(
        { "inner-quote": isQuote, shadow: hasShadow },
        styles.container
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
