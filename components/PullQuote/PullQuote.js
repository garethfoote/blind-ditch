import { HighlightBoxBlue } from "../../components/HighlightBox";
import styles from "./PullQuote.module.css";
import classnames from "classnames";

export const PullQuote = (data) => {
  return (
    <div className="max-w-sm mx-auto px-5 mb-xl">
      <HighlightBoxBlue html={data.quote} context={data.context} />
    </div>
  );
};
