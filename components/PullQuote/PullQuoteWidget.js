import styles from "./PullQuote.module.css";
import Container from "../../components/container";
import PullQuote from "./PullQuote";

export const PullQuoteWidget = ({ quote, context }) => {
  return (
    <Container max="2xl" spacing="xl">
      <PullQuote quote={quote} />
    </Container>
  );
};
