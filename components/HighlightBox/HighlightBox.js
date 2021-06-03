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
        "text-sm font-accent p-2 text-justify",
        { "inner-quote": isQuote, shadow: hasShadow },
        styles.containerGreen
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const HighlightBoxBlue = ({ html, context }) => {
  return (
    <div className={classnames("text-xs sm:text-sm p-3", styles.containerBlue)}>
      <div dangerouslySetInnerHTML={{ __html: "&hellip;<br/>" + html }} />
      {context && (
        <div className="relative top-2 text-right text-white">
          <p className="text-xs leading-none bg-blue inline">{context}</p>
        </div>
      )}
    </div>
  );
};
