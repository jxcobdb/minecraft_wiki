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

const ButtonSort: React.FC<Props> = ({ onClick, bgType, w, h }) => {
  return (
    <button
      onClick={onClick}
      className="transition-transform transform hover:scale-105 pb-3">
      <ImageHandler imagePath={bgType} w={w} h={h} />
    </button>
  );
};

export default ButtonSort;
