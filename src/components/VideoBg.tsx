import { FC } from "react";

const VideoBackground: FC = () => {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/videoBg.mp4"
      autoPlay
      loop
      muted
    />
  );
};

export default VideoBackground;
