import { Choice } from "../types/game";
import { getChoiceEmoji } from "../utils/gameUtils";

interface ChoiceButtonProps {
  choice: Choice;
  onClick: () => void;
  disabled: boolean;
}

function ChoiceButton({ choice, onClick, disabled }: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-16 w-16 text-3xl bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {getChoiceEmoji(choice)}
    </button>
  );
}

export default ChoiceButton;
