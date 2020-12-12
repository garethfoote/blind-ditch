import Link from "next/link";

export const ProjectTypes = ({ types }, idx) => {
  return (
    <>
      {types && (
        <p>
          A{" "}
          {types
            .map(({ name }, idx) => <span key={idx}>{name}</span>)
            .reduce((acc, item, idx, all) => {
              return acc === null ? (
                span
              ) : idx < all.length - 1 ? (
                <>
                  {acc}, {item}
                </>
              ) : (
                <>
                  {" "}
                  {acc} and {item}
                </>
              );
            })}{" "}
          project.
        </p>
      )}
    </>
  );
};
