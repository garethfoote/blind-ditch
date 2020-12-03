import Image from "next/image";

export const MainImage = (image) => {
  const oImgHeight = image.image?.mediaDetails.height;
  const oImgWidth = image.image?.mediaDetails.width;

  const maxImgWidth = 1050;
  let imgHeight = Math.round(oImgHeight * (maxImgWidth / oImgWidth));

  return (
    <>
      <div>{image.text}</div>
      <Image
        src={image?.image?.sourceUrl}
        width={maxImgWidth}
        height={imgHeight}
      />
    </>
  );
};
