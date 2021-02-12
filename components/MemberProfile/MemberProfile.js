import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import styles from "./MemberProfile.module.css";

export const MemberProfile = ({
  date,
  image,
  name,
  profile,
  role,
  projects,
}) => {
  console.log(role, projects);
  return (
    <div>
      <div className="relative w-full h-80 mb-4">
        <Image
          alt={image.altText || name}
          src={image.sourceUrl}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-lg mb-4">{name}</p>
      <div className="mb-4 flex uppercase font-accent text-xs leading-6 tracking-wide">
        <dl class="flex-grow">
          <dt className="text-blue">Dates</dt>
          <dd>{date}</dd>
        </dl>
        {role && (
          <dl class="flex-grow">
            <dt className="text-blue">Role</dt>
            <dd>{role}</dd>
          </dl>
        )}
      </div>
      {projects && (
        <div className="mb-4 uppercase font-accent text-xs leading-6 tracking-wide">
          <dl>
            <dt className="text-blue">Projects</dt>
            {projects.map((project, idx) => (
              <>
                <dd className="inline bg-yellow" key={idx}>
                  <Link
                    as={`/projects/${project.slug}`}
                    href="/projects/[slug]"
                  >
                    <a>{project.title}</a>
                  </Link>
                </dd>
                {idx != projects.length - 1 && ", "}
              </>
            ))}
          </dl>
        </div>
      )}
      <div className="border-t border-black pt-md">
        <div dangerouslySetInnerHTML={{ __html: profile }} />
      </div>
    </div>
  );
};
