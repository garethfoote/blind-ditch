import { AnnouncementListItem } from "./AnnouncementListItem";
import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import styles from "./AnnouncementList.module.css";
import classnames from "classnames";

export const AnnouncementList = ({ announcements }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
  });

  return (
    <div className="relative">
      {/* <Transition in={position} timeout={1500}> */}
      {announcements.map((announcement, idx) => {
        const details = announcement.announcementFields;
        return (
          <div className={classnames({ hidden: idx !== position })} key={idx}>
            <AnnouncementListItem
              title={announcement.title}
              slug={announcement.slug}
              image={announcement.featuredImage?.node}
              isPriority={idx === 0}
              {...details}
            />
          </div>
        );
      })}
      {/* </Transition> */}

      <div className="absolute z-20 top-1/2 w-full h-8">
        <div className="relative w-full">
          <button
            className={classnames(
              styles.arrow,
              styles.arrowLeft,
              "w-8 md:w-12 absolute top-0 left-1 sm:left-2 lg:left-8 xl:left-12"
            )}
            onClick={() =>
              setPosition(
                position === 0 ? announcements.length - 1 : position - 1
              )
            }
          >
            <svg
              fill="none"
              viewBox="0 0 50 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.112.2c-1.488 3.072-2.88 5.376-4.176 6.912h41.976v3.024H7.936c1.296 1.536 2.688 3.84 4.176 6.912h-2.52C6.568 13.544 3.4 10.952.088 9.272V7.976C3.4 6.344 6.568 3.752 9.592.2h2.52z" />
            </svg>
          </button>

          <button
            className={classnames(
              styles.arrow,
              styles.arrowRight,
              "w-8 md:w-12 absolute top-0 right-1 sm:right-2 lg:right-8 xl:right-12"
            )}
            onClick={() =>
              setPosition(
                position === announcements.length - 1 ? 0 : position + 1
              )
            }
          >
            <svg
              fill="none"
              viewBox="0 0 50 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37.888 17.8c1.488-3.072 2.88-5.376 4.176-6.912H.088V7.864h41.976c-1.296-1.536-2.688-3.84-4.176-6.912h2.52c3.024 3.504 6.192 6.096 9.504 7.776v1.296c-3.312 1.632-6.48 4.224-9.504 7.776h-2.52z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
