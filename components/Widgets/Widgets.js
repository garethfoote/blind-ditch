import { PullQuote, pullQuoteDataMapper } from "../PullQuote";
import { Text, textDataMapper } from "../Text";
import { MainImage, mainImageDataMapper } from "../MainImage";

const widgetMapper = {
  project_Projectfields_FlexibleContent_PullQuoteBlock: {
    dataMapper: pullQuoteDataMapper,
    Component: PullQuote,
  },
  project_Projectfields_FlexibleContent_TextBlock: {
    dataMapper: textDataMapper,
    Component: Text,
  },
  project_Projectfields_FlexibleContent_MainImageBlock: {
    dataMapper: mainImageDataMapper,
    Component: MainImage,
  },
};

export const Widgets = ({ widgets }) => (
  <>
    {widgets.map((widget, idx) => {
      // See if we have a widget for this "typename" (widget ID)
      const widgetElements = widgetMapper[widget.fieldGroupName];

      // If we do, grab it's component and manipulate the data so
      // it's in the right shape for the component props
      if (widgetElements) {
        const { Component, dataMapper } = widgetElements;
        const data = dataMapper(widget);
        return <Component {...data} key={widget.fieldGroupName + idx} />;
      }

      return (
        <div key={idx}>
          <p>Could not find {widget.fieldGroupName + idx}</p>
        </div>
      );
    })}
  </>
);
