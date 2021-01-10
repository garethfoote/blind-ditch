import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import { Text } from "../Text";
import { Button } from "../Button";
import { proportionalScale } from "../../lib/utils";

import styles from "./HomepageArticle.module.css";

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
    <div className="mx-auto px-5 my-md max-w-lg md:max-w-xl">
      <div className="h-96">
        <div className="relative w-full h-full image-shadow image-shadow-bl px-5">
          <Image
            className="image-loading"
            alt={image.altText || page.title || image.title}
            src={image.sourceUrl}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="max-w-xs sm:max-w-none sm:w-100 bg-offwhite relative z-30 -top-4 left-4 sm:left-1/10">
        <Link as={`/page/${page.slug}`} href="/page/[slug]">
          <a>
            <h2 className="text-xl sm:text-2xl leading-tight tracking-wider uppercase underline bg-offwhite p-4 box-content ">
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
