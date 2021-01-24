import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./ProjectList.module.css";

import { ProjectTypes } from "../ProjectTypes";
import { proportionalScale } from "../../lib/utils";
const handleMouseMove = (ev) => {
  let boundsX = ev.currentTarget.getBoundingClientRect().x;
  // console.log(ev.clientX - boundsX);
};

export const ProjectListItem = ({
  title,
  slug,
  yearStart,
  showYear,
  yearEnd = "",
  projectTypes,
  location,
  image,
}) => {
  const [isVisible, setVisibility] = useState(false);
  const [mousePosX, setMousePosX] = useState(0);

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
      onMouseMove={(ev) => handleMouseMove(ev)}
      className="relative flex align-end h-8 sm:h-12"
    >
      {/* <div>
        <time dateTime={yearStart}>{yearStart}</time>
        {yearEnd && " - "}
        {yearEnd && <time dateTime={yearEnd}>{yearEnd}</time>}
      </div> */}
      <div className="self-end">
        <time
          className={classnames(
            styles.year,
            { invisible: showYear === false },
            "font-accent text-sm sm:text-md text-blue absolute tracking-wide pointer-events-none"
          )}
          dateTime={yearStart}
        >
          {yearStart}
        </time>
        <Link as={`/projects/${slug}`} href="/projects/[slug]">
          <a
            className="hover:underline text-sm sm:text-md md:text-lg uppercase leading-6 tracking-wide pl-lg sm:pl-xl whitespace-nowrap"
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
              className="image-loading opacity-90"
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
        <hr className="relative -top-2 mx-1 border border-black border-dashed border-solid" />
      </div>
      <div className="font-accent uppercase text-right text-xs sm:text-sm md:text-base self-end whitespace-nowrap">
        {location}
      </div>
    </article>
  );
};
