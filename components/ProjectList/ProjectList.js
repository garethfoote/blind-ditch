import { ProjectListItem } from "./ProjectListItem";
import classnames from "classnames";

const firstMainImage = (content) => {
  return content
    .filter(
      (item) =>
        item.fieldGroupName ===
        "project_Projectfields_FlexibleContent_MainImageBlock"
    )
    .shift();
};
export const ProjectList = ({ projects }, idx) => {
  let previousYearStart;
  return (
    <>
      {projects.map((project, idx) => {
        const details = project.projectFields.details;
        const image = project.featuredImage
          ? project.featuredImage.node
          : firstMainImage(project.projectFields.flexibleContent)?.image;

        const isFirstYear = previousYearStart !== details.yearStart;
        previousYearStart = details.yearStart;
        return (
          <div
            className={classnames({ "mt-lg": isFirstYear && idx > 0 })}
            key={idx}
          >
            <ProjectListItem
              title={project.title}
              slug={project.slug}
              image={image}
              showYear={isFirstYear}
              {...details}
            />
          </div>
        );
      })}
    </>
  );
};
