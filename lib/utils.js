import { extract } from "oembed-parser";

const oembedOptions = {
  "soundcloud.com": { maxheight: 81 },
  "vimeo.com": {},
  "youtube.com": {},
  "youtu.be": {},
  "mixcloud.com": {},
};

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const scrollTo = async (ref, dir) => {
  async function animateScroll() {
    ref.scrollLeft = Math.round(ref.scrollLeft + dir);
    if (
      (dir > 0 &&
        Math.ceil(ref.scrollLeft) >= ref.scrollWidth - ref.clientWidth) ||
      (dir < 0 && Math.floor(ref.scrollLeft) === 0)
    )
      return 0;

    await wait(40);
    return await animateScroll();
  }
  return await animateScroll();
};

export const getOembed = async (item, url) => {
  const domain = new URL(url).hostname;
  if (
    Object.keys(oembedOptions).some((v) => domain.toLowerCase().includes(v)) ===
    false
  ) {
    console.log("Cannot find hostname in config:", domain);
    return Promise.resolve(item);
  }
  const options = oembedOptions[new URL(url).hostname];

  try {
    item.oembedDetails = await extract(url, options);
  } catch (err) {
    console.error("Oembed error", err); // TypeError: failed to fetch
  }

  return Promise.resolve(item);
};

export const proportionalScale = (oWidth, oHeight, newWidth, newHeight) => {
  let ratio = oWidth / oHeight;

  const maximizedToWidth = { width: newWidth, height: newWidth / ratio };
  const maximizedToHeight = { width: newHeight * ratio, height: newHeight };

  if (maximizedToWidth.height < newHeight) {
    return maximizedToHeight;
  } else {
    return maximizedToWidth;
  }
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export const firstMainImage = (content) => {
  return content
    .filter(
      (item) =>
        item.fieldGroupName?.includes("_MainImageBlock") ||
        item.fieldGroupName?.includes("_GallerySingleBlock")
    )
    .shift();
};
