import React from "react";

interface buttons {
  thumbneil: string;
  name: string;
  theme?: "dark" | "green";
}

function ButtonProps(props: buttons) {
  const {thumbneil, name, theme = "dark"} = props;
  return (
    <div
      className={`flex items-center gap-2 py-3 px-6 ${
        theme === "dark"
          ? "border-[2px] border-emerald-400 rounded-md"
          : "bg-emerald-400 rounded-md"
      }`}
    >
      <div>
        <img src={thumbneil} alt="" />
      </div>
      <div className="text-base font-medium text-white">{name}</div>
    </div>
  );
}

export default ButtonProps;
