import React from "react";

const Item = () => {
  return (
    <div className="flex items-center justify-center max-h-72 min-h-24 w-full">
      <div className="flex flex-col items-center">
        <img src="/images/paper.svg" className="min-w-8 max-w-36" />
        <span>You</span>
      </div>
      <div className="flex flex-col justify-center gap-5 items-center h-48">
        <span>VS</span>
      </div>
      <div className="flex flex-col items-center">
        <img src="/images/rock.svg" className="min-w-8 max-w-36" />
        <span>Computer</span>
      </div>
    </div>
  );
};

export default Item;
