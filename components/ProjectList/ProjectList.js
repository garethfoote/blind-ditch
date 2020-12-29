import { ProjectListItem } from "./ProjectListItem";

export const ProjectList = ({ projects }, idx) => {
  return (
    <>
      {projects.map((project, idx) => {
        const details = project.projectFields.details;
        return (
          <React.Fragment key={idx}>
            <ProjectListItem
              title={project.title}
              slug={project.slug}
              {...details}
            />
            <hr />
          </React.Fragment>
        );
      })}
    </>
  );
};
