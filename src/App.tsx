// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Box from "./components/Box";
import Board from "./components/Board";

// const choices = ["rock", "paper", "scissors"];

function App() {
  // const [myScore, setMyScore] = useState(0);
  // const [computerScore, setComputerScore] = useState(0);
  // const selected = "rock";

  return (
    <div className="max-w-full bg-gray-100  min-h-screen max-h-dvh gap-5 flex items-start justify-center">
      <div className="flex flex-col items-center justify-center max-w-md  gap-3 p-4">
        <header className="text-3xl font-bold flex items-center justify-center w-full">
          가위바위보 게임
        </header>
        <Board />
        <div className="flex items-center justify-center gap-5 w-full">
          <Box title="You" selected={"rock"} />
          <Box title="Computer" selected={"paper"} />
        </div>

        <div className="flex items-center justify-center gap-5 w-full max-sm:flex-col">
          <Button title={"가위"} />
          <Button title={"바위"} />
          <Button title={"보"} />
          <Button title={"reset"} />
        </div>
      </div>
    </div>
  );
}

export default App;
