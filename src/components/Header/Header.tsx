import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <div className="menu-items">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href="/" className="menu-logo">
        <span className="menu-logo--imdb">
          IMDB
        </span>
        <span className="menu-logo--clone">
          Clone
        </span>
      </Link>
    </div>
  );
}

export default Header;
