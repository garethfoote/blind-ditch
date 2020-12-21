import { HighlightBox } from "../../components/HighlightBox";
import styles from "./PullQuote.module.css";

export const PullQuote = ({ quote, context }) => {
  return (
    <div className="max-w-2xl my-xl mx-auto text-center">
      <div className={styles.pullQuote}>
        <HighlightBox html={quote} />
      </div>
      {/* <div>{quote.context}</div> */}
    </div>
  );
};
