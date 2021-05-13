import React, { useState } from "react";
import styles from "./Documents.module.css";
import classnames from "classnames";

export const DocumentsNoItems = ({ projectTitle }) => {
  const [isVisible] = useState(false);

  return (
    <article>
      <div className="ml-8 sm:ml-16 mr-md">
        <div
          className={classnames(
            styles.cols,
            "justify-end min-h-24 leading-7 border-top relative border-t border-black pt-3"
          )}
        >
          <span className="cursor-none select-none pb-4">
            <p className="inline uppercase text-xs">
              No documents found. <br />
              <button
                className="inline underline text-xs"
                onClick={() => router.replace("/documents")}
              >
                Remove the filter to see all documents.
              </button>
            </p>
          </span>
        </div>
      </div>
    </article>
  );
};
