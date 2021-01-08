import { Text } from "../../components/Text";
import { PullQuote } from "../../components/PullQuote";
import { HighlightBox } from "../../components/HighlightBox";
import styles from "./HomeHeader.module.css";

export const HomeHeader = ({ intro }) => {
  return (
    <div className={styles.headerCols}>
      <div className="pb-lg sm:pb-0 sm:pr-md">
        <Text isCentred={false} makeLarge={true} content={intro} />
      </div>
      <div className="">
        <HighlightBox
          html={
            "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
          }
        />
      </div>
    </div>
  );
};
