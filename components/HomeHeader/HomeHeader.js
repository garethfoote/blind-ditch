import React, { useEffect, useState } from "react";
import styles from "./HomeHeader.module.css";
import classnames from "classnames";
import Link from "next/link";

import { HighlightBoxBlue } from "../../components/HighlightBox";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

export const HomeHeader = ({ intro, testimonials }) => {
  const [selectedImage, setImage] = useState(1);

  useEffect(() => {
    setImage(Math.floor(Math.random() * testimonials.length));
  }, []);

  return (
    <div className={classnames(styles.headerCols)}>
      <div className="sm:mx-0 pb-md sm:pb-0 sm:pr-lg md:pr-xl">
        <h2
          className={classnames(
            styles.paragraphPhrasing,
            "pt-md pb-sm sm:pb-md text-sm text-justify leading-6 sm:text-md sm:text-left sm:leading-9"
          )}
          dangerouslySetInnerHTML={{ __html: intro }}
        />
        <Link href="/page/about">
          <a className="title-underline-hover text-sm sm:text-md">More →</a>
        </Link>
      </div>
      <div className="sm:mx-0 sm:pt-md">
        <HighlightBoxBlue
          hasShadow={true}
          isQuote={true}
          html={testimonials[selectedImage].testimonial}
          context={testimonials[selectedImage].context}
        />
        <div
          className={classnames(
            "transform -translate-x-5 origin-top-left -rotate-90 font-accent text-blue uppercase text-xs"
          )}
        >
          Things people say...
        </div>
      </div>
    </div>
  );
};
