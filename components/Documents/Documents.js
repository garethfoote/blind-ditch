import classnames from "classnames";
import { DocumentsItem } from "./DocumentsItem";

export const Documents = ({ documents }) => {
  return (
    <div className="max-w-4xl mx-auto pt-xl">
      <div className="ml-2xl mr-md">
        <DocumentsItem />
      </div>
      <div className="ml-2xl mr-md">
        <DocumentsItem />
      </div>
    </div>
  );
};
