import { ReactNode } from "react";

export interface childrenPropType {
  children: ReactNode;
}

export type progressStateType = {
  progress: number;
  isLoading: boolean;
};
