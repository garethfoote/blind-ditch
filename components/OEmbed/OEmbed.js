import Container from "../../components/container";
import classnames from "classnames";

import styles from "./OEmbed.module.css";

export const OEmbed = ({ oembedDetails }) => {
  return (
    <Container max="4xl" spacing="xl">
      <div
        className={classnames({
          [styles.ytEmbedContainer]: oembedDetails?.provider_name == "YouTube",
        })}
        dangerouslySetInnerHTML={{ __html: oembedDetails?.html }}
      />
    </Container>
  );
};
