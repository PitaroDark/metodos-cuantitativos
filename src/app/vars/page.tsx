"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import ObjectiveFunction from "@/components/ObjectiveFunction";
import { ObjectiveFunctionType, RestrictionType } from "@/types/types";
import Restrictions from "@/components/Restrictions";
import OptimeTable from "@/components/OptimeTable";
import InputResult from "@/components/inputs/InputResult";

export default function AddVars() {
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
  const [zRow, setZRow] = useState<number[]>([]);
  const [matriz, setMatriz] = useState<number[][]>([]);
  const [sAdded, setSAdded] = useState<number[]>([]);
  const [zAdded, setZAdded] = useState<number>(0);
  const [solved, setSolved] = useState<boolean>(false);

  useEffect(() => {
    //Fill sAdded with 0 but dont change values if exists
    const newSAdded = [...Array(restrictions.length)].map((_, i) => {
      return sAdded[i] !== undefined ? sAdded[i] : 0;
    });
    setSAdded(newSAdded);
  }, [restrictions]);

  const onClickResolve = () => {
    //const newVars = new NewVars();
  };

  return (
    <>
      <Navbar absolute />
      <div className="container mx-auto pt-20 pb-10">
        <h2 className="text-4xl text-white text-center mb-5">
          Añadir Variables
        </h2>
        <div className="flex flex-col w-full mx-auto">
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
            Tabla Optima
          </h2>
          <OptimeTable
            desicionColumns={objectiveFunction.coefficients.length}
            slackColumns={restrictions.length}
            rows={restrictions.length}
            matriz={matriz}
            setMatriz={setMatriz}
            zRow={zRow}
            setZRow={setZRow}
          />
          <h2 className="text-4xl text-white text-center my-10">
            Valores de addicion
          </h2>
          <div className="flex flex-1 flex-row w-full mb-5">
            <p className="text-white text-center w-1/4">Zi</p>
            <InputResult
              result={zAdded}
              setResult={(result: number) => {
                setZAdded(result);
              }}
            />
            {restrictions.map((restriction, index) => (
              <>
                <p className="text-white text-center w-1/4">S{index + 1}</p>
                <InputResult
                  key={index}
                  result={sAdded[index]}
                  setResult={(result: number) => {
                    const newSAdded = [...sAdded];
                    newSAdded[index] = result;
                    setSAdded(newSAdded);
                  }}
                />
              </>
            ))}
          </div>
          {!solved ? (
            <button
              onClick={onClickResolve}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mt-3 py-2 px-4 rounded"
            >
              Resolver
            </button>
          ) : (
            <>
              <h2 className="text-4xl text-white text-center my-10">
                Resultados
              </h2>
            </>
          )}
        </div>
      </div>
    </>
  );
}
