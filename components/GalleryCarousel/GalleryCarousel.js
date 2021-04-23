import React, { useEffect, useState } from "react";
import Image from "next/image";

let container = React.createRef();

export const GalleryCarousel = ({ images, height = 416 }) => {
  const [dimensions, setDimensions] = useState({
    height: undefined,
    width: undefined,
  });

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    pos = {
      // The current scroll
      left: container.current.scrollLeft,
      top: container.current.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    console.log(container);
    // Scroll the element
    container.current.scrollTop = pos.top - dy;
    container.current.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    container.current.style.cursor = "grab";
    container.current.style.removeProperty("user-select");
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  return (
    <>
      <div
        className="flex w-full overflow-auto border-black border-dashed"
        ref={container}
        onMouseDown={mouseDownHandler}
      >
        {images.map((image, idx) => {
          const w =
            height * (image.mediaDetails.width / image.mediaDetails.height);
          const randomAlpha = Math.random();
          return (
            <div key={idx} className="outline-none">
              <div
                className="box-content border-t-2 border-b-2 border-r-2 border-black border-dashed"
                style={{
                  maxWidth: "100vw",
                  height: "416px",
                  padding: `${0}px`,
                }}
              >
                <div
                  style={{
                    // maxWidth: "90vw",
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
      </div>
    </>
  );
};
