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
  isPriority = false,
}) => {
  const as = connected
    ? `/projects/${connected.slug}`
    : `/announcements/${slug}`;
  const href = connected ? `/projects/[slug]` : `/announcements/[slug]`;
  return (
    <article className="relative h-full">
      <div className="z-20 relative w-2/3 sm:w-1/2 h-full">
        <div className="absolute top-1/2 transform -translate-y-1/2">
          <span className="title-accent text-xs bg-yellow p-1">
            {type} {date && " | "}
            {date && <time dateTime={date}>{date}</time>}
          </span>

          <Link as={as} href={href}>
            <a className="block hover:underline text-lg md:text-xl bg-offwhite bg-opacity-25 rounded-lg font-normal text-black my-sm mb-lg pr-5">
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
      </div>

      <div className="absolute top-0 bottom-0 left-1/3 sm:left-1/2 right-4 z-10">
        <div className="relative w-full h-full image-shadow px-5">
          {image ? (
            <Image
              className="z-10 image-loading"
              src={image.sourceUrl}
              layout="fill"
              objectFit="cover"
              priority={isPriority}
              loading={isPriority ? "eager" : "lazy"}
            />
          ) : (
            <div className="z-10 image-loading"></div>
          )}
        </div>
      </div>
    </article>
  );
};
