import { useState, useEffect, createContext } from "react";
import { childrenPropType, progressStateType } from "@/types";

const ProgressBarContext = createContext<progressStateType | undefined>(
  undefined
);

export const ProgressBarProvider = ({ children }: childrenPropType) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          return prev >= 100 ? 100 : prev + 10;
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  //stop loading after reaching 100%
  useEffect(() => {
    if (progress >= 100) {
      setIsLoading(false);
    }
  }, [progress]);

  const value = { progress, isLoading };
  return (
    <ProgressBarContext.Provider value={value}>
      {children}
    </ProgressBarContext.Provider>
  );
};

export default ProgressBarContext;
