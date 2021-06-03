import Image from "next/image";
import Link from "next/link";
import { Text } from "../Text";
import { Button } from "../Button";
import { proportionalScale } from "../../lib/utils";

import styles from "./HomepageArticle.module.css";

export const HomepageArticle = ({ page }) => {
  const image = page.featuredImage?.node;
  const maxWidth = 506;
  const maxHeight = 424;

  let scaled = proportionalScale(
    image?.mediaDetails.width,
    image?.mediaDetails.height,
    maxWidth,
    maxHeight
  );
  const details = page.pageFields;

  return (
    <div className="mx-auto px-8 my-md max-w-lg md:max-w-xl">
      <div className="w-full h-80 sm:h-100 md:h-112 image-shadow image-shadow-bl">
        {image && (
          <Image
            className="image-loading"
            alt={image.altText || page.title || image.title}
            src={image.sourceUrl}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="bg-offwhite p-4 w-5/6 sm:max-w-none sm:w-100 bg-offwhite relative z-30 -top-4 left-4 sm:left-1/10">
        <Link as={`/page/${page.slug}`} href="/page/[slug]">
          <a>
            <h2 className="title-underline inline text-lg sm:text-xl md:text-2xl leading-normal tracking-wider uppercase ">
              {page.title}
            </h2>
          </a>
        </Link>
      </div>
      <div className="max-w-xs sm:max-w-none sm:w-100 bg-offwhite relative -top-4 left-4 sm:left-1/10 p-4 pt-0">
        <Text content={details.summary} />
        <div className="mt-lg">
          <Button as={`/page/${page.slug}`} href="/page/[slug]">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};
