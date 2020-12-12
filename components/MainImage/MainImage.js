import Image from "next/image";
import styles from "./MainImage.module.css";

export const MainImage = (image) => {
  const oImgHeight = image.image?.mediaDetails.height;
  const oImgWidth = image.image?.mediaDetails.width;

  const maxImgWidth = 1050;
  let imgHeight = Math.round(oImgHeight * (maxImgWidth / oImgWidth));

  return (
    <>
      <div>{image.context}</div>
      <Image
        className={styles.mainimage}
        src={image?.image?.sourceUrl}
        width={maxImgWidth}
        height={imgHeight}
      />
    </>
  );
};
