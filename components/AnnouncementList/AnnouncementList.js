import { AnnouncementListItem } from "./AnnouncementListItem";
import React, { useEffect, useState } from "react";
import styles from "./AnnouncementList.module.css";
import classnames from "classnames";
import Slider from "react-slick";

export const AnnouncementList = ({ announcements }) => {
  const [slide, setSlide] = useState(0);
  let sliderRef = React.createRef();

  const settings = {
    className: "slider home-slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (i) => {
      setSlide(i);
    },
  };

  return (
    <div className="relative bg-white">
      <div className="h-80 sm:h-64 pt-6 relative">
        <button
          disabled={slide == 0}
          className="absolute -bottom-2 sm:bottom-0 left-2 z-50 text-2xl sm:text-lg disabled:opacity-10"
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        >
          ←
        </button>
        <button
          disabled={slide >= announcements.length + 1}
          className="absolute -bottom-2 sm:bottom-0 right-2 z-50 text-2xl sm:text-lg disabled:opacity-10"
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        >
          →
        </button>

        <Slider ref={sliderRef} {...settings}>
          <div key={0} className="ml-4 pr-24 relative">
            <h2 className="absolute transform -rotate-90 origin-top-right	-translate-x-full inline text-md sm:text-base uppercase title-underline">
              Announcements
            </h2>
          </div>
          {announcements.map((announcement, idx) => {
            const details = announcement.announcementFields;
            return (
              <div
                key={idx}
                className={classnames(
                  "ml-4 sm:pr-12 md:pr-24 transition-opacity hover:opacity-100",
                  styles.announcement,
                  {
                    ["opacity-100"]: idx + 1 == slide,
                    ["opacity-80"]: idx + 1 != slide,
                  }
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
          <div className="ml-4">
            <article className="flex">
              <div className="relative w-36 sm:w-40 h-60 sm:h-48 bg-offwhite bg-tictactoe bg-10"></div>
              <div className="w-44 sm:w-64 h-60 sm:h-48 p-4 bg-offwhite">
                <div className="font-accent flex border-b border-black pb-2">
                  <h2 className="flex-grow text-xs uppercase leading-4 sm:leading-6"></h2>
                </div>
                <p className="text-sm sm:text-base mt-4">
                  See all announcements
                </p>
              </div>
            </article>
          </div>
        </Slider>
      </div>
    </div>
  );
};
