import { useProgressBar } from "@/hooks/useProgressBar";
import quizProLogo from "../assets/svg/Logo.svg";
import VideoBackground from "@/components/VideoBg";

const Loading = () => {
  const { progress } = useProgressBar();

  return (
    <div className="h-screen relative flex flex-col justify-between">
      {/* Video Background */}
      <VideoBackground />
      {/* Overlay */}
      <div className=" relative z-10 flex flex-grow items-center justify-center">
        <img src={quizProLogo} className="w-40" />
      </div>

      <div className="z-10 bg-[#59307B] h-2">
        <div
          className="loadingGradient rounded-r h-2 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
