import React, { useEffect, useState } from "react";
import styles from "./GalleryCarousel.module.css";
import Image from "next/image";
import Slider from "react-slick";

const settings = {
  className:
    "slider variable-width h-104 box-content border-t-2 border-b-2 border-black border-dashed",
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

export const GalleryCarousel = ({ images, height = 416 }) => {
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

  return (
    <Slider {...settings}>
      {images.map((image, idx) => {
        const w =
          height * (image.mediaDetails.width / image.mediaDetails.height);
        // console.log(
        //   height,
        //   height * (image.mediaDetails.width / image.mediaDetails.height)
        // );
        const randomAlpha = Math.random();
        return (
          <div key={idx} className="outline-none">
            <div
              className="border-r-2 border-black border-dashed"
              style={{ height: "416px", padding: `${0}px` }}
            >
              <div
                style={{
                  height: `${height}px`,
                  width: `${w}px`,
                  backgroundColor: `rgba(255,0,0,${randomAlpha})`,
                }}
              >
                <Image
                  draggable={false}
                  className="image-loading"
                  src={image.sourceUrl}
                  width={
                    height *
                    (image.mediaDetails.width / image.mediaDetails.height)
                  }
                  height={height}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
