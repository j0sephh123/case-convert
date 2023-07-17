export const toLowerCase = (str: string) => str.toLowerCase();
export const toUpperCase = (str: string) => str.toUpperCase();
export const toSnakeCase = (str: string): string => {
  return str.split(" ").join("_").toLowerCase();
};
