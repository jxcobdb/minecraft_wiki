import React from "react";
import Image from "next/image";

interface Props {
  imagePath: string;
  h: string;
  w: string;
}

const ImageHandler: React.FC<Props> = ({ imagePath, h, w }) => {
  return (
    <img className="object-contain" src={imagePath} width={w} height={h}></img>
  );
};

export default ImageHandler;
