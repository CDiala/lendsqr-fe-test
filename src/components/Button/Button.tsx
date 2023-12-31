import React, { useMemo } from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  theme:
    | "primary"
    | "secondary"
    | "danger"
    | "primary-outline"
    | "secondary-outline"
    | "danger-outline";
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  block,
  children,
  size,
  theme,
}) => {
  const buttonWidth = useMemo(() => {
    return block ? "w-full" : "w-fit";
  }, [block]);

  return (
    <button className={`button ${buttonWidth} button-${size} button-${theme}`}>
      {children}
    </button>
  );
};
