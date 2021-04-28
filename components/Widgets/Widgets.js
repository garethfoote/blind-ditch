import { pullQuoteDataMapper } from "../PullQuote";
import { PullQuote } from "../PullQuote/PullQuote";
import { TextWidget } from "../Text/TextWidget";
import { textDataMapper } from "../Text";
import { MainImage, mainImageDataMapper } from "../MainImage";
import { GalleryCarousel, galleryCarouselDataMapper } from "../GalleryCarousel";
import { GallerySingle, gallerySingleDataMapper } from "../GallerySingle";
import { GalleryTwo, galleryTwoDataMapper } from "../GalleryTwo";
import { SectionTitleWidget } from "../SectionTitle/SectionTitleWidget";
import { sectionTitleDataMapper } from "../SectionTitle";
import { OEmbed, oembedDataMapper } from "../OEmbed";

const widgetMapper = {
  Project_Projectfields_FlexibleContent_PullQuoteBlock: {
    dataMapper: pullQuoteDataMapper,
    Component: PullQuote,
  },
  Project_Projectfields_FlexibleContent_TextBlock: {
    dataMapper: textDataMapper,
    Component: TextWidget,
  },
  Project_Projectfields_FlexibleContent_MainImageBlock: {
    dataMapper: mainImageDataMapper,
    Component: MainImage,
  },
  Project_Projectfields_FlexibleContent_EmbedBlock: {
    dataMapper: oembedDataMapper,
    Component: OEmbed,
  },
  Project_Projectfields_FlexibleContent_BodyImageBlock: {
    dataMapper: mainImageDataMapper,
    Component: MainImage,
  },
  Project_Projectfields_FlexibleContent_SectionTitleBlock: {
    dataMapper: sectionTitleDataMapper,
    Component: SectionTitleWidget,
  },
  Project_Projectfields_FlexibleContent_GallerySingleBlock: {
    dataMapper: gallerySingleDataMapper,
    Component: GallerySingle,
  },
  Project_Projectfields_FlexibleContent_GalleryTwoBlock: {
    dataMapper: galleryTwoDataMapper,
    Component: GalleryTwo,
  },
  Project_Projectfields_FlexibleContent_Gallery: {
    dataMapper: galleryCarouselDataMapper,
    Component: GalleryCarousel,
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
          <p>Could not find {widget.fieldGroupName}</p>
        </div>
      );
    })}
  </>
);
