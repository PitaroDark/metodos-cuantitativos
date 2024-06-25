"use client";

interface InputTableProps {
  value: number;
  setValue: (value: number) => void;
}

function InputTable({ value, setValue }: InputTableProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return setValue(0);
    if (value.length === 0) return setValue(0);
    // Permitir un signo al inicio y numeros enteros, solo un signo y numeros enteros
    if (!/^[+-]?[0-9]*$/.test(value)) return;
    setValue(parseInt(value, 10));
  };

  return (
    <input
      className="text-white text-center font-bold w-full p-2 rounded bg-transparent focus:border-0"
      onChange={onChange}
      value={value}
    />
  );
}

export default InputTable;
