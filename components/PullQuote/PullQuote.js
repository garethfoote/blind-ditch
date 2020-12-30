import { HighlightBox } from "../../components/HighlightBox";
import styles from "./PullQuote.module.css";

export const PullQuote = ({ quote, context }) => {
  return (
    <div className="text-center">
      <div className={styles.pullQuote}>
        <HighlightBox html={quote} />
      </div>
      {/* <div>{quote.context}</div> */}
    </div>
  );
};
