import classnames from "classnames";
import Image from "next/image";

import { HighlightBox } from "../../components/HighlightBox";
import Container from "../../components/container";

import styles from "./MainImage.module.css";

export const MainImage = ({
  image,
  context,
  contextPos = "br",
  maxWidth = "2xl",
  isFirst,
}) => {
  return (
    <Container max={isFirst ? "4xl" : maxWidth} spacing="xl">
      <div
        className={classnames("image-shadow", {
          "image-shadow-bl": contextPos === "br",
          "image-shadow-tl": contextPos === "tr",
          "image-shadow-tr": contextPos === "tl",
        })}
      >
        <Image
          className="image-loading"
          src={image.sourceUrl}
          width={image.mediaDetails.width}
          height={image.mediaDetails.height}
          layout="responsive"
          alt={image.altText || image.title}
        />
        {context && (
          <div
            className={classnames(
              styles.context,
              styles[`position-${contextPos}`]
            )}
          >
            <HighlightBox html={context} />
          </div>
        )}
      </div>
    </Container>
  );
};
