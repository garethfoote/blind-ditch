import styles from "./Text.module.css";
import classnames from "classnames";
import Container from "../../components/container";
import { Text } from "./Text";

export const TextWidget = (props) => {
  // If this follows a text block then reduce the spacing.
  const isSubsequentText =
    props.previousType === "project_Projectfields_FlexibleContent_TextBlock";

  return (
    <div class="mx-auto px-5 mb-xl max-w-2xl">
      {/* <Container spacing={isSubsequentText ? "md" : "xl"} max="2xl"> */}
      <Text {...props} />
      {/* </Container> */}
    </div>
  );
};
