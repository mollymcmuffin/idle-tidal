import React from "react";
import Image from "next/image";
import pic from "../images/IMG_0187.JPG";
import styles from "./Cover.module.css";

function Cover() {
  return (
    <>
      <div className={`${styles.title} text-7xl text-center py-5`}>
        ROOFTOP SWAYING TIL DAWN
      </div>
      <div className="relative mx-3 md:mx-auto md:h-auto md:w-3/4 ">
        <Image src={pic} alt="Good Time" layout="responsive" />
      </div>
    </>
  );
}

export default Cover;
