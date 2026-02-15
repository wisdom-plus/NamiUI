export const applyOpacityValue = (variable: string) => {
  return `rgb(var(${variable}) / <alpha-value>)`;
};
