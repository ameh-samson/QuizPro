import quizProLogo from "../assets/svg/Logo.svg";
import { useEffect, useState } from "react";

const Loading = () => {
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

  return (
    <div className="h-screen gradientBg flex flex-col justify-between">
      <div className="flex flex-grow items-center justify-center">
        <img src={quizProLogo} className="w-32" />
      </div>

      <div className="bg-[#59307B] h-2">
        {/* <div className="loadingGradient rounded-r h-2 w-1/2"></div> */}
        <div
          className="loadingGradient rounded-r h-2 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
