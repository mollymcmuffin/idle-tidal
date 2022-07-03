import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isHidden, setHidden] = useState("true");
  const menu = () => {
    setHidden(!isHidden);
  };

  return (
    <nav
      className={`${styles.para} flex flex-wrap items-center justify-between w-full px-4 py-4 text-lg text-gray-700 bg-white md:py-0 border-b-[1px] border-solid border-black sticky top-0 z-10`}
    >
      <div className="text-3xl leading-4">IDLE TIDAL</div>
      <svg
        onClick={menu}
        className="block w-6 h-6 cursor-pointer md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`${
          isHidden ? "hidden" : ""
        } w-full md:flex md:items-center md:w-auto `}
        onClick={menu}
      >
        <ul className="pt-4 text-xl text-gray-700 md:flex md:justify-between md:pt-0">
          <Link href="/">
            <a className="block py-2 md:p-4 hover:text-purple-400">HOME</a>
          </Link>
          <Link href="/about">
            <a
              className="block py-2 md:p-4 hover:text-purple-400 "
              onClick={menu}
            >
              ABOUT
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
