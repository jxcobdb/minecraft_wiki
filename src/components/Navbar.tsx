import React from "react";
import ButtonLink from "./ButtonLink";
import ImageHandler from "./ImageHandler";

const Navbar = () => {
  return (
    <div
      className="flex sticky top-0"
      style={{
        backgroundImage: "url(/assets/NavBG.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "140px",
        zIndex: 2,
      }}>
      <div className="flex flex-container">
        <ButtonLink bgType="/assets/Logo.svg" to="/" w="270" h="144" />
      </div>
      <div className="flex flex-col justify-center pt-4">
        <div className="flex">
          <ImageHandler imagePath="/assets/MinecraftWiki.svg" w="380" h="50" />
        </div>

        <ul className="flex">
          <li className="flex-1">
            <ButtonLink bgType="/assets/Home.svg" to="/" w="130" h="50" />
          </li>
          <li className="flex-1">
            <ButtonLink bgType="/assets/About.svg" to="/about" w="130" h="50" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
