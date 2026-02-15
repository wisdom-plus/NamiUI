import { ColorsVariableMap } from "../types/variables.types";
import { applyOpacityValue } from "./applyOpacityValue";

export const extractNewVariables = <T extends object, U extends object>(
  obj1: T,
  obj2: U
): Record<string, string> => {
  const keys1 = Object.keys(obj1);

  return Object.keys(obj2)
    .filter((key) => !keys1.includes(key))
    .reduce((acc, key) => {
      acc[key as keyof ColorsVariableMap] = applyOpacityValue(`--${key}`);
      return acc;
    }, {} as Record<string, string>);
};
