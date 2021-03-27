import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import classnames from "classnames";
import styles from "./ProjectList.module.css";
import { ScrollingDirContext } from "./ProjectListContext";

import { ProjectTypes } from "../ProjectTypes";
import { proportionalScale, scrollTo } from "../../lib/utils";

export const ProjectListItem = ({
  title,
  slug,
  yearStart,
  showYear,
  projectTypes,
  location,
  image,
  index = 0,
  hasComplete,
}) => {
  const [isImgVisible, setImgVisibility] = useState(false);
  const [isTypeVisible, setTypeVisibility] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);
  const [internalScrollDir, setInternalScrollDir] = useState(-1);
  const { scrollDirection } = useContext(ScrollingDirContext);

  let titleRef = React.createRef();

  let scaled = proportionalScale(
    image?.mediaDetails.width,
    image?.mediaDetails.height,
    384,
    384
  );

  useEffect(() => {
    if (isScrolling) {
      // console.log("Blocked! isScrolling", index);
      return;
    }

    if (internalScrollDir !== scrollDirection) {
      // console.log("Direction doesn't match - CHANGE + animate");
      setInternalScrollDir(scrollDirection);
      animate();
    }

    async function animate() {
      // console.log(`start anim ${index}`);
      setIsScrolling(true);
      await scrollTo(titleRef.current, scrollDirection);
      // console.log(`finished anim ${index}`);
      setIsScrolling(false);
      hasComplete();
    }
  }, [isScrolling, internalScrollDir, scrollDirection, titleRef, hasComplete]);

  return (
    <article
      className={classnames(
        styles.flexItem,
        "relative flex self-end align-end h-8 sm:h-12"
      )}
    >
      <time
        className={classnames(
          styles.year,
          { invisible: showYear === false },
          "font-accent text-xs leading-3 text-blue relative top-2 sm:top-5 tracking-wide pointer-events-none"
        )}
        dateTime={yearStart}
      >
        <span className="w-1/2 inline-block text-center">
          {yearStart.substr(0, 1)}
        </span>
        <span className="w-1/2 inline-block text-center">
          {yearStart.substr(1, 1)}
        </span>
        <br />
        <span className="w-1/2 inline-block text-center">
          {yearStart.substr(2, 1)}
        </span>
        <span className="w-1/2 inline-block text-center">
          {yearStart.substr(3, 1)}
        </span>
      </time>
      <Link as={`/projects/${slug}`} href="/projects/[slug]">
        <a
          ref={titleRef}
          onMouseEnter={() => setImgVisibility(true)}
          onMouseLeave={() => setImgVisibility(false)}
          className="self-end leading-none title-underline-hover text-sm sm:text-md md:text-lg uppercase leading-6 ml-lg whitespace-nowrap overflow-auto max-w-3/4 scrollbars-hidden"
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
