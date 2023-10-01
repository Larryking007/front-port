import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center">
      {links.map((link, index) => {
        <li key={index}>
          <NavLink href={link.path} path={link.path} />
        </li>;
      })}
    </ul>
  );
};

export default MenuOverlay;
