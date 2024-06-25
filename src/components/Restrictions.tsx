"use client";
import { RestrictionType } from "@/types/types";
import React from "react";
import Restriction from "./Restriction";

interface RestrictionsProps {
  restrictions: RestrictionType[];
  setRestrictions: (restricions: RestrictionType[]) => void;
}

function Restrictions({ restrictions, setRestrictions }: RestrictionsProps) {
  const onClickAddRestriction = () => {
    const newRestriction: RestrictionType = {
      id: restrictions.length + 1,
      coefficients: [],
      operator: "<=",
      result: 0,
    };
    setRestrictions([...restrictions, newRestriction]);
  };

  const onClickRemoveRestriction = (id: number) => {
    const newRestrictions = restrictions.filter((r) => r.id !== id);
    setRestrictions(newRestrictions);
  };

  return (
    <div className="flex flex-col w-full mb-5">
      <p className="text-2xl text-white mb-1">Restricciones</p>
      {restrictions.map((restriction) => (
        <div key={restriction.id} className="flex row-auto my-2">
          <Restriction
            restriction={restriction}
            setRestriction={(restriction) => {
              const newRestrictions = restrictions.map((r) =>
                r.id === restriction.id ? restriction : r
              );
              setRestrictions(newRestrictions);
            }}
          />
          <button
            onClick={() => onClickRemoveRestriction(restriction.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold w-40 ml-5 py-2 px-4 rounded"
          >
            Remover
          </button>
        </div>
      ))}
      <button
        onClick={onClickAddRestriction}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mt-3 py-2 px-4 rounded"
      >
        Agregar Restricción
      </button>
    </div>
  );
}

export default Restrictions;
