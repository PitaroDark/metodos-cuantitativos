"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import ObjectiveFunction from "@/components/ObjectiveFunction";
import Restrictions from "@/components/Restrictions";
import { ObjectiveFunctionType, RestrictionType } from "@/types/types";

export default function NotBasic() {
  const [objectiveFunction, setObjectiveFunction] =
    useState<ObjectiveFunctionType>({
      coefficients: [],
      operator: "max",
    });
  const [restrictions, setRestrictions] = useState<RestrictionType[]>([
    {
      id: 1,
      coefficients: [],
      operator: "<=",
      result: 0,
    },
  ]);

  return (
    <>
      <Navbar absolute />
      <div className="container mx-auto pt-20 pb-10">
        <h2 className="text-4xl text-white text-center mb-5">
          Añadir Variables
        </h2>
        <div className="flex flex-col w-3/4 mx-auto">
          <ObjectiveFunction
            objectiveFunction={objectiveFunction}
            setObjectiveFunction={setObjectiveFunction}
          />
          <div className="h-3" />
          <Restrictions
            restrictions={restrictions}
            setRestrictions={setRestrictions}
          />
          <h2 className="text-4xl text-white text-center my-10">
            Propuestas de cambio
          </h2>
        </div>
      </div>
    </>
  );
}
