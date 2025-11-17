import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  ariaLabel,
}) => {
  const base =
    "inline-flex h-10 items-center justify-center px-4 py-0 rounded-lg overflow-hidden cursor-pointer";
  const style =
    variant === "primary"
      ? "bg-[#0093b2] text-white font-bold"
      : "bg-[#eff4f4] text-[#0f1616] font-bold";

  return (
    <button type={type} aria-label={ariaLabel} className={`${base} ${style}`} onClick={onClick}>
      <span className="text-sm leading-[21px]">{children}</span>
    </button>
  );
};

export default Button;
