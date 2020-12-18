import { ProjectListItem } from "./ProjectListItem";

export const ProjectList = ({ projects }, idx) => {
  return (
    <>
      {projects.map(({ node }, idx) => (
        <React.Fragment key={idx}>
          <ProjectListItem project={node} />
          <hr />
        </React.Fragment>
      ))}
    </>
  );
};
