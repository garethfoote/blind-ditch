import classnames from "classnames";
import Image from "next/image";
import parse from "html-react-parser";
import Container from "../container";
import { ProjectTypes } from "../ProjectTypes";
import styles from "./ProjectPageTitle.module.css";

export const ProjectPageTitle = ({ title, date }) => {
  return (
    <div className="mx-auto px-5 md:px-10 lg:px-5 max-w-2xl text-center pt-8">
      <h2 className="uppercase inline tracking-widest text-xl sm:text-2xl leading-10 sm:leading-tight">
        {title}
      </h2>
      <h3 className={classnames("font-accent text-lg")}>({date})</h3>
    </div>
  );
};
