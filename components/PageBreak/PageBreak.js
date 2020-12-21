import styles from "./PageBreak.module.css";
import cx from "classnames";

export const PageBreak = () => {
  return <hr className={cx(styles.pageBreak, "my-xl")} />;
};
