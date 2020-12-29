import Link from "next/link";
import Image from "next/image";

// { details, slug, title }
export const AnnouncementListItem = ({
  slug,
  title,
  type,
  date,
  connected,
  image,
}) => {
  const as = connected
    ? `/projects/${connected.slug}`
    : `/announcements/${slug}`;
  const href = connected ? `/projects/[slug]` : `/announcements/[slug]`;
  return (
    <article className="px-5 max-w-4xl mx-auto min-h-64">
      <div className="relative w-full">
        <div className="z-20 relative p-5 w-3/4 sm:w-1/2">
          <span className="title-accent text-xs bg-yellow p-1">
            {type} {date && " | "}
            {date && <time dateTime={date}>{date}</time>}
          </span>

          <Link as={as} href={href}>
            <a className="block hover:underline text-xl bg-offwhite bg-opacity-50 font-normal text-black my-sm">
              {title}
            </a>
          </Link>

          <Link as={as} href={href}>
            <a className="button my-sm">
              <span className="title-accent p-2 bg-mint border border-black border-solid">
                {type.toLowerCase() === "call for participation"
                  ? "Take Part"
                  : "Read More"}
              </span>
            </a>
          </Link>
        </div>

        <div className="absolute top-0 bottom-0 left-1/3 sm:left-1/2 right-4 z-10">
          <div className="w-full h-full image-shadow px-5">
            {image ? (
              <Image
                className="z-10 image-loading"
                src={image.sourceUrl}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <div className="z-10 image-loading"></div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
{
  /* <div>
        {type} {date && " | "}
        {date && <time dateTime={date}>{date}</time>}
      </div>

      {connected ? (
        <Link as={`/projects/${connected.slug}`} href="/projects/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
      ) : (
        <Link as={`/announcements/${slug}`} href="/announcements/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
      )} */
}

<div className="px-5 max-w-4xl mx-auto min-h-64">
  <div className="relative w-full">
    <div className="z-20 relative p-5 w-3/4 sm:w-1/2">
      <span className="title-accent text-xs bg-yellow p-1">
        Call for Participation
      </span>
      <div className="text-xl bg-offwhite bg-opacity-50 font-normal text-black my-sm">
        This City’s Centre project looking for contributions
      </div>

      <button className="button my-sm">
        <span className="title-accent p-2 bg-mint border border-black border-solid">
          Take Part
        </span>
      </button>
    </div>

    <div className="absolute top-0 bottom-0 left-1/3 sm:left-1/2 right-4 z-10">
      <div className="w-full h-full image-shadow px-5">
        <Image
          className="z-10 image-loading"
          src="http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </div>
</div>;
