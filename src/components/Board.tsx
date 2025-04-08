import React from "react";
interface BoardProps {
  myScore: number;
  computerScore: number;
}
const Board: React.FC<BoardProps> = ({ myScore, computerScore }) => {
  return (
    <div className="flex items-center justify-around w-full">
      <div className="flex flex-col items-center justify-center gap-1 w-1/2">
        <span>My Score</span>
        <span>{myScore}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 w-1/2">
        <span>Computer Score</span>
        <span>{computerScore}</span>
      </div>
    </div>
  );
};

export default Board;
