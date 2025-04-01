import { Choice, Result } from "../types/game";

export function getChoiceEmoji(choice: Choice): string {
  switch (choice) {
    case "rock":
      return "✊";
    case "paper":
      return "✋";
    case "scissors":
      return "✌️";
    default:
      return "❓";
  }
}
//컴퓨터 랜덤 처리
export function getRandomChoice(choices: Choice[]): Choice {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
//승자 판단
export function determineWinner(user: Choice, computer: Choice): Result {
  if (user === computer) return "draw";

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "win";
  }

  return "lose";
}
