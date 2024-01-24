import React from "react";
import ImageHandler from "./ImageHandler";

const Linia = () => {
  return (
    <div
      className="flex sticky top-0 justify-center items-center"
      style={{
        zIndex: 1,
        backgroundImage: "url(/assets/Idk%20co%20to.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "55%",
        backgroundPosition: "center",
        marginTop: "90px",
      }}>
      <div className="flex sticky top-0 z-0 justify-center items-center mt-10">
        <ImageHandler imagePath="/assets/Content.svg" w="450" h="120" />
      </div>
    </div>
  );
};

export default Linia;
