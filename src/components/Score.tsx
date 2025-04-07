import React from "react";
interface ScoreProps {
  myScore: number;
  computerScore: number;
}

const Score: React.FC<ScoreProps> = ({ myScore, computerScore }) => {
  return (
    <div className="flex items-center justify-evenly max-h-72 min-h-24 w-full">
      <div className="flex flex-col items-center min-w-8 max-w-36">
        <span>My Score</span>
        <span>{myScore}</span>
      </div>
      <div className="flex flex-col justify-center gap-5 items-center h-48">
        <h2>You Win</h2>
      </div>
      <div className="flex flex-col items-center min-w-8 max-w-36">
        <span>Computer Score</span>
        <span>{computerScore}</span>
      </div>
    </div>
  );
};

export default Score;
