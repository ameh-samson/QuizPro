import { ReactNode } from "react";

export interface childrenPropType {
  children: ReactNode;
}

export type progressStateType = {
  progress: number;
  isLoading: boolean;
};

export type quizSelectionStateType = {
  quizSelectionPage: boolean;
  setQuizSelectionPage: (quizSelectionPage: boolean) => void;
};

export interface userDataFormType {
  name: string;
}
