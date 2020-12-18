import Image from "next/image";
import styles from "./HomepageArticle.module.css";

const proportionalScale = (oWidth, oHeight, newWidth, newHeight) => {
  var ratio = oWidth / oHeight;

  var maximizedToWidth = { width: newWidth, height: newWidth / ratio };
  var maximizedToHeight = { width: newHeight * ratio, height: newHeight };

  if (maximizedToWidth.height < newHeight) {
    return maximizedToHeight;
  } else {
    return maximizedToWidth;
  }
};

export const HomepageArticle = ({ page: { node } }) => {
  const image = node.featuredImage?.node;

  const maxWidth = 506;
  const maxHeight = 424;

  let scaled = proportionalScale(
    image.mediaDetails.width,
    image.mediaDetails.height,
    maxWidth,
    maxHeight
  );
  const details = node.pageFields;

  return (
    <>
      <div
        style={{
          position: "relative",
          width: `${maxWidth}px`,
          height: `${maxHeight}px`,
        }}
      >
        <Image
          alt={image.altText || node.title || image.title}
          src={image.sourceUrl}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2>{node.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: details?.summary }} />
    </>
  );
};
