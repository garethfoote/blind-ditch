import { HighlightBox } from "../../components/HighlightBox";
import styles from "./PullQuote.module.css";
import Container from "../../components/container";

export const PullQuote = ({ quote, context }) => {
  return (
    <Container max="2xl" spacing="xl">
      <div className="text-center">
        <div className={styles.pullQuote}>
          <HighlightBox html={quote} />
        </div>
        {/* <div>{quote.context}</div> */}
      </div>
    </Container>
  );
};
