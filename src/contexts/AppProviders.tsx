import { childrenPropType } from "@/types";
import { ProgressBarProvider } from "./ProgressBarContext";

const AppProviders = ({ children }: childrenPropType) => {
  return <ProgressBarProvider>{children}</ProgressBarProvider>;
};

export default AppProviders;
