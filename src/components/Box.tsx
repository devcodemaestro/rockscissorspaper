import React from "react";

interface BoxProps {
  myScore?: number;
  computerScore?: number;
  title: string;
  selected: string;
}

const Box: React.FC<BoxProps> = ({ title, selected }) => {
  return (
    <div className="flex flex-col items-center justify-evenly rounded-lg shadow-lg gap-5 p-4 bg-white">
      <h3>{title}</h3>
      <img src={`/images/${selected}.svg`} className="max-w-1/2" />
      <h4>Win</h4>
    </div>
  );
};

export default Box;
