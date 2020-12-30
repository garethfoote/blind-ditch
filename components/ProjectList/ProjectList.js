import { ProjectListItem } from "./ProjectListItem";

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
  return (
    <>
      {projects.map((project, idx) => {
        const details = project.projectFields.details;
        // console.log(project);
        const image = project.featuredImage
          ? project.featuredImage.node
          : firstMainImage(project.projectFields.flexibleContent)?.image;
        // console.log(image);
        return (
          <React.Fragment key={idx}>
            <ProjectListItem
              title={project.title}
              slug={project.slug}
              image={image}
              {...details}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
