import { useState, useEffect } from "react";
import axios from "axios";

const Videos = () => {
  const apiKey = "AIzaSyBE_fbE_ksu8Vn7kRST6pjYiMVpbSDea30";
  const channelID = "UCf7cEcOrfw0tMSAutdUwoNQ";
  const totalResults = 6;
  const reqURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${totalResults}&order=date&key=${apiKey}`;

  const [videos, setVideos] = useState([]);
  console.log(reqURL);

  axios
    .get(reqURL)
    .then(function (response) {
      // handle success
      //console.log(response.data.items[0].id.videoId);
      const videoResults = response.data.items;
      videoResults.map((result) => result.id.videoId);

      console.log(videoResults);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log("DONE REQ");
    });

  useEffect(() => {}, []);

  return <div></div>;
};

export default Videos;
