import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Box from "./components/Box";
import Board from "./components/Board";

type Choice = {
  name: string;
  image: string;
};

type Choices = {
  [key: string]: Choice;
};

const choices: Choices = {
  rock: {
    name: "rock",
    image: "/images/rock.svg",
  },
  paper: {
    name: "paper",
    image: "/images/paper.svg",
  },
  scissors: {
    name: "scissors",
    image: "/images/scissors.svg",
  },
  question: {
    name: "question",
    image: "/images/question-mark.svg",
  },
};

function App() {
  const [selected, setSelected] = useState<Choice>(choices["question"]);
  const [computerSelected, setComputerSelected] = useState<Choice>(
    choices["question"]
  );
  const [myScore, setMyScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const play = (userChoice: string) => {
    const computerChoice = randomChoice();
    setComputerSelected(choices[computerChoice]);
    setSelected(choices[userChoice]);

    const gameResult = judgement(userChoice, computerChoice);
    setResult(gameResult);

    if (gameResult === "Win") {
      setMyScore((prev) => prev + 1);
    } else if (gameResult === "Lose") {
      setComputerScore((prev) => prev + 1);
    }
  };

  const randomChoice = () => {
    const keys = Object.keys(choices).filter((key) => key !== "question");
    const idx = Math.floor(Math.random() * keys.length);
    return keys[idx];
  };

  const judgement = (user: string, computer: string): string => {
    if (user === computer) {
      return "Tie";
    } else if (user === "rock") {
      return computer === "scissors" ? "Win" : "Lose";
    } else if (user === "scissors") {
      return computer === "paper" ? "Win" : "Lose";
    } else {
      return computer === "rock" ? "Win" : "Lose";
    }
  };

  const resetGame = () => {
    setSelected(choices["question"]);
    setComputerSelected(choices["question"]);
    setResult("");
    setMyScore(0);
    setComputerScore(0);
  };

  return (
    <div className="max-w-full bg-gray-100 min-h-dvh  flex items-center justify-center">
      <div className="flex flex-col items-center justify-between max-w-md gap-3 p-4 h-dvh py-8">
        <header className="text-3xl font-bold flex items-center justify-center w-full mb-4">
          가위바위보 게임
        </header>
        <Board myScore={myScore} computerScore={computerScore} />
        <div className="flex items-center justify-center gap-5 w-full mt-4">
          <Box title="You" selected={selected} result={result} />
          <Box title="Computer" selected={computerSelected} result={result} />
        </div>

        <div className="flex items-center justify-center gap-5 w-full max-[370px]:flex-col max-[370px]:gap-1 mt-auto">
          <Button title={"가위"} onClick={() => play("scissors")} />
          <Button title={"바위"} onClick={() => play("rock")} />
          <Button title={"보"} onClick={() => play("paper")} />
          <Button title={"reset"} onClick={() => resetGame()} />
        </div>
      </div>
    </div>
  );
}

export default App;
