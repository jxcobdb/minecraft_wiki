import React, { Children } from "react";
import Destinations from "../destinations";
import Link from "next/link";
import ImageHandler from "./ImageHandler";

interface Props {
  to: keyof typeof Destinations;
  bgType: string;
  w: string;
  h: string;
}

const ButtonLink: React.FC<Props> = ({ to, bgType, w, h }) => {
  return (
    <button>
      <Link href={to}>
        <ImageHandler imagePath={bgType} w={w} h={h} />
      </Link>
    </button>
  );
};

export default ButtonLink;
