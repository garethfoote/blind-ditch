import Image from "next/image";
import Link from "next/link";
import { Text } from "../../components/Text";

export const MemberProfile = ({
  date,
  image,
  name,
  profile,
  role,
  projects,
}) => {
  return (
    <>
      <div className="border-b border-offwhite h-full">
        <div className="relative w-full h-80 mb-4 image-border">
          {image && (
            <Image
              className="image-loading"
              alt={image.altText || name}
              src={image.sourceUrl}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <p className="text-lg mb-4">{name}</p>
        <div className="mb-4 flex uppercase font-accent text-xs leading-6 tracking-wide">
          <div className="w-48">
            <dl>
              <dt className="text-blue">Dates</dt>
              <dd>{date}</dd>
            </dl>
          </div>
          {projects && (
            <div className="flex-grow">
              <dl>
                <dt className="text-blue">Projects</dt>
                {projects.map(
                  (project, idx) =>
                    project && (
                      <dd key={idx}>
                        <span className="inline bg-yellow">
                          <Link
                            as={`/projects/${project.slug}`}
                            href="/projects/[slug]"
                          >
                            <a>{project.title}</a>
                          </Link>
                        </span>
                        {idx != projects.length - 1 && ", "}
                      </dd>
                    )
                )}
              </dl>
            </div>
          )}
        </div>
        {role && (
          <div className="mb-4 uppercase font-accent text-xs leading-6 tracking-wide">
            <dl>
              <dt className="text-blue">Role</dt>
              <dd>{role}</dd>
            </dl>
          </div>
        )}

        <div className="border-t border-black pt-md">
          <Text content={profile} />
        </div>
      </div>
      <hr className="page-break-thin mb-md" />
    </>
  );
};
