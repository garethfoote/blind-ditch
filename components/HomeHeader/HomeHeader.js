import { Text } from "../../components/Text";
import { PullQuote } from "../../components/PullQuote";
import { HighlightBox } from "../../components/HighlightBox";
import styles from "./HomeHeader.module.css";
import classnames from "classnames";

export const HomeHeader = ({ intro }) => {
  return (
    <div className={classnames(styles.headerCols)}>
      <div className="sm:mx-0 pb-lg sm:pb-0 sm:pr-md">
        <div
          className="text-base leading-7 sm:text-md sm:leading-8 text-back-blue"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      </div>
      <div className="sm:mx-0">
        <HighlightBox
          isQuote={true}
          html={
            "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
          }
        />
      </div>
    </div>
  );
};
