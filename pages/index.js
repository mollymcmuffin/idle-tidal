import Head from "next/head";
import Image from "next/image";
import Cover from "../components/Cover";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/american-captain-2"
          rel="stylesheet"
        />
      </Head>
      <h1 className="">HOME PAGE</h1>
      <Cover />
    </>
  );
}
