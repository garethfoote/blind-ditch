import classnames from "classnames";
import { DocumentsItem } from "./DocumentsItem";

export const Documents = ({ documents }) => {
  return (
    <div className=" mx-auto pt-xl">
      {documents.map((doc, idx) => (
        <div key={idx} className="ml-8 sm:ml-16 mr-md">
          <DocumentsItem {...doc} />
        </div>
      ))}
    </div>
  );
};
