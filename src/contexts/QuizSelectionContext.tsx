import { childrenPropType, quizSelectionStateType } from "@/types";
import { createContext, useState } from "react";

const QuizSelectionContext = createContext<quizSelectionStateType | undefined>(
  undefined
);

export const QuizSelectionContextProvider = ({
  children,
}: childrenPropType) => {
  const [quizSelectionPage, setQuizSelectionPage] = useState(false);

  const value = { quizSelectionPage, setQuizSelectionPage };
  return (
    <QuizSelectionContext.Provider value={value}>
      {children}
    </QuizSelectionContext.Provider>
  );
};

export default QuizSelectionContext;
