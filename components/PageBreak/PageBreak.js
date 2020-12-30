import styles from "./PageBreak.module.css";
import cx from "classnames";

export const PageBreak = ({
  spacing = "2xl",
  topSpacing = "",
  bottomSpacing = "",
}) => {
  return (
    <hr
      className={cx(
        styles.pageBreak,
        {
          [`mb-${bottomSpacing}`]: bottomSpacing !== "",
          [`mt-${topSpacing}`]: topSpacing !== "",
        },
        `my-${spacing}`
      )}
    />
  );
};
