import { childrenPropType } from "@/types";
import { ProgressBarProvider } from "./ProgressBarContext";
import { QuizSelectionContextProvider } from "./QuizSelectionContext";

const AppProviders = ({ children }: childrenPropType) => {
  return (
    <ProgressBarProvider>
      <QuizSelectionContextProvider>{children}</QuizSelectionContextProvider>
    </ProgressBarProvider>
  );
};

export default AppProviders;
