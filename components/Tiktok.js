import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Tiktok = () => {
  const videoURL =
    "https://www.tiktok.com/@bryanwonggg/video/7095362934607482114";
  const apiURL = `https://www.tiktok.com/oembed?url=${videoURL}`;
  console.log(apiURL);

  useEffect(() => {
    axios
      .get(apiURL)
      .then(function (response) {
        // handle success
        //console.log(response.data.items[0].id.videoId);
        //const videoResults = response.data.items;
        //videoResults = videoResults.map((result) => result.id.videoId);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return <div>Tiktok</div>;
};

export default Tiktok;
