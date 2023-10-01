import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex-flex-wrap items-center justify-between mx-auto p-8">
        <Link className="text-5xl text-white font-semibold" href={"/"}>
          LOGO
        </Link>
        <div className="menu hidden md:block" id="navbar">
          <ul>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                href={"#about"}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
