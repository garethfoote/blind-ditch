import Link from "next/link";
import { ProjectTypes } from "../ProjectTypes";

export const ProjectListItem = ({
  title,
  slug,
  yearStart,
  yearEnd = "",
  projectTypes,
  location,
}) => {
  return (
    <article>
      <Link as={`/projects/${slug}`} href="/projects/[slug]">
        <a
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Link>
      <div>
        <time dateTime={yearStart}>{yearStart}</time>
        {yearEnd && " - "}
        {yearEnd && <time dateTime={yearEnd}>{yearEnd}</time>}
      </div>
      <div>{projectTypes?.name}</div>
      <ProjectTypes types={projectTypes} />
      <div>{location}</div>
    </article>
  );
};
