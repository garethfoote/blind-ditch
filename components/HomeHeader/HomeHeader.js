import React, { useEffect, useState } from "react";
import styles from "./HomeHeader.module.css";
import classnames from "classnames";
import { wait } from "../../lib/utils";

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
      <div className="sm:mx-0 sm:pr-lg md:pr-xl">
        <div
          className="pt-md pb-lg sm:pb-md px-sm text-sm text-justify leading-6 sm:text-lg sm:leading-9 sm:text-left text-bg-black"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      </div>
      <div className="sm:mx-0">
        <HighlightBoxBlue
          hasShadow={true}
          isQuote={true}
          html={testimonials[selectedImage].testimonial}
          context={testimonials[selectedImage].context}
        />
      </div>
    </div>
  );
};
