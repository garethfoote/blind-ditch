import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classnames from "classnames";

import { ProjectTypes } from "../ProjectTypes";
import { proportionalScale } from "../../lib/utils";

export const ProjectListItem = ({
  title,
  slug,
  yearStart,
  yearEnd = "",
  projectTypes,
  location,
  image,
}) => {
  const [isVisible, setVisibility] = useState(false);

  let scaled = proportionalScale(
    image?.mediaDetails.width,
    image?.mediaDetails.height,
    384,
    384
  );

  return (
    <article
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      className="relative flex align-end h-12"
    >
      {/* <div>
        <time dateTime={yearStart}>{yearStart}</time>
        {yearEnd && " - "}
        {yearEnd && <time dateTime={yearEnd}>{yearEnd}</time>}
      </div> */}
      <div className="self-end">
        <Link as={`/projects/${slug}`} href="/projects/[slug]">
          <a
            className="hover:underline text-lg uppercase leading-6 tracking-wide self-end"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
        {image && (
          <div
            className={classnames(
              "h-0 pointer-events-none overflow-hidden absolute -top-12 left-1/4 image-border z-50",
              {
                ["h-auto"]: isVisible === true,
              }
            )}
          >
            <Image
              className="image-loading"
              width={scaled.width}
              height={scaled.height}
              alt={image.altText || image.title}
              src={image.sourceUrl}
              layout="intrinsic"
            />
          </div>
        )}
      </div>
      <div className="flex-grow self-end">
        <hr className="relative -top-2 mx-4 border border-black border-dashed border-solid" />
      </div>
      <div className="uppercase self-end">{location}</div>
    </article>
  );
};
