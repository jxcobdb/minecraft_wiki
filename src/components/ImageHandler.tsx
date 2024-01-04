import React from "react";
import Image from "next/image";

interface Props {
  imagePath: string;
}

const ImageHandler: React.FC<Props> = ({ imagePath }) => {
  return (
    <Image src={imagePath} alt="image" width={100} height={100} sizes="100vw" />
  );
};

export default ImageHandler;
