import "./Button.scss";

/**
 *
 * @param color
 * @returns
 */
export default function Button({
  color,
  type,
  text,
  transform,
  size,
}: {
  color: string;
  type: string;
  text: string;
  transform?: boolean;
  size?: string;
}) {
  return (
    <button
      style={{
        borderColor: color,
        backgroundColor: type !== "outline" ? color : "transparent",
        color: type === "outline" ? color : "white",
      }}
      className={`ls_button ${transform && "transform-text"} ${
        size ? "ls_button-small" : "ls_button-large"
      }`}
    >
      {text}
    </button>
  );
}
