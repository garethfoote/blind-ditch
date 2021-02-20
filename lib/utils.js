import { extract } from "oembed-parser";

const oembedOptions = {
  "soundcloud.com": { maxheight: 81 },
  "youtube.com": {},
};

export const getOembed = async (item, url) => {
  const options = oembedOptions[new URL(url).hostname];
  // console.log(item, new URL(url).hostname, options);
  item.oembedDetails = await extract(url, options);
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
