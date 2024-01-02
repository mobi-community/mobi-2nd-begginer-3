export const makeObjKeysToArr = (data) => {
  const keys = Object.keys(data);
  const info = keys
    .map((key) => {
      return `${key} : ${data[key]}`;
    })
    .join("\n");
  return info;
};
