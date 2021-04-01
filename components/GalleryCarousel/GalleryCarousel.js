import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

let sliderRef = React.createRef();

const settings = {
  className:
    "slider gallery-slider variable-width h-104 box-content border-t-2 border-b-2 border-black border-dashed",
  dots: true,
  infinite: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  // beforeChange: (o, n) => {
  //   console.log("beforeChange", o, n);
  // },
};

export const GalleryCarousel = ({ images, height = 416 }) => {
  const [dimensions, setDimensions] = useState({
    height: undefined,
    width: undefined,
  });

  const [slide, setSlide] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   };

  //   window.addEventListener("resize", handleResize);
  // });

  return (
    <div>
      {/* <button
        onClick={() => {
          const last = slide > 1 ? slide - 1 : slide;
          setSlide(last);
          sliderRef.current.slickPrev();
        }}
      >
        Last
      </button>
      <button
        onClick={() => {
          const next = slide < images.length - 2 ? slide + 1 : slide;
          setSlide(next);
          sliderRef.current.slickNext();
        }}
      >
        Next
      </button> */}

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, idx) => {
          const w =
            height * (image.mediaDetails.width / image.mediaDetails.height);
          const randomAlpha = Math.random();
          return (
            <div key={idx} className="outline-none">
              <div
                className="border-r-2 border-black border-dashed"
                style={{
                  // maxWidth: "100vw",
                  height: "416px",
                  padding: `${0}px`,
                }}
              >
                <div
                  style={{
                    maxWidth: "90vw",
                    height: `${height}px`,
                    width: `${w}px`,
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
    </div>
  );
};
