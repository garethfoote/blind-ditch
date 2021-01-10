import { AnnouncementListItem } from "./AnnouncementListItem";
import { SectionTitle } from "../SectionTitle";
import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./AnnouncementList.module.css";
import classnames from "classnames";
import { useSwipeable } from "react-swipeable";

export const AnnouncementList = ({ announcements }) => {
  const [position, setPosition] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      // console.log("User Swiped!", eventData);
      setPosition(position === 0 ? announcements.length - 1 : position - 1);
    },
    onSwipedRight: (eventData) => {
      // console.log("User Swiped!", eventData);
      setPosition(position === announcements.length - 1 ? 0 : position + 1);
    },
  });
  useEffect(() => {});

  return (
    <div className="relative">
      <div
        {...handlers}
        className="container px-lg sm:px-xl mx-auto h-96 sm:h-112"
      >
        <div className="relative h-full">
          {announcements.map((announcement, idx) => {
            const details = announcement.announcementFields;
            return (
              <CSSTransition
                classNames={{
                  appearActive: styles["announcement-appear-active"],
                  appearDone: styles["announcement-appear-done"],

                  enterActive: styles["announcement-enter-active"],
                  enterDone: styles["announcement-enter-done"],

                  exitActive: styles["announcement-exit-active"],
                  exitDone: styles["announcement-exit-done"],
                }}
                key={idx}
                in={idx === position}
                timeout={1000}
                appear={idx === 0}
              >
                {(state) => {
                  return (
                    <div key={idx} className={styles.announcement}>
                      <AnnouncementListItem
                        title={announcement.title}
                        slug={announcement.slug}
                        image={announcement.featuredImage?.node}
                        isPriority={idx === 0}
                        {...details}
                      />
                    </div>
                  );
                }}
              </CSSTransition>
            );
          })}
        </div>
      </div>
      <div className="absolute top-1/2 w-full h-8">
        <div className="justify-center items-center relative w-full">
          <button
            className={classnames(
              styles.arrow,
              styles.arrowLeft,
              // "w-8 md:w-12 relative"
              "z-20 w-8 md:w-12 absolute top-0 left-1 sm:left-2 lg:left-2 xl:left-4"
            )}
            onClick={() =>
              setPosition(
                position === 0 ? announcements.length - 1 : position - 1
              )
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26">
              <path d="M18.625 0c-2.305 4.74-4.461 8.296-6.469 10.667H40v4.666H12.156c2.008 2.37 4.164 5.926 6.469 10.667H14.72C10.037 20.593 5.131 16.593 0 14v-2C5.13 9.481 10.037 5.481 14.721 0h3.904z" />
            </svg>
          </button>
          {/* <div className="container px-lg sm:px-xl mx-auto"></div> */}
          <button
            className={classnames(
              styles.arrow,
              styles.arrowRight,
              // "w-8 md:w-12 relative"
              "z-20 w-8 md:w-12 absolute top-0 right-1 sm:right-2 lg:right-8 xl:right-4"
            )}
            onClick={() =>
              setPosition(
                position === announcements.length - 1 ? 0 : position + 1
              )
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 28">
              <path d="M21.463 27.049c2.305-4.759 4.461-8.328 6.469-10.707H.088v-4.684h27.844C25.924 9.28 23.768 5.71 21.464.952h3.903c4.684 5.428 9.59 9.442 14.721 12.045v2.007c-5.13 2.528-10.037 6.543-14.721 12.045h-3.904z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
