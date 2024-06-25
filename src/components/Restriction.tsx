"use client";
import React from "react";
import { RestrictionType } from "@/types/types";
import InputEquation from "./inputs/InputEquation";
import InputResult from "./inputs/InputResult";

interface RestrictionProps {
  restriction: RestrictionType;
  setRestriction: (restriction: RestrictionType) => void;
}

function Restriction({ restriction, setRestriction }: RestrictionProps) {
  return (
    <div className="flex flex-row w-full">
      <InputEquation
        coefficients={restriction.coefficients}
        setCoefficients={(coefficients: number[]) => {
          setRestriction({ ...restriction, coefficients });
        }}
      />
      <select
        value={restriction.operator}
        onChange={(e) =>
          setRestriction({
            ...restriction,
            operator: e.target.value as "<=" | ">=" | "=",
          })
        }
        className="bg-gray-200 text-black font-bold w-20 py-2 px-4 rounded ml-5"
      >
        <option value="<=">{"<="}</option>
        <option value=">=">{">="}</option>
        <option value="=">{"="}</option>
      </select>
      <div className="flex flex-row w-1/4">
        <InputResult
          result={restriction.result}
          setResult={(result: number) => {
            setRestriction({ ...restriction, result });
          }}
        />
      </div>
    </div>
  );
}

export default Restriction;
