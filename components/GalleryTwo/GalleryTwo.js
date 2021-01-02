import Image from "next/image";
import Container from "../container";

import styles from "./GalleryTwo.module.css";

export const GalleryTwo = ({ images, width }) => {
  return (
    <Container max="4xl" spacing="2xl">
      <div className="sm:grid grid-cols-2 gap-x-8 md:gap-x-12 items-start">
        <div className="my-lg sm:my-0">
          <Image
            className="image-loading"
            src={images[0].sourceUrl}
            width={images[0].mediaDetails.width}
            height={images[0].mediaDetails.height}
            alt={images[0].altText || images[0].title}
            layout="responsive"
          />
        </div>
        <div className="my-lg sm:my-0">
          <div className={styles.col2Image}>
            <Image
              className="image-loading"
              src={images[1].sourceUrl}
              width={images[1].mediaDetails.width}
              height={images[1].mediaDetails.height}
              alt={images[1].altText || images[1].title}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
