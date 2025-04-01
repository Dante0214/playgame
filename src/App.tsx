import { useState } from "react";
import Player from "./components/Player";
import { Choice, Result } from "./types/game";
import ResultDisplay from "./components/ResultDisplay";
import ChoiceButton from "./components/ChiceButton";
import { determineWinner, getRandomChoice } from "./utils/gameUtils";

function App() {
  const [userChoice, setUserChoice] = useState<Choice>(null);
  const [computerChice, setComputerChoice] = useState<Choice>(null);
  const [score, setScore] = useState({ user: 0, computer: 0 });
  const [result, setResult] = useState<Result>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const choices: Choice[] = ["rock", "paper", "scissors"];
  const handleReset = () => {
    setScore({ user: 0, computer: 0 });
    setComputerChoice(null);
    setUserChoice(null);
    setResult(null);
  };

  const handleChoice = (choice: Choice) => {
    if (isAnimating) return;

    setUserChoice(choice);
    setIsAnimating(true);

    setTimeout(() => {
      const computerSelection = getRandomChoice(choices);
      setComputerChoice(computerSelection);
      const gameResult = determineWinner(choice, computerSelection);
      setResult(gameResult);
      if (gameResult === "win") {
        setScore((prev) => ({ ...prev, user: prev.user + 1 }));
      } else if (gameResult === "lose") {
        setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      }

      setIsAnimating(false);
    }, 100);
  };

  return (
    <div className=" flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h1>가위바위보 게임</h1>
      <div className="flex justify-between w-full mb-8">
        <Player
          label="당신"
          choice={userChoice}
          score={score.user}
          scoreColor="text-blue-600"
        />
        <ResultDisplay result={result} />
        <Player
          label="컴퓨터"
          choice={computerChice}
          score={score.computer}
          scoreColor="text-red-600"
        />
      </div>
      <div className="flex space-x-4 mb-6">
        {choices.map((choice) => (
          <ChoiceButton
            key={choice}
            choice={choice}
            onClick={() => handleChoice(choice)}
            disabled={isAnimating}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="mb-4 text-2xl cursor-pointer hover:font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
        <p className="text-gray-700 mb-1">아래 버튼을 눌러 선택하세요</p>
        <div className="flex justify-center space-x-2 text-sm">
          <span className="bg-gray-200 px-2 py-1 rounded">✊ = 바위</span>
          <span className="bg-gray-200 px-2 py-1 rounded">✋ = 보</span>
          <span className="bg-gray-200 px-2 py-1 rounded">✌️ = 가위</span>
        </div>
      </div>
    </div>
  );
}

export default App;
