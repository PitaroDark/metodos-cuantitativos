"use client";
import React from "react";

interface InputResultProps {
  result: number;
  setResult: (result: number) => void;
}

function InputResult({ result, setResult }: InputResultProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) return setResult(0);
    // Permitir un signo al inicio y numeros enteros, solo un signo y numeros enteros
    if (!/^[+-]?[0-9]*$/.test(value)) return;
    setResult(parseInt(value, 10));
  };

  return (
    <input
      type="number"
      value={result}
      onChange={onChange}
      className="bg-gray-200 text-black font-bold w-full py-2 px-4 rounded ml-5"
    />
  );
}

export default InputResult;
