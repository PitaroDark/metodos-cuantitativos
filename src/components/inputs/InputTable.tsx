"use client";
import React, { useState } from "react";

interface InputTableProps {
  value: number;
  setValue: (value: number) => void;
  disabled?: boolean;
}

function InputTable({ value, setValue, disabled = false }: InputTableProps) {
  const [mask, setMask] = useState<string>(value.toString());

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value) {
      setMask("0");
      return setValue(0);
    }
    if (value.length === 0) {
      setMask("0");
      return setValue(0);
    }
    if (!value.includes(".") && value.startsWith("0") && value.length > 1)
      value = value.slice(1);
    // Permitir un signo al inicio y numeros enteros, solo un signo y numeros enteros
    //if (!/^[+-]?(\d+|\d*\.\d{0,2})$/.test(value)) return;
    if (!/^([+-]?\d+)(\.(\d{1,2})?)?$/.test(value)) return;
    setMask(value);
    setValue(parseFloat(value));
  };

  return (
    <input
      className="text-white text-center font-bold w-full p-2 rounded bg-transparent focus:border-0"
      disabled={disabled}
      onChange={onChange}
      value={mask}
    />
  );
}

export default InputTable;
