import React, { useEffect, useState } from "react";
import styles from "./GalleryCarousel.module.css";
import Image from "next/image";
import Slider from "react-slick";

export const GalleryCarousel = ({ images, height }) => {
  const [dimensions, setDimensions] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
  });
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="">
      <div className="flex flex-row">
        {images.map((image) => {
          return (
            <Image
              className="image-loading"
              src={image.sourceUrl}
              width={
                height * (image.mediaDetails.width / image.mediaDetails.height)
              }
              height={height}
              layout="responsive"
            />
          );
        })}
      </div>
    </div>
  );
};
