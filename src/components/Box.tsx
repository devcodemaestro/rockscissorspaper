import React from "react";

type Choice = {
  name: string;
  image: string;
};

interface BoxProps {
  title: string;
  selected: Choice | null;
  onClick?: () => void;
  result?: string;
  computerResult?: string;
}

const Box: React.FC<BoxProps> = ({
  title,
  selected,
  result,
  computerResult,
}) => {
  if (title === "Computer") {
    if (result === "Win") {
      result = "Lose";
    } else if (result === "Lose") {
      result = "Win";
    } else if (result === "Tie") {
      result = "Tie";
    } else {
      result = "";
    }
  }
  return (
    <div
      className={`select-none flex flex-col items-center justify-evenly rounded-lg shadow-lg gap-5 p-4 bg-white min-w-[104.28px] border-2 ${
        result === "Win"
          ? "border-green-500"
          : result === "Lose"
          ? "border-red-500"
          : result === "Tie"
          ? "border-yellow-300"
          : "border-gray-500"
      }`}
    >
      <h3>{title}</h3>
      <img src={selected?.image} className="max-w-1/2" />
      <h4>{result ? result : computerResult}</h4>
    </div>
  );
};

export default Box;
