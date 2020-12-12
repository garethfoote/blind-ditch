import { ProjectListItem } from "./ProjectListItem";

export const ProjectList = ({ projects }, idx) => {
  return (
    <>
      {projects.map(({ node }, idx) => (
        <>
          <ProjectListItem key={idx} project={node} />
          <hr />
        </>
      ))}
    </>
  );
};
