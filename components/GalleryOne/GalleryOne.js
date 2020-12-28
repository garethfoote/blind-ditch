import styles from "./GalleryOne.module.css";
import Image from "next/image";
import Container from "../container";

export const GalleryOne = ({ image, width }) => {
  const imgHeight =
    width * (image.mediaDetails.height / image.mediaDetails.width);

  return (
    <Container max="2xl" spacing="2xl">
      <Image
        src={image.sourceUrl}
        width={width}
        height={imgHeight}
        layout="responsive"
      />
    </Container>
  );
};
