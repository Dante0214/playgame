import { Choice } from "../types/game";
import { getChoiceEmoji } from "../utils/gameUtils";

interface PlayerProps {
  label: string;
  choice: Choice;
  score: number;
  scoreColor: string;
  isAnimating?: boolean;
}

const Player = ({
  label,
  choice,
  score,
  scoreColor,
  isAnimating = false,
}: PlayerProps) => {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold mb-2">{label}</p>
      <div
        className={`bg-white h-24 w-24 flex items-center justify-center text-5xl rounded-lg shadow-md ${
          isAnimating ? "animate-pulse" : ""
        }`}
      >
        {choice ? getChoiceEmoji(choice) : "?"}
      </div>
      <p className={`mt-2 font-bold ${scoreColor}`}>{score}</p>
    </div>
  );
};

export default Player;
