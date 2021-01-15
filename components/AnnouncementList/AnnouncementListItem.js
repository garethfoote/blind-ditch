import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";

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
      <div className="z-20 relative w-11/12 sm:w-3/5 md:w-1/2 h-full md:ml-md">
        <div className="absolute top-1/2 left-6 sm:-left-4 md:left-auto md:right-6 transform -translate-y-1/2">
          <span className="py-1 px-2 title-accent text-xs md:text-base bg-yellow">
            {type} {date && " | "}
            {date && <time dateTime={date}>{date}</time>}
          </span>

          <div className="max-w-md block w-full my-sm mb-xl pr-5">
            <Link as={as} href={href}>
              <a className="title-underline-hover inline p-1 text-lg-xl sm:text-xl bg-offwhite bg-opacity-60 font-normal text-black">
                {title}
              </a>
            </Link>
          </div>

          <Button as={as} href={href}>
            {type.toLowerCase() === "call for participation"
              ? "Take Part"
              : "Read More"}
          </Button>
        </div>
      </div>

      <div className="absolute -inset-6 sm:top-0 sm:bottom-0 sm:left-2/5 md:left-1/2 sm:right-4 lg:pr-xl z-10">
        <div className="sm:max-w-md relative w-full h-full image-shadow-sm image-shadow-sm-br overflow-hidden sm:overflow-visible px-5">
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
