import Image from "next/image";
import Container from "../container";

import styles from "./GalleryTwo.module.css";

export const GalleryTwo = ({ images, width }) => {
  return (
    <Container max="4xl" spacing="2xl">
      <div className="sm:grid grid-cols-2 gap-x-8 md:gap-x-12 items-start">
        <div className="my-lg sm:my-0">
          <Image
            src={images[0].sourceUrl}
            width={images[0].mediaDetails.width}
            height={images[0].mediaDetails.height}
            layout="responsive"
          />
        </div>
        <div className="my-lg sm:my-0">
          <div className={styles.col2Image}>
            <Image
              src={images[1].sourceUrl}
              width={images[1].mediaDetails.width}
              height={images[1].mediaDetails.height}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
