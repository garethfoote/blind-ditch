import { pullQuoteDataMapper } from "../PullQuote";
import { PullQuoteWidget } from "../PullQuote/PullQuoteWidget";
import { TextWidget } from "../Text/TextWidget";
import { textDataMapper } from "../Text";
import { MainImage, mainImageDataMapper } from "../MainImage";
import { OEmbed, oembedDataMapper } from "../OEmbed";

const widgetMapper = {
  project_Projectfields_FlexibleContent_PullQuoteBlock: {
    dataMapper: pullQuoteDataMapper,
    Component: PullQuoteWidget,
  },
  project_Projectfields_FlexibleContent_TextBlock: {
    dataMapper: textDataMapper,
    Component: TextWidget,
  },
  project_Projectfields_FlexibleContent_MainImageBlock: {
    dataMapper: mainImageDataMapper,
    Component: MainImage,
  },
  project_Projectfields_FlexibleContent_EmbedBlock: {
    dataMapper: oembedDataMapper,
    Component: OEmbed,
  },
  project_Projectfields_FlexibleContent_BodyImageBlock: {
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
        data.isFirst = idx === 0;
        data.previousType = idx > 0 ? widgets[idx - 1].fieldGroupName : "";
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
