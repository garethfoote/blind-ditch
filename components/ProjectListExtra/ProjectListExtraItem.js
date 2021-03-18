import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import styles from "./ProjectListExtra.module.css";

import { ProjectTypes } from "../ProjectTypes";
import { proportionalScale } from "../../lib/utils";
// const handleMouseMove = (ev) => {
//   let boundsX = ev.currentTarget.getBoundingClientRect().x;
//   // console.log(ev.clientX - boundsX);
// };

export const ProjectListExtraItem = ({
  title,
  slug,
  yearStart,
  showYear,
  yearEnd = "",
  projectTypes,
  location,
  image,
}) => {
  const [isImgVisible, setImgVisibility] = useState(false);
  const [isTypeVisible, setTypeVisibility] = useState(false);

  let scaled = proportionalScale(
    image?.mediaDetails.width,
    image?.mediaDetails.height,
    384,
    384
  );

  return (
    <article className="relative flex align-end h-8 sm:h-12">
      {/* <div>
        <time dateTime={yearStart}>{yearStart}</time>
        {yearEnd && " - "}
        {yearEnd && <time dateTime={yearEnd}>{yearEnd}</time>}
      </div> */}
      <div className="self-end flex">
        <time
          className={classnames(
            styles.year,
            { invisible: showYear === false },
            "font-accent text-sm w-9 sm:text-md sm:w-14 text-mint-dark absolute tracking-wide pointer-events-none"
          )}
          dateTime={yearStart}
        >
          {yearStart}
        </time>
        <Link as={`/projects/${slug}`} href="/projects/[slug]">
          <a
            onMouseEnter={() => setImgVisibility(true)}
            onMouseLeave={() => setImgVisibility(false)}
            className="self-end leading-none title-underline-hover text-sm sm:text-md md:text-lg uppercase leading-6 tracking-wide ml-lg sm:ml-xl whitespace-nowrap"
          >
            {title}
          </a>
        </Link>
        {image && (
          <div
            className={classnames(
              "h-0 pointer-events-none overflow-hidden absolute -top-12 left-1/4 image-border z-50",
              {
                ["h-auto"]: isImgVisible === true,
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
        <hr className="relative -top-1 mx-1 border border-black border-dashed" />
      </div>
      <div
        onMouseEnter={() => setTypeVisibility(true)}
        onMouseLeave={() => setTypeVisibility(false)}
        className="self-end leading-none font-accent truncate uppercase text-right text-xs sm:text-sm md:text-base select-none"
      >
        <div
          className={classnames("", {
            ["hidden"]: isTypeVisible === true,
            ["inline"]: isTypeVisible === false,
          })}
        >
          {location}
        </div>
        <div
          className={classnames("text-strong-yellow", {
            ["inline"]: isTypeVisible === true,
            ["hidden"]: isTypeVisible === false,
          })}
        >
          <ProjectTypes types={projectTypes} />
        </div>
      </div>
    </article>
  );
};
