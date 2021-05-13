import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import classnames from "classnames";
import styles from "./AnnouncementList.module.css";

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
    <Link as={as} href={href}>
      <a>
        <article className="flex">
          <div
            className={classnames("relative w-36 sm:w-40 h-60 sm:h-48", {
              [styles.mintFilter]:
                type.toLowerCase() === "call for participation",
              [styles.yellowFilter]: ["event", "news"].includes(
                type.toLowerCase()
              ),
            })}
          >
            {image ? (
              <Image
                className={classnames("z-10 image-loading")}
                src={image.sourceUrl}
                layout="fill"
                objectFit="cover"
                priority={isPriority}
                loading={isPriority ? "eager" : "lazy"}
                alt={image.altText || image.title}
              />
            ) : (
              <div className="z-10 image-loading"></div>
            )}
          </div>
          <div
            className={classnames("w-44 sm:w-64 h-60 sm:h-48 p-4", {
              ["bg-mint"]: type.toLowerCase() === "call for participation",
              ["bg-yellow"]: ["event", "news"].includes(type.toLowerCase()),
            })}
          >
            <div className="font-accent flex border-b border-black pb-2">
              <h2 className="flex-grow text-xs uppercase leading-4">{type}</h2>
              {date && (
                <time className="text-2xs leading-4" dateTime={date}>
                  {date}
                </time>
              )}
            </div>
            <p className="text-sm mt-4">{title}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};
