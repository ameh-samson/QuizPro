import { FC } from "react";

const VideoBackground: FC = () => {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/videoBg.webm"
      autoPlay
      loop
      muted
    />
  );
};

export default VideoBackground;
