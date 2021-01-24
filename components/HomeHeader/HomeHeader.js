import Link from "next/link";
import { HighlightBox } from "../../components/HighlightBox";
import styles from "./HomeHeader.module.css";
import classnames from "classnames";

export const HomeHeader = ({ intro }) => {
  const readMore = '<a class="dash-underline" href="/about">Read more</a>  →';
  return (
    <div className={classnames(styles.headerCols)}>
      <div className="sm:mx-0 pb-lg sm:pb-0 sm:pr-xl">
        <div className="text-base leading-7 sm:text-lg sm:leading-9 text-bg-black">
          <div className="mb-sm" dangerouslySetInnerHTML={{ __html: intro }} />
          <Link href="/page/about">
            <a className="dash-underline">Read More</a>
          </Link>{" "}
          →
        </div>
      </div>
      <div className="sm:mx-0">
        <HighlightBox
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
