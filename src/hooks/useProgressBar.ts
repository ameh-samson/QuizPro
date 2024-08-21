import ProgressBarContext from "@/contexts/ProgressBarContext";
import { progressStateType } from "@/types";
import { useContext } from "react";

export const useProgressBar = (): progressStateType => {
  const context = useContext(ProgressBarContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
