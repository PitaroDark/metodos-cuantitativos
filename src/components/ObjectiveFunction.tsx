"use client";
import React, { useState, useEffect } from "react";
import { ObjectiveFunctionType } from "@/types/types";
import InputEquation from "./inputs/InputEquation";

interface ObjectiveFunctionComponentProps {
  objectiveFunction: ObjectiveFunctionType;
  setObjectiveFunction: (objectiveFunction: ObjectiveFunctionType) => void;
}

function ObjectiveFunctionComponent({
  objectiveFunction,
  setObjectiveFunction,
}: ObjectiveFunctionComponentProps) {
  const onClickMaxMin = () => {
    setObjectiveFunction({
      ...objectiveFunction,
      operator: objectiveFunction.operator === "max" ? "min" : "max",
    });
  };

  return (
    <>
      <p className="text-2xl text-white mb-1">Función Objetivo</p>
      <div className="flex h-10 w-full row-auto items-center">
        <button
          onClick={onClickMaxMin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-40 py-2 px-4 rounded"
        >
          {objectiveFunction.operator === "max" ? "Max Z" : "Min Z"}
        </button>
        <p className="text-white text-3xl mx-3">=</p>
        <InputEquation
          coefficients={objectiveFunction.coefficients}
          setCoefficients={(coefficients: number[]) => {
            setObjectiveFunction({ ...objectiveFunction, coefficients });
          }}
        />
      </div>
    </>
  );
}

export default ObjectiveFunctionComponent;
