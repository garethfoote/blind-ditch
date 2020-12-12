import styles from "./OEmbed.module.css";

export const OEmbed = (embed) => {
  return (
    <>
      <div
        className={styles["embed-container"]}
        dangerouslySetInnerHTML={{ __html: embed.oembedDetails?.html }}
      />
    </>
  );
};
