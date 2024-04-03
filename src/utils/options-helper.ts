export const mapEnumToArray = (enumObject: any) => {
  return Object.keys(enumObject).map((key) => ({
    label: enumObject[key],
    value: key,
  }));
};
