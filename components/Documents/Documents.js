import { DocumentsItem } from "./DocumentsItem";
import { useRouter } from "next/router";

export const Documents = ({ documents, filteredBy }) => {
  const router = useRouter();

  return (
    <div className=" mx-auto pt-xl">
      {documents.map((doc, idx) => (
        <div key={idx} className="ml-8 sm:ml-16 mr-md">
          {filteredBy && (
            <p className="mb-sm">
              Filtered by: {filteredBy}{" "}
              <button
                onClick={() => router.replace("/documents")}
                className="font-accent w-5 h-5 bg-black text-white inline-block leading-5 text-center"
              >
                x
              </button>
            </p>
          )}
          <DocumentsItem {...doc} />
        </div>
      ))}
    </div>
  );
};
