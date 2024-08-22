import QuizSelectionContext from "@/contexts/QuizSelectionContext";
import { quizSelectionStateType } from "@/types";
import { useContext } from "react";

export const useQuizSelection = (): quizSelectionStateType => {
  const context = useContext(QuizSelectionContext);

  if (!context) {
    throw new Error("useQuizSelection must be used within a ThemeProvider");
  }

  return context;
};
