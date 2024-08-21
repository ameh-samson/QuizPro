import { Input } from "@/components/ui/input";
import VideoBackground from "@/components/VideoBg";
import userIcon from "../assets/png/user.png";

export const Welcome = () => {
  return (
    <div className="h-screen relative gradientBg grid items-center justify-center">
      <VideoBackground />
      <div className="relative z-10 flex flex-col justify-center items-center">
        <div className="gradientBg h-32 w-32 rounded-full">
          <img src={userIcon} className="object-cover" />
        </div>
        <h1>Welcome, Please enter your name</h1>
        <Input />
      </div>
    </div>
  );
};
