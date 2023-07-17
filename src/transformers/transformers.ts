export const toLowerCase = (str: string) => str.toLowerCase();
export const toUpperCase = (str: string) => str.toUpperCase();
export const toSnakeCase = (str: string): string => {
  return str.split(" ").join("_").toLowerCase();
};
export const toCamelCase = (str: string): string => {
  return str
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
};
export const toPascalCase = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};
