import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import styles from "./ProjectList.module.css";
import { Media, MediaContextProvider } from "../../lib/media-queries";

import { ScrollingDirContext } from "./ProjectListContext";
import { ProjectTypes } from "../ProjectTypes";
import { proportionalScale, scrollTo, wait } from "../../lib/utils";

export const ProjectListItem = ({
  title,
  slug,
  yearStart,
  showYear,
  projectTypes,
  location,
  locationShort,
  image,
  hasComplete,
  noLink = false,
}) => {
  const [isImgVisible, setImgVisibility] = useState(false);
  const [isTypeVisible, setTypeVisibility] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const [isScrolling, setIsScrolling] = useState(false);
  const [internalScrollDir, setInternalScrollDir] = useState(-1);
  const { scrollDirection } = useContext(ScrollingDirContext);

  let viewportParentOffset = 0;
  let viewportOffset = 0;
  let titleRef = React.createRef();
  let scaled = proportionalScale(
    image?.mediaDetails.width,
    image?.mediaDetails.height,
    384,
    384
  );

  const moveHandler = (e) => {
    if (viewportParentOffset === 0) {
      viewportParentOffset = e.target.parentElement.getBoundingClientRect();
      viewportOffset = e.target.getBoundingClientRect();
    }
    pos.x = e.clientX - viewportParentOffset.left + 30;
    pos.y = e.clientY - viewportOffset.top;
    // console.log(e.target.textContent);
    setPos(pos);
  };

  useEffect(async () => {
    async function animate() {
      // console.log(`start anim ${index}`);
      setIsScrolling(true);
      await scrollTo(titleRef.current, scrollDirection);
      // console.log(`finished anim ${index}`);
      setIsScrolling(false);
      hasComplete();
    }

    if (isScrolling) {
      // console.log("Blocked! isScrolling", index);
      return;
    }

    if (internalScrollDir !== scrollDirection) {
      // console.log("Direction doesn't match - CHANGE + animate");
      // await wait(1000);
      setInternalScrollDir(scrollDirection);
      animate();
    }
  }, [isScrolling, internalScrollDir, scrollDirection, titleRef, hasComplete]);

  return (
    <article
      className={classnames(
        styles.flexItem,
        // { "has-gradient": isScrolling === false },
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
          className="self-end leading-none text-sm sm:text-md md:text-lg uppercase leading-6 ml-lg whitespace-nowrap max-w-3/4 scrollbars-hidden overflow-hidden"
          // onMouseMove={moveHandler}
          onMouseEnter={() => {
            setTypeVisibility(true);
            setImgVisibility(true);
          }}
          onMouseLeave={() => {
            setTypeVisibility(false);
            setImgVisibility(false);
          }}
        >
          <span
            className={classnames(
              "w-full block overflow-auto whitespace-nowrap pl-2  scrollbars-hidden",
              {
                ["title-underline-hover"]: noLink == false,
              }
            )}
            ref={titleRef}
          >
            {title}
          </span>
        </a>
      </Link>
      {image && (
        <div
          // style={{ left: `${pos.x}px`, transform: `translateY(${pos.y}px)` }}
          className={classnames(
            "h-0 pointer-events-none overflow-hidden absolute -top-12 left-1/4 image-border z-50",
            {
              ["h-auto"]: isImgVisible === true,
            }
          )}
        >
          <Image
            className="image-loading opacity-100"
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
        className="self-end flex-shrink-0 leading-none font-accent uppercase text-right text-xs sm:text-sm md:text-base select-none"
      >
        <MediaContextProvider>
          <div
            className={classnames("", {
              ["hidden"]: isTypeVisible === true,
              ["inline"]: isTypeVisible === false,
            })}
          >
            <Media at="base">{locationShort}</Media>
            <Media greaterThanOrEqual="desktop">{location}</Media>
          </div>
          <div
            className={classnames("text-strong-yellow", {
              ["inline"]: isTypeVisible === true,
              ["hidden"]: isTypeVisible === false,
            })}
          >
            <Media at="base">
              <ProjectTypes
                types={
                  projectTypes.length > 1
                    ? projectTypes.slice(0, 1)
                    : projectTypes
                }
              />
            </Media>
            <Media greaterThanOrEqual="desktop">
              <ProjectTypes types={projectTypes} />
            </Media>
          </div>
        </MediaContextProvider>
      </div>
    </article>
  );
};
