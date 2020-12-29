import styles from "./PageBreak.module.css";
import cx from "classnames";

export const PageBreak = ({ spacing = "2xl" }) => {
  return <hr className={cx(styles.pageBreak, `my-${spacing}`)} />;
};
