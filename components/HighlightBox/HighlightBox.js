import classnames from "classnames";
import styles from "./HighlightBox.module.css";

export const HighlightBoxGreen = ({
  html,
  hasShadow = false,
  isQuote = false,
}) => {
  return (
    <div
      className={classnames(
        { "inner-quote": isQuote, shadow: hasShadow },
        styles.containerGreen
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const HighlightBoxBlue = ({ html, context }) => {
  return (
    <div
      className={classnames(
        "text-xs sm:text-sm p-3 sm:p-4",
        styles.containerBlue
      )}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {context && <div className={styles.context}>{context}</div>}
    </div>
  );
};
