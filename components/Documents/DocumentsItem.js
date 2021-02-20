import Link from "next/link";
import Image from "next/image";
import styles from "./Documents.module.css";
import oembedStyles from "../OEmbed/OEmbed.module.css";

import classnames from "classnames";

export const DocumentsItem = ({
  title,
  documentsFields: { date, type, project, oembedDetails, file_download, image },
}) => {
  return (
    <article>
      <div
        className={classnames(
          styles.cols,
          "justify-end min-h-36 border-top relative border-t border-black pt-3"
        )}
      >
        <p className="text-base sm:text-md">{title}</p>
        <div className="flex justify-end">
          <dl className="uppercase font-accent text-xs leading-6 tracking-wide">
            <dt className="text-blue">Date</dt>
            <dd>{date}</dd>
          </dl>
        </div>

        <div className="flex justify-end">
          <dl className="uppercase font-accent text-xs leading-6 tracking-wide">
            <dt className="text-blue">Project</dt>
            <dd className="inline bg-yellow">
              <Link as={`/projects/${project.slug}`} href="/projects/[slug]">
                <a>{project.title}</a>
              </Link>
            </dd>
          </dl>
        </div>

        <div className="absolute text-2xs uppercase -left-6 sm:-left-4 top-3 transform -translate-x-full">
          <div className="absolute sm:relative transform -rotate-90 origin-top-right -translate-x-full inline">
            {type}
          </div>
        </div>
      </div>
      <div className="w-full pb-lg">
        {["video", "sound"].indexOf(type.toLowerCase()) >= 0 && (
          <div
            className={classnames({
              [oembedStyles.ytEmbedContainer]:
                oembedDetails.provider_name == "YouTube",
              [oembedStyles.soundcloud]:
                oembedDetails.provider_name == "SoundCloud",
            })}
            dangerouslySetInnerHTML={{ __html: oembedDetails.html }}
          />
        )}
      </div>
    </article>
  );
};
