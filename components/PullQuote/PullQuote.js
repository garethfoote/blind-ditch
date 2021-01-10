import { HighlightBox } from "../../components/HighlightBox";
import styles from "./PullQuote.module.css";
import classnames from "classnames";

export const PullQuote = ({ quote, context }) => {
  return (
    <div className="text-center">
      <div className={classnames("shadow", styles.pullQuote)}>
        <HighlightBox html={quote} />
      </div>
      {/* <div>{quote.context}</div> */}
    </div>
  );
};
