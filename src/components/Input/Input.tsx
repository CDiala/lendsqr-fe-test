import { MouseEvent, useEffect, useState } from "react";
import "./Input.scss";

export default function Input({
  type,
  placeholder,
  size,
}: {
  type: string;
  placeholder: string;
  size: string;
}) {
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    console.log("rerendered");
  }, [hidePassword]);

  function togglePasswordDisplay(e: MouseEvent) {
    e.stopPropagation();
    setHidePassword(!hidePassword);
  }

  return (
    <div
      className={`ls_input-container ${
        size === "small" ? "ls_pad-small" : "ls_pad-large"
      }`}
    >
      <input
        className={`ls_input`}
        type={hidePassword ? "password" : "type"}
        placeholder={placeholder}
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
  );
}
