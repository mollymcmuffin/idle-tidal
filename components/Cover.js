import React from "react";
import Image from "next/image";
import pic from "../images/IMG_0187.JPG";
import styles from "./Cover.module.css";

function Cover() {
  return (
    <div className="flex flex-col">
      <h1
        className={`${styles.title} text-5xl md:text-7xl py-5 text-center overflow-auto text-[7vw] `}
      >
        ROOFTOP SWAYING <br /> TIL DAWN
      </h1>

      <div className="relative mx-3 md:mx-auto md:h-auto md:w-3/4 ">
        <Image src={pic} alt="Good Time" layout="responsive" />
      </div>
    </div>
  );
}

export default Cover;
