import Container from "../../components/container";

import styles from "./OEmbed.module.css";

export const OEmbed = (embed) => {
  return (
    <Container max="4xl" spacing="xl">
      <div
        className={styles["embed-container"]}
        dangerouslySetInnerHTML={{ __html: embed.oembedDetails?.html }}
      />
    </Container>
  );
};
