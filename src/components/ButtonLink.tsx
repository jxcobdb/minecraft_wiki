import React, { Children } from "react";
import Destinations from "../destinations";
import Link from "next/link";
import ImageHandler from "./ImageHandler";

interface Props {
  to: keyof typeof Destinations;
  bgType: string;
}

const ButtonLink: React.FC<Props> = ({ to, bgType }) => {
  return (
    <button>
      <Link href={to}>
        <ImageHandler imagePath={bgType} />
      </Link>
    </button>
  );
};

export default ButtonLink;
