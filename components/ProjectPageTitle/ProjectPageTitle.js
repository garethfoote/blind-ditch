import classnames from "classnames";
import Image from "next/image";
import parse from "html-react-parser";
import Container from "../container";
import { ProjectTypes } from "../ProjectTypes";
import styles from "./ProjectPageTitle.module.css";

export const ProjectPageTitle = ({ title, date, types, description }) => {
  return (
    <div className={classnames("mx-auto px-5 max-w-2xl")}>
      <div className="text-center relative z-10 pt-8">
        <h2 className={classnames("text-2xl", styles.title)}>{title}</h2>
        <h3 className={classnames("font-accent text-lg")}>({date})</h3>
        {/* <h4 className={classnames("mx-auto mt-md mb-xl max-w-xs", styles.type)}>
          <ProjectTypes types={types} />
        </h4> */}
      </div>
    </div>
  );
};
