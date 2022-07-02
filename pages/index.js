import Head from "next/head";
import Image from "next/image";
import Cover from "../components/Cover";
import Videos from "../components/Videos";
import Tiktok from "../components/Tiktok";

export default function Home() {
  return (
    <>
      <Cover />
      <Videos />
    </>
  );
}
