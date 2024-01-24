import React, { Children } from "react";
import Link from "next/link";
import ImageHandler from "./ImageHandler";

interface Props {
  to: string;
  bgType: string;
  w: string;
  h: string;
  onClick: () => void;
}

const ButtonLink: React.FC<Props> = ({ onClick, bgType, w, h }) => {
  return (
    <button
      onClick={onClick}
      className="shadow-xl transition-transform transform hover:scale-105">
      <ImageHandler imagePath={bgType} w={w} h={h} />
    </button>
  );
};

export default ButtonLink;
