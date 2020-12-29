import styles from "./Text.module.css";
import classnames from "classnames";
import Container from "../../components/container";

export const Text = ({
  content,
  isCentred = false,
  makeLarge = false,
  previousType = "",
}) => {
  // If this follows a text block then reduce the spacing.
  const isSubsequentText =
    previousType === "project_Projectfields_FlexibleContent_TextBlock";

  return (
    <Container spacing={isSubsequentText ? "md" : "xl"} max="2xl">
      <div
        className={classnames(styles.text, {
          "text-center": isCentred,
          [styles.large]: makeLarge,
        })}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};
