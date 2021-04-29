import { ProjectTypes } from "../ProjectTypes";
import Link from "next/link";
import classnames from "classnames";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails({ date, location, projectTypes, slug }) {
  return (
    <div className="uppercase font-accent text-xs leading-6 tracking-wide">
      <div className={classnames(styles.cols, "pb-md")}>
        <div className="text-strong-yellow">
          <ProjectTypes types={projectTypes} />
        </div>

        <dl className="lg:mt-md">
          <dt className="text-blue">Location</dt>
          <dd>{location}</dd>
        </dl>
      </div>
      <dl className="lg:mt-md">
        <dt className="text-blue">Documents</dt>
        <dd>
          <Link as={`/documents/${slug}`} href="/documents/[slug]">
            <a
              className={classnames(
                styles.hoverTranslate,
                "inline-block hover:underline"
              )}
            >
              See blogs, videos and writing associated with project
            </a>
          </Link>
          <span className="transition-transform transform text-md inline-block ml-sm lg:ml-0">
            →
          </span>
        </dd>
      </dl>
    </div>
  );
}
