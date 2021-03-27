import { ProjectListItem } from "./ProjectListItem";
import { ScrollingDirContext } from "./ProjectListContext";

import React, { useEffect, useReducer, useState } from "react";
import classnames from "classnames";

const firstMainImage = (content) => {
  return content
    .filter(
      (item) =>
        item.fieldGroupName ===
        "project_Projectfields_FlexibleContent_MainImageBlock"
    )
    .shift();
};

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

export const ProjectList = ({ projects }, idx) => {
  const [state, dispatch] = useReducer(reducer, projects.length, init);
  const [scrollDirection, setScrollDirection] = useState(1);
  let previousYearStart;

  useEffect(() => {
    // console.log(state.count);
    if (state.count === 0) {
      dispatch({ type: "reset", payload: projects.length });
      setScrollDirection(scrollDirection * -1);
    }
  }, [state.count, setScrollDirection, scrollDirection]);

  return (
    <ScrollingDirContext.Provider
      value={{ scrollDirection, setScrollDirection }}
    >
      {projects.map((project, idx) => {
        const details = project.projectFields.details;
        const image = project.featuredImage
          ? project.featuredImage.node
          : firstMainImage(project.projectFields.flexibleContent)?.image;

        const isFirstYear = previousYearStart !== details.yearStart;
        previousYearStart = details.yearStart;
        return (
          <>
            <div
              className={classnames({ "": isFirstYear && idx > 0 })}
              key={idx}
            >
              <ProjectListItem
                title={project.title}
                slug={project.slug}
                image={image}
                showYear={isFirstYear}
                {...details}
                index={idx}
                hasComplete={() => {
                  dispatch({ type: "decrement" });
                }}
              />
            </div>
          </>
        );
      })}
    </ScrollingDirContext.Provider>
  );
};
