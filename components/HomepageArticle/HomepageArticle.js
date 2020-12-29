import Image from "next/image";
import Link from "next/link";

import styles from "./HomepageArticle.module.css";

const proportionalScale = (oWidth, oHeight, newWidth, newHeight) => {
  let ratio = oWidth / oHeight;

  const maximizedToWidth = { width: newWidth, height: newWidth / ratio };
  const maximizedToHeight = { width: newHeight * ratio, height: newHeight };

  if (maximizedToWidth.height < newHeight) {
    return maximizedToHeight;
  } else {
    return maximizedToWidth;
  }
};

export const HomepageArticle = ({ page }) => {
  const image = page.featuredImage?.node;
  const maxWidth = 506;
  const maxHeight = 424;

  let scaled = proportionalScale(
    image.mediaDetails.width,
    image.mediaDetails.height,
    maxWidth,
    maxHeight
  );
  const details = page.pageFields;

  return (
    <>
      <div
        style={{
          position: "relative",
          width: `${maxWidth}px`,
          height: `${maxHeight}px`,
        }}
      >
        <Link as={`/page/${page.slug}`} href="/page/[slug]">
          <a>
            <Image
              alt={image.altText || page.title || image.title}
              src={image.sourceUrl}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <Link as={`/page/${page.slug}`} href="/page/[slug]">
        <a>
          <h2>{page.title}</h2>
        </a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: details?.summary }} />
    </>
  );
};
