import Link from "next/link";
import Image from "next/image";
import styles from "./Documents.module.css";
import classnames from "classnames";

export const DocumentsItem = ({
  slug,
  title,
  type,
  date,
  connected,
  image,
}) => {
  return (
    <article
      className={classnames(
        styles.cols,
        "justify-end min-h-36 border-top relative border-t border-black pt-3"
      )}
    >
      <p className="text-base sm:text-md">Title or description of thing</p>
      <div className="flex justify-end">
        <dl className="uppercase font-accent text-xs leading-6 tracking-wide">
          <dt className="text-blue">Date</dt>
          <dd>2018</dd>
        </dl>
      </div>

      <div className="flex justify-end">
        <dl className="uppercase font-accent text-xs leading-6 tracking-wide">
          <dt className="text-blue">Project</dt>
          <dd className="inline bg-yellow">
            <Link as={`/projects/global-players`} href="/projects/[slug]">
              <a>Global Players</a>
            </Link>
          </dd>
        </dl>
      </div>
      <div className="absolute text-2xs uppercase -left-3 sm:-left-6 top-3 transform -translate-x-full">
        Sound
      </div>
    </article>
  );
};
