"use client";
import React, { useEffect, useState } from "react";
import NewVars from "@/models/NewVars";
import Simplex from "@/models/Simplex";
import ObjectiveFunction from "@/components/ObjectiveFunction";
import InputResult from "@/components/inputs/InputResult";
import Restrictions from "@/components/Restrictions";
import OptimeTable from "@/components/OptimeTable";
import { Navbar } from "@/components/Navbar";
import Loading from "@/components/Loading";
import { ObjectiveFunctionType, RestrictionType } from "@/types/types";

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
  const [reducedCost, setReducedCost] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [solved, setSolved] = useState<boolean>(false);
  const [stateSolved, setStateSolved] = useState<{
    matriz: number[][];
    zRow: number[];
  }>({
    matriz: [],
    zRow: [],
  });

  useEffect(() => {
    //Fill sAdded with 0 but dont change values if exists
    const newSAdded = [...Array(restrictions.length)].map((_, i) => {
      return sAdded[i] !== undefined ? sAdded[i] : 0;
    });
    setSAdded(newSAdded);
  }, [restrictions]);

  const onClickResolve = () => {
    setLoading(true);
    const newVariables = new NewVars(
      objectiveFunction.coefficients,
      zRow,
      matriz,
      sAdded,
      zAdded
    );
    const cost = newVariables.calculateReducedCost();
    setReducedCost(cost);
    const lenghtOF = objectiveFunction.coefficients.length;
    const { newMatriz, newZRow } =
      newVariables.generateNewMatrizAndZRow(lenghtOF);
    if (cost < 0) {
      //Realizamos el metodo Simplex Primal
      const simplex = new Simplex(lenghtOF + 1, newMatriz, newZRow);
      // while (simplex.hasNext()) {
      //   const iteration = simplex.solveByIteration();
      //   const { matriz, zRow } = simplex.getMatrizAndZRow();
      // }
      simplex.solve();
      const { matriz, zRow } = simplex.getMatrizAndZRow();
      setSolved(true);
      setStateSolved({
        matriz: matriz,
        zRow: zRow,
      });
    } else {
      setSolved(true);
      setStateSolved({
        matriz: newMatriz,
        zRow: newZRow,
      });
    }
    setLoading(false);
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
              <p className="text-white">
                Se calculo el costo reducido, su valor es: <b>{reducedCost}</b>
              </p>
              <p className="text-white mb-10">
                Al ser{" "}
                {reducedCost < 0
                  ? "menor que 0, no hay factibilidad dual y esta requiere del metodo Simplex Primal para encontrar una solución optima."
                  : "mayor o igual a 0, hay factibilidad dual y la solución es optima, por lo tanto, se muestra la tabla optima nueva."}
              </p>
              <OptimeTable
                desicionColumns={objectiveFunction.coefficients.length + 1}
                slackColumns={restrictions.length}
                rows={restrictions.length}
                matriz={stateSolved.matriz}
                zRow={stateSolved.zRow}
                disabled={true}
              />
            </>
          )}
        </div>
      </div>
      {false && <Loading message="Resolviendo..." />}
    </>
  );
}
