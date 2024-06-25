"use client";
import React, { useEffect } from "react";
import InputTable from "./inputs/InputTable";

interface OptimeTableProps {
  desicionColumns: number;
  slackColumns: number;
  rows: number;
  zRow: number[]; //x
  setZRow?: (zRow: number[]) => void;
  matriz: number[][]; //xy
  setMatriz?: (sRows: number[][]) => void;
  disabled?: boolean;
}

function OptimeTable({
  desicionColumns,
  slackColumns,
  rows,
  zRow,
  setZRow,
  matriz,
  setMatriz,
  disabled = false,
}: OptimeTableProps) {
  useEffect(() => {
    if (disabled) return;
    const size = desicionColumns + slackColumns + 1;
    const newMatriz = [...Array(rows)].map(() => [...Array(size)].fill(0));
    const newZRow = [...Array(size)].map((_, i) => {
      return zRow[i] !== undefined ? zRow[i] : 0;
    });
    setMatriz!(newMatriz);
    setZRow!(newZRow);
  }, [desicionColumns, slackColumns]);

  return (
    <div className="w-full rounded-lg bg-slate-800 p-2">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-gray-500">
            <th className="text-white border-b border-gray-500 px-3 py-4">-</th>
            {[...Array(desicionColumns)].map((_, i) => (
              <th
                className="text-white border-b border-gray-500 px-3 py-4"
                key={i}
              >
                {String.fromCharCode(i + 97)}
              </th>
            ))}
            {[...Array(slackColumns)].map((_, i) => (
              <th
                className="text-white border-b border-gray-500 px-3 py-4"
                key={i}
              >
                S{i + 1}
              </th>
            ))}
            <th className="text-white border-b border-gray-500 px-3 py-4">
              Sol
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-500 text-center">
            {zRow.length > 0 && <td className="px-3 py-4">Z</td>}
            {zRow.map((value, i) => (
              <td className="px-3 py-4" key={i}>
                <InputTable
                  value={value}
                  setValue={(value) => {
                    const newZRow = [...zRow];
                    newZRow[i] = value;
                    setZRow!(newZRow);
                  }}
                  disabled={disabled}
                />
              </td>
            ))}
          </tr>
          {matriz.map((row, i) => (
            <tr className="border-b border-gray-500 text-center" key={i}>
              <td className="px-3 py-4">S{i + 1}</td>
              {row.map((value, j) => (
                <td className="px-3 py-4" key={j}>
                  <InputTable
                    value={value}
                    setValue={(value) => {
                      const newMatriz = matriz.map((r, k) =>
                        k === i ? r.map((v, l) => (l === j ? value : v)) : r
                      );
                      setMatriz!(newMatriz);
                    }}
                    disabled={disabled}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OptimeTable;
