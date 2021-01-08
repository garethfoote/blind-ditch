import classnames from "classnames";
import styles from "./HighlightBox.module.css";

export const HighlightBox = ({ html, isQuote = false }) => {
  return (
    <div
      className={classnames({ "inner-quote": isQuote }, styles.container)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
