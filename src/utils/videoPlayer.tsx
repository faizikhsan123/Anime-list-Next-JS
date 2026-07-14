"use client";

import YouTube from "react-youtube"; //import from react-youtube

//eslint-disable-next-line
const VideoPlayer = ({ YoutubeId }: any) => {
  const opts = {
    height: "390", //tingi video
    width: "640", //lebar video
  };
  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-full max-w-3xl">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#C9A24B] mb-3 text-center">
          Trailer
        </p>
        <div className="relative rounded-sm p-2 md:p-3 bg-[#111116] ring-1 ring-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          <div className="rounded-[2px] overflow-hidden bg-black [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:h-auto [&_div]:w-full">
            {/* onready ketika videonya siap otomatis di pause jaid ga auto play */}
            {/* videoId diambil dari props id opts diambil dari var opts diatas  */}
            <YouTube videoId={YoutubeId} onReady={(event)=> event.target.pauseVideo()} opts={opts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;