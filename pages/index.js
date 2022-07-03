import Head from "next/head";
import Image from "next/image";
import Cover from "../components/Cover";
import Videos from "../components/Videos";
import Tiktok from "../components/Tiktok";
import FooterSocial from "../components/FooterSocial";
import YoutubeVideo from "../components/YoutubeVideo";

export default function Home() {
  return (
    <>
      <Cover />
      <Videos />
      <YoutubeVideo videoID={"uh42FVgmUYo"} ID={5} autoPlay={"0"} />
      <YoutubeVideo videoID={"0gG4mMlzp9s"} ID={2} autoPlay={"0"} />
      <YoutubeVideo videoID={"YGypgkK_rik"} ID={3} autoPlay={"0"} />
      <YoutubeVideo videoID={"Md-s54ZQTbw"} ID={4} autoPlay={"0"} />

      <FooterSocial />
    </>
  );
}
