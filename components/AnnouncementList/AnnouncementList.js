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
    <>
      {/* <Transition in={position} timeout={1500}> */}
      {announcements.map((announcement, idx) => {
        const details = announcement.announcementFields;
        return (
          <div className={classnames({ hidden: idx !== position })} key={idx}>
            <AnnouncementListItem
              title={announcement.title}
              slug={announcement.slug}
              image={announcement.featuredImage?.node}
              {...details}
            />
          </div>
        );
      })}
      {/* </Transition> */}

      <button
        onClick={() =>
          setPosition(position === 0 ? announcements.length - 1 : position - 1)
        }
      >
        previous
      </button>
      <button
        onClick={() =>
          setPosition(position === announcements.length - 1 ? 0 : position + 1)
        }
      >
        next
      </button>
    </>
  );
};
