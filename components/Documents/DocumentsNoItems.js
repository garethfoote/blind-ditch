import React, { useState } from "react";
import styles from "./Documents.module.css";
import classnames from "classnames";

export const DocumentsNoItems = ({ projectTitle }) => {
  const [isVisible] = useState(false);

  return (
    <article>
      <div class="ml-8 sm:ml-16 mr-md">
        <div
          className={classnames(
            styles.cols,
            "justify-end min-h-24 leading-7 border-top relative border-t border-black pt-3"
          )}
        >
          <span className="cursor-pointer select-none pb-4">
            <p className="inline uppercase text-xs">No documents found</p>
          </span>
        </div>
      </div>
    </article>
  );
};
