import React from "react";

type InputProps = {
  id?: string;
  label?: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  required?: boolean;
};

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-sm text-[#0f1616] font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 rounded-md border border-[#e5e8ea] px-3 outline-none focus:ring-2 focus:ring-[#0093b2]"
      />
    </div>
  );
};

export default Input;
