import Image from "next/image";
import styles from "./Image.module.css";

export const ImageFill = ({ image, width, height = 0, altText = "" }) => {
  const oHeight = image.mediaDetails.height;
  const oWidth = image.mediaDetails.width;

  if (height === 0) {
    height = width * (oHeight > oWidth ? oHeight / oWidth : oWidth / oHeight);
  }
  console.log(width, height, oWidth / oHeight);

  return (
    <Image
      alt={altText || image.altText}
      src={image.sourceUrl}
      layout="fill"
      objectFit="responsive"
    />
  );
};
