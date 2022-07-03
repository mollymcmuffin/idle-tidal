import React from "react";

const YoutubeVideo = ({ videoID, ID, autoPlay }) => {
  return (
    <div className="flex justify-center aspect-video md:max-h-[80vh] md:mx-auto my-[10vh] mx-[5vw]">
      <iframe
        className="object-contain w-11/12 h-auto md:max-w-[75vw] grow"
        width="560"
        height="315"
        key={ID}
        src={`https://www.youtube.com/embed/${videoID}?autoplay=${autoPlay}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
