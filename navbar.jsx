import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsClipboardData, BsChat } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav>
      <div className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
          <div className="w-full bg-black/40 h-[96px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex justify-between items-center text-2xl text-white/70">
            <Link
              to="home"
              activeClass="active"
              offset={-20}
              smooth={true}
              spy={true}
              className="navIcon"
            >
              <BiHomeAlt2 />
            </Link>
            <Link
              to="features"
              activeClass="active"
              smooth={true}
              spy={true}
              className="navIcon"
            >
              <BsClipboardData />
            </Link>
            <Link
              to="faq"
              activeClass="active"
              smooth={true}
              spy={true}
              className="navIcon"
            >
              <BsChat />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
