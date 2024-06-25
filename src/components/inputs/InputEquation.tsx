import React, { useState, useEffect } from "react";

interface InputEquationProps {
  coefficients: number[];
  setCoefficients: (coefficients: number[]) => void;
}

const InputEquation: React.FC<InputEquationProps> = ({
  coefficients,
  setCoefficients,
}) => {
  const [mask, setMask] = useState<string>("");

  useEffect(() => {
    setMask(coefficientsToMaskWithX(coefficients));
  }, []);

  const maskToCoefficients = (text: string): number[] => {
    let coefficients: number[] = [];
    let i: number = 0;

    while (i < text.length) {
      let numStr: string = "";
      if (text[i] === "+" || text[i] === "-") {
        numStr += text[i];
        i++;
      }

      while (i < text.length && /\d/.test(text[i])) {
        numStr += text[i];
        i++;
      }

      if (!isNaN(parseInt(numStr, 10))) coefficients.push(parseInt(numStr, 10));
    }

    return coefficients;
  };

  const coefficientsToMask = (coefficients: number[]) => {
    return coefficients.reduce((acc, curr, index) => {
      if (index === 0) return acc + curr;
      return acc + (curr < 0 ? "" : "+") + curr;
    }, "");
  };

  const coefficientsToMaskWithX = (coefficients: number[]) => {
    return coefficients.reduce((acc, curr, index) => {
      if (index === 0) return acc + curr + "a";
      return (
        acc + (curr < 0 ? "" : "+") + curr + String.fromCharCode(index + 97)
      );
    }, "");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) {
      setCoefficients([]);
      return setMask("");
    }
    // Permitir un signo al inicio y opcionalmente al final, permitiendo entrada gradual
    if (!/^[+-]?[0-9]*([+-][0-9]+)*[+-]?$/.test(value)) return;
    setMask(value);
    const newCoefficients = maskToCoefficients(value);
    setCoefficients(newCoefficients);
  };

  const onBlur = () => {
    setMask(coefficientsToMaskWithX(coefficients));
  };

  const onFocus = () => {
    setMask(coefficientsToMask(coefficients));
  };

  return (
    <input
      type="text"
      className="
        bg-gray-200 
        appearance-none 
        border-2 
        border-gray-200 
        rounded 
        w-full 
        py-2 
        px-4 
        text-black 
        font-bold 
        leading-tight 
        focus:outline-none 
        focus:bg-white 
        focus:border-blue-500"
      placeholder="Ingrese la ecuación"
      value={mask}
      onBlur={onBlur} // unfocus
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export default InputEquation;
