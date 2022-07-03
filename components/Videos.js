import { useState, useEffect, cloneElement } from "react";
import axios from "axios";
import YoutubeVideo from "./YoutubeVideo";

const Videos = () => {
  const apiKey = "AIzaSyAJFaSz8cvRCTfyFMumlQeG2oI9ryMgBJI";
  const channelID = "UCf7cEcOrfw0tMSAutdUwoNQ";
  const totalResults = 1;
  const reqURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${totalResults}&order=date&key=${apiKey}`;

  const [videos, setVideos] = useState([]);
  const youtube = ["2fDzCWNS3ig"];

  useEffect(() => {
    axios
      .get(reqURL)
      .then(function (response) {
        // handle success
        //console.log(response.data.items[0].id.videoId);
        const videoResults = response.data.items;
        videoResults = videoResults.map((result) => result.id.videoId);
        console.log(videoResults);
        setVideos(videoResults);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  // useEffect(() => {
  //   setVideos(youtube);
  // }, []);

  return (
    <div>
      {videos.map((video, i) => {
        return (
          <YoutubeVideo
            videoID={video}
            key={i}
            autoPlay={i === 0 ? "1" : "0"}
          />
        );
      })}
    </div>
  );
};

export default Videos;
