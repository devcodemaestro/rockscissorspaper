import React from "react";

const Board = () => {
  return (
    <div className="flex items-center justify-around w-full">
      <div className="flex flex-col items-center justify-center gap-1 w-1/2">
        <span>My Score</span>
        <span>0</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 w-1/2">
        <span>Computer Score</span>
        <span>0</span>
      </div>
    </div>
  );
};

export default Board;
