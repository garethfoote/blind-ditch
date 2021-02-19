import classnames from "classnames";
import { DocumentsItem } from "./DocumentsItem";

export const Documents = ({ documents }) => {
  return (
    <div className="max-w-3xl mx-auto pt-xl">
      <div className="ml-8 sm:ml-16 mr-md">
        <DocumentsItem />
      </div>
      <div className="ml-8 sm:ml-16 mr-md">
        <DocumentsItem />
      </div>
    </div>
  );
};
