import { ProjectListItem } from "./ProjectListItem";

export const ProjectList = ({ projects }, idx) => {
  return (
    <>
      {projects.map((project, idx) => (
        <React.Fragment key={idx}>
          <ProjectListItem project={project} />
          <hr />
        </React.Fragment>
      ))}
    </>
  );
};
