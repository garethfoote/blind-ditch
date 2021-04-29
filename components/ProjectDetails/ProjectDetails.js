import { ProjectTypes } from "../ProjectTypes";
import Link from "next/link";
import classnames from "classnames";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails({
  title,
  location,
  projectTypes,
  slug,
}) {
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
              Find more videos, sounds and writing from {title}
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
