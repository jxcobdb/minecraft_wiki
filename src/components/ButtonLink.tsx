import React from "react";
import Destinations from "../destinations";
import Link from "next/link";

interface Props {
  to: keyof typeof Destinations;
  children: string;
}

const ButtonLink: React.FC<Props> = ({ to, children }) => {
  return (
    <Link
      className="duration-250 flex h-14 w-auto items-center justify-center bg-dark-900 px-8 py-4 text-base font-semibold leading-snug text-white transition ease-in-out hover:bg-dark-200 hover:text-custom-black focus:outline-none"
      href={to}>
      {children}
    </Link>
  );
};

export default ButtonLink;
