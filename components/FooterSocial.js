import Link from "next/link";
import styles from "./Social.module.css";
import { Instagram, Youtube, Tiktok } from "styled-icons/boxicons-logos";

const FooterSocial = () => {
  return (
    <div className="flex flex-col mt-[10vh]">
      <div className="flex justify-center my-[10vh] gap-7">
        <Link href="https://www.youtube.com/channel/UCf7cEcOrfw0tMSAutdUwoNQ/featured">
          <a>
            <Youtube size="36" />
          </a>
        </Link>
        <Link href="https://instagram.com/idle_tidal?igshid=YmMyMTA2M2Y=">
          <a>
            <Instagram size="36" />
          </a>
        </Link>
        <Link href="https://vt.tiktok.com/ZSdE32wCX/">
          <a>
            <Tiktok size="36" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FooterSocial;
