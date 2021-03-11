import React, { useState } from "react";
import Link from "next/link";
import { formatBytes } from "../../lib/utils";

import styles from "./Documents.module.css";
import oembedStyles from "../OEmbed/OEmbed.module.css";
import classnames from "classnames";

export const DocumentsItem = ({
  title,
  documentsFields: { date, type, project, oembedDetails, fileDownload, image },
}) => {
  const [isVisible, setVisibility] = useState(false);
  const handleClick = () => setVisibility(!isVisible);

  return (
    <article>
      <div
        className={classnames(
          styles.cols,
          "justify-end min-h-24 leading-7 border-top relative border-t border-black pt-3"
        )}
      >
        <a onClick={handleClick} className="cursor-pointer select-none pb-4">
          <span className="text-xs align-top leading-6 w-6 h-6 text-center border border-black rounded-full inline-block">
            <span
              className={classnames("relative -top-px", { hidden: isVisible })}
            >
              ↓
            </span>{" "}
            <span
              className={classnames("relative -top-px", { hidden: !isVisible })}
            >
              ↑
            </span>{" "}
          </span>
          <p className="inline text-base sm:text-md"> {title}</p>
        </a>
        <div className="flex justify-end">
          <dl className="uppercase font-accent text-xs leading-6 tracking-wide">
            <dt className="text-blue">Date</dt>
            <dd>{date}</dd>
          </dl>
        </div>

        <div className="flex justify-end">
          <dl className="uppercase text-right font-accent text-xs leading-6 tracking-wide pb-4">
            <dt className="text-blue">Project</dt>
            <dd className="inline bg-yellow">
              <Link as={`/projects/${project.slug}`} href="/projects/[slug]">
                <a>{project.title}</a>
              </Link>
            </dd>
          </dl>
        </div>

        <div className="absolute text-2xs uppercase -left-8 sm:-left-4 top-3 transform -translate-x-full">
          <div className="absolute sm:relative transform -rotate-90 origin-top-right -translate-x-full inline">
            {type}
          </div>
        </div>
      </div>
      <div className="w-full">
        {isVisible == true && (
          <div className="w-full pb-lg">
            {["video", "sound"].indexOf(type.toLowerCase()) >= 0 &&
              !oembedDetails && <div>Sorry, this document is missing.</div>}
            {["video", "sound"].indexOf(type.toLowerCase()) >= 0 && (
              <div
                className={classnames({
                  [oembedStyles.ytEmbedContainer]:
                    oembedDetails?.provider_name == "YouTube",
                  [oembedStyles.soundcloud]:
                    oembedDetails?.provider_name == "SoundCloud",
                })}
                dangerouslySetInnerHTML={{ __html: oembedDetails?.html }}
              />
            )}

            {["writing"].indexOf(type.toLowerCase()) >= 0 && (
              <div className="">
                <a
                  download
                  target="_blank"
                  className="flex"
                  href={fileDownload.mediaItemUrl}
                >
                  <div className="w-auto mr-4 h-12">
                    <svg
                      className="h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 70 96"
                    >
                      <path fill="#FF9" d="M0 0h60l10 11v85H0V0z" />
                      <path
                        fill="#4F4F4F"
                        d="M15.295 53.05a1.295 1.295 0 011.295 1.295v6.475a2.59 2.59 0 002.59 2.59h31.079a2.59 2.59 0 002.59-2.59v-6.475a1.295 1.295 0 012.59 0v6.475a5.18 5.18 0 01-5.18 5.18h-31.08A5.18 5.18 0 0114 60.82v-6.475a1.295 1.295 0 011.295-1.295z"
                      />
                      <path
                        fill="#4F4F4F"
                        d="M33.806 58.111a1.294 1.294 0 001.834 0l7.77-7.77a1.297 1.297 0 00-1.834-1.833l-5.558 5.56V31.295a1.295 1.295 0 10-2.59 0v22.773l-5.558-5.56a1.297 1.297 0 00-1.834 1.833l7.77 7.77zM60 11V0l10 11H60z"
                      />
                    </svg>
                  </div>
                  <div className={classnames("self-end")}>
                    {fileDownload.mediaItemUrl.replace(/^.*[\\\/]/, "")} (
                    {formatBytes(fileDownload.fileSize)})
                  </div>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
