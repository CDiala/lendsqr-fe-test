import { MouseEvent, useState } from "react";
import "./Input.scss";

interface InputProps {
  type: string;
  placeholder: string;
  size: string;
  error: string;
  [x: string]: unknown;
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  size,
  error,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(type === "password");

  function togglePasswordDisplay(e: MouseEvent) {
    e.stopPropagation();
    setHidePassword(!hidePassword);
  }

  return (
    <div>
      <div
        className={`ls_input-container ${
          size === "small" ? "ls_pad-small" : "ls_pad-large"
        }`}
      >
        <input
          className={`ls_input`}
          type={hidePassword ? "password" : "text"}
          placeholder={placeholder}
          {...props}
        />
        {type === "password" && (
          <span
            onClick={(e) => togglePasswordDisplay(e)}
            className="ls_password__toggler"
          >
            {hidePassword ? "show" : "hide"}
          </span>
        )}
      </div>
      <span className="text-xs text-red-500">{error}</span>
    </div>
  );
};
