import React, { Children } from "react";
import Link from "next/link";
import ImageHandler from "./ImageHandler";

interface Props {
  to: string;
  bgType: string;
  w: string;
  h: string;
}

const ButtonLink: React.FC<Props> = ({ to, bgType, w, h }) => {
  return (
    <button className="shadow-xl transition-transform transform hover:scale-105">
      <Link href={to}>
        <ImageHandler imagePath={bgType} w={w} h={h} />
      </Link>
    </button>
  );
};

export default ButtonLink;
