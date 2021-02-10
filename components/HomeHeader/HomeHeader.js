import Link from "next/link";
import { HighlightBoxBlue } from "../../components/HighlightBox";
import styles from "./HomeHeader.module.css";
import classnames from "classnames";

export const HomeHeader = ({ intro }) => {
  const readMore = '<a class="dash-underline" href="/about">Read more</a>  →';
  return (
    <div className={classnames(styles.headerCols)}>
      <div className="sm:mx-0 pb-md sm:pb-0 sm:pr-lg md:pr-xl">
        <div
          className="text-base leading-7 sm:text-lg sm:leading-9 text-bg-black"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      </div>
      <div className="sm:mx-0">
        <HighlightBoxBlue
          hasShadow={true}
          isQuote={true}
          html={
            "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
          }
        />
      </div>
    </div>
  );
};
