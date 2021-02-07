import { ProjectTypes } from "../ProjectTypes";
import classnames from "classnames";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails({ date, location, projectTypes }) {
  return (
    <div
      className={classnames(
        styles.cols,
        "uppercase font-accent text-xs leading-6 tracking-wide"
      )}
    >
      <div className="text-strong-yellow">
        <ProjectTypes types={projectTypes} />
      </div>
      <dl className="lg:mt-md">
        <dt>Date</dt>
        <dd className="text-blue">{date}</dd>
      </dl>
      <dl className="lg:mt-md">
        <dt>Location</dt>
        <dd className="text-blue">{location}</dd>
      </dl>
    </div>
  );
}
