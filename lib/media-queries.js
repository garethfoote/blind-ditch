import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    base: 0,
    desktop: 1000,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
