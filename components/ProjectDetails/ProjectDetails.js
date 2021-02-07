import { ProjectTypes } from "../ProjectTypes";

export default function ProjectDetails({ date, location, projectTypes }) {
  console.log(projectTypes);
  return (
    <div>
      <h4 className="uppercase font-accent text-base leading-normal tracking-wide">
        <ProjectTypes types={projectTypes} />
      </h4>
      <p>{date}</p>
      <p>{location}</p>
    </div>
  );
}
