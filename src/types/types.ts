export type ObjectiveFunctionType = {
  coefficients: number[];
  operator: "max" | "min";
};

export type RestrictionType = {
  id: number;
  coefficients: number[];
  operator: "<=" | ">=" | "=";
  result: number;
};
