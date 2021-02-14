import { extract } from "oembed-parser";

const oembedOptions = {
  "soundcloud.com": { maxheight: 81 },
  "youtube.com": {},
};

const getOembed = async (item) => {
  const fieldName = "project_Projectfields_FlexibleContent_EmbedBlock";

  if (item.fieldGroupName === fieldName) {
    const options = oembedOptions[new URL(item.oembed).hostname];
    item.oembedDetails = await extract(item.oembed, options);
    return Promise.resolve(item);
  } else {
    return Promise.resolve(item);
  }
};

export const getOEmbeds = async (flexContent) => {
  return Promise.all(flexContent.map((item) => getOembed(item)));
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
