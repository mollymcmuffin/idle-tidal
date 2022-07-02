import React from "react";
import styles from "./Epilogue.module.css";

const Epilogue = () => {
  return (
    <div className="flex flex-col mt-[8vh]">
      <div className={`${styles.title} text-5xl  md:text-7xl text-center py-5`}>
        EPILOGUE
      </div>
      <p
        className={`w-[75vw] mx-auto my-6 text-[3vw] md:text-2xl ${styles.para}`}
      >
        <span className={styles.highlight}>Idle Tidal </span>
        is a Singaporean dream pop band formed in Jurong West, in 2018, by
        <span className={styles.highlight}> Bryan + KumSeng</span>. The band is
        known for their ethereal, limerent and often dream-like musical style,
        lyrics often based on the themes of romance and love, as well as Bryan's
        voice, which has been described as "androgynous". While marketed as an
        ambient pop band, Idle Tidal are also considered to be shoegaze,
        slowcore and indie rock. The band's debut extended play (EP), Midnight,
        was released in 2020, with the song "The Night" eventually becoming a
        sleeper hit through commercial licensing. After the release of "How I
        Miss" in 2021, the band released their self-titled debut studio album in
        2022 to positive reviews. The band's second studio album, Modern
        Depression, was released on March 25, 2022.
      </p>
    </div>
  );
};

export default Epilogue;
