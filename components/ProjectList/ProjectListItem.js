import Link from "next/link";
import { ProjectTypes } from "../ProjectTypes";

export const ProjectListItem = ({ project }, idx) => {
  const details = project.projectFields.details;
  return (
    <article>
      <Link as={`/projects/${project.slug}`} href="/projects/[slug]">
        <a
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: project.title }}
        />
      </Link>
      <div>
        <time dateTime={details.yearStart}>{details.yearStart}</time>
        {details.yearEnd && " - "}
        {details.yearEnd && (
          <time dateTime={details.yearEnd}>{details.yearEnd}</time>
        )}
      </div>
      <div>{details.projectTypes?.name}</div>
      <ProjectTypes types={details.projectTypes} />
      <div>{details.location}</div>
    </article>
  );
};
