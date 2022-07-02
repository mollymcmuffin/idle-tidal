import Head from "next/head";
import Image from "next/image";
import Cover from "../components/Cover";
import Videos from "../components/Videos";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/american-captain-2"
          rel="stylesheet"
        />

        <link
          href="http://fonts.cdnfonts.com/css/super-retro-m54"
          rel="stylesheet"
        />
      </Head>

      <Cover />
      <Videos />
    </>
  );
}
