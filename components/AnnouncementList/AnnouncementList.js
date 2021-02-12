import { AnnouncementListItem } from "./AnnouncementListItem";
import React, { useEffect, useState } from "react";
import styles from "./AnnouncementList.module.css";
import classnames from "classnames";
import { useSwipeable } from "react-swipeable";
import Slider from "react-slick";

export const AnnouncementList = ({ announcements }) => {
  const [slide, setSlide] = useState(0);

  // const [position, setPosition] = useState(0);
  // const handlers = useSwipeable({
  //   onSwipedLeft: (eventData) => {
  //     setPosition(position === 0 ? announcements.length - 1 : position - 1);
  //   },
  //   onSwipedRight: (eventData) => {
  //     setPosition(position === announcements.length - 1 ? 0 : position + 1);
  //   },
  // });

  let sliderRef = React.createRef();

  const settings = {
    className: "slider home-slider variable-width",
    // className: "slider home-slider variable-width flex items-center",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (i) => {
      console.log("aferChange", i);
      setSlide(i);
      // nextRef.setAttribute("disabled", );
      // setSlide(i);
    },
  };

  return (
    <div className="relative bg-white">
      <div className="h-80 sm:h-64 pt-6 relative">
        <button
          disabled={slide == 0}
          className="absolute -bottom-2 sm:bottom-0 left-2 z-50 text-2xl sm:text-lg disabled:opacity-30"
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        >
          ←
        </button>
        <button
          disabled={slide >= announcements.length}
          className="absolute -bottom-2 sm:bottom-0 right-2 z-50 text-2xl sm:text-lg disabled:opacity-30"
          onClick={() => {
            // const next = slide < announcements.length ? slide + 1 : slide;
            // setSlide(next);
            // console.log(next, announcements.length);
            sliderRef.current.slickNext();
          }}
        >
          {slide}→
        </button>

        <Slider ref={sliderRef} {...settings}>
          <div key={0} className="ml-4 pr-24">
            <h2 className="inline text-md uppercase title-underline">
              Announcements
            </h2>
          </div>
          {announcements.map((announcement, idx) => {
            const details = announcement.announcementFields;
            return (
              <div
                key={idx}
                className={classnames(
                  "ml-4 sm:pr-12 md:pr-24",
                  styles.announcement
                )}
              >
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
        </Slider>
      </div>
    </div>
  );
};
