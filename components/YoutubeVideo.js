import React from "react";

const youtubeVideo = ({ videoID, ID, autoPlay }) => {
  return (
    <div className="flex justify-center aspect-video">
      <iframe
        className="object-contain w-11/12 h-auto"
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

export default youtubeVideo;
