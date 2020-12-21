import { HighlightBox } from "../../components/HighlightBox";
import Image from "next/image";
import styles from "./MainImage.module.css";
import classnames from "classnames";
import Container from "../../components/container";

export const MainImage = ({
  image,
  context,
  contextPos = "br",
  width = 550,
  height = 0,
}) => {
  const imgHeight =
    width * (image.mediaDetails.height / image.mediaDetails.width);

  return (
    <Container>
      <div className={classnames(styles.mainimage)}>
        {/* <div>{context}</div> */}
        <span>
          <Image
            className="box-block-shadow"
            src={image.sourceUrl}
            width={width}
            height={imgHeight}
            layout="responsive"
          />
        </span>
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
