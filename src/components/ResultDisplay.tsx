import { Result } from "../types/game";

interface ResultDisplayProps {
  result: Result;
}

function ResultDisplay({ result }: ResultDisplayProps) {
  const getMessage = (): string => {
    switch (result) {
      case "win":
        return "이겼습니다! 🎉";
      case "lose":
        return "졌습니다 😢";
      case "draw":
        return "비겼습니다 🤝";
      default:
        return "선택하세요!";
    }
  };

  const getClass = (): string => {
    switch (result) {
      case "win":
        return "text-green-500";
      case "lose":
        return "text-red-500";
      case "draw":
        return "text-yellow-500";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="text-center flex flex-col items-center justify-center">
      <p className={`text-xl font-bold ${getClass()}`}>{getMessage()}</p>
      <p className="text-gray-500 text-sm mt-1">VS</p>
    </div>
  );
}

export default ResultDisplay;
