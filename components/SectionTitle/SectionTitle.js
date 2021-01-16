import styles from "./SectionTitle.module.css";
import classnames from "classnames";

export const SectionTitle = ({ children, text }) => (
  <div className="text-center px-5 max-w-xl mx-auto my-lg sm:my-xl">
    <div className="text-center">
      <h2 className={classnames(styles.title, "title-underline leading-14")}>
        {text || children}
      </h2>
    </div>
  </div>
);
