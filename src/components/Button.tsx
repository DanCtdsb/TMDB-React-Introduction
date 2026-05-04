import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "grey";
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`text-[13px] px-3 py-1.5 rounded-md border transition-colors cursor-pointer ${
        disabled
          ? "text-white/20 border-transparent cursor-not-allowed"
          : variant === "primary"
          ? "text-white bg-white/12 border-white/15 hover:bg-white/18"
          : "text-white/50 bg-transparent border-transparent hover:text-white hover:bg-white/8"
      }`}
    >
      {children}
    </button>
  );
};