import classnames from "classnames";
import Image from "next/image";
import parse from "html-react-parser";
import Container from "../container";
import { ProjectTypes } from "../ProjectTypes";
import styles from "./ProjectPageTitle.module.css";

export const ProjectPageTitle = ({
  title,
  date,
  types,
  description,
  heroImage,
}) => {
  return (
    <div
      className={classnames(
        { "h-1/2-screen": heroImage != null },
        { "mb-xl": heroImage == null },
        "mx-auto px-5 mt-md max-w-2xl"
      )}
    >
      {heroImage && (
        <div
          className={classnames(
            styles.image,
            "absolute opa city-75 z-0 top-0 left-0 h-full w-screen"
          )}
        >
          <Image
            className={classnames(styles.imageTint, "image-loading")}
            src={heroImage.sourceUrl}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="text-center relative z-10">
        <h2 className={classnames("text-2xl sm:text-3xl", styles.title)}>
          {title}
        </h2>
        <h3
          className={classnames(
            "text-md sm:text-lg -mt-2 sm:-mt-4",
            styles.date
          )}
        >
          ({date})
        </h3>
        <h4 className={classnames("mx-auto mt-md mb-xl max-w-xs", styles.type)}>
          <ProjectTypes types={types} />
        </h4>
      </div>
    </div>
  );
};
