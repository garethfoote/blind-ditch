import styles from "./GallerySingle.module.css";
import Image from "next/image";
import Container from "../container";

export const GallerySingle = ({ image, width = 672 }) => {
  const imgHeight =
    width * (image.mediaDetails.height / image.mediaDetails.width);

  return (
    <Container max="2xl" spacing="2xl">
      <Image
        className="image-loading"
        src={image.sourceUrl}
        width={width}
        height={imgHeight}
        layout="intrinsic"
        alt={image.altText || image.title}
      />
    </Container>
  );
};
