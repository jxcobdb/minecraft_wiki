import React from "react";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";
import ImageHandler from "./ImageHandler";

const Navbar = () => {
  return (
    <div
      className="flex"
      style={{
        backgroundImage: "url(/assets/NavBG.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "140px",
      }}>
      <div className="flex flex-container">
        <ImageHandler imagePath="/assets/Logo.svg" w="398" h="244" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex">
          <ImageHandler imagePath="/assets/MinecraftWiki.svg" w="380" h="50" />
        </div>

        <ul className="flex">
          <li className="flex-1">
            <ButtonLink bgType="/assets/Home.svg" to="Home" w="130" h="50" />
          </li>
          <li className="flex-1">
            <ButtonLink bgType="/assets/About.svg" to="Home" w="130" h="50" />
          </li>
          <li className="flex-1">
            <ButtonLink bgType="/assets/Login.svg" to="Home" w="130" h="50" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
