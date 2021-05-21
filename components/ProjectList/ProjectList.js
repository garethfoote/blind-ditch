import { ProjectListItem } from "./ProjectListItem";
import { ScrollingDirContext } from "./ProjectListContext";
import { firstMainImage, wait } from "../../lib/utils";

import React, { useEffect, useReducer, useState } from "react";
import classnames from "classnames";

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
    const checkForReset = async () => {
      if (state.count === 0) {
        await wait(1000);
        dispatch({ type: "reset", payload: projects.length });
        setScrollDirection(scrollDirection * -1);
      }
    };
    checkForReset();
  }, [state.count, setScrollDirection, scrollDirection]);

  return (
    <ScrollingDirContext.Provider
      value={{ scrollDirection, setScrollDirection }}
    >
      {projects.map((project, idx) => {
        if (!project) return <div>Project deleted</div>;
        const details = project.projectFields.details;
        const image = project.featuredImage
          ? project.featuredImage.node
          : firstMainImage(project.projectFields.flexibleContent)?.image;

        const isFirstYear = previousYearStart !== details.yearStart;
        previousYearStart = details.yearStart;
        return (
          <div className={classnames({ "": isFirstYear && idx > 0 })} key={idx}>
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
        );
      })}
    </ScrollingDirContext.Provider>
  );
};
