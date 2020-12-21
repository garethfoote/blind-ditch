export const textDataMapper = (data) => {
  data.content = data.text;
  return data;
};

export * from "./Text";
