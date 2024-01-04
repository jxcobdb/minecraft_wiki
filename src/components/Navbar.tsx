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
        width: "auto",
        height: "155px",
      }}>
      <ImageHandler imagePath="/assets/Logo.svg" />
      <div className="flex flex-row">
        <ButtonLink bgType="/assets/Home.svg" to="Home" />
        <ButtonLink bgType="/assets/About.svg" to="Home" />
        <ButtonLink bgType="/assets/Login.svg" to="Home" />
      </div>
    </div>
  );
};

export default Navbar;
