import Container from "../../components/container";
import classnames from "classnames";

import styles from "./OEmbed.module.css";

export const OEmbed = ({ oembedDetails }) => {
  return (
    <Container max="4xl" spacing="xl">
      <div
        className={classnames(styles.iframeCentre, {
          [styles.iframeFill]: ["youtube", "vimeo"].some((v) =>
            oembedDetails?.provider_name.toLowerCase().includes(v)
          ),
        })}
        dangerouslySetInnerHTML={{ __html: oembedDetails?.html }}
      />
    </Container>
  );
};
