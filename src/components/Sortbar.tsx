import React from "react";
import ButtonLink from "./ButtonLink";
import ImageHandler from "./ImageHandler";

interface Props {
  children: React.ReactNode;
}

const SortBar = () => {
  return (
    <div>
      <ul className="flex ml-24">
        <li className="flex-1 ml-10">
          <ButtonLink
            bgType="/itemphotos/TNT_Eq.png"
            to="/login"
            w="90"
            h="50"
          />
        </li>
        <li className="flex-1">
          <ButtonLink
            bgType="/itemphotos/Diamond_Pickaxe_Eq.png"
            to="/"
            w="90"
            h="30"
          />
        </li>
        <li className="flex-1">
          <ButtonLink
            bgType="/itemphotos/Grass_Block_Eq.png"
            to="/about"
            w="90"
            h="50"
          />
        </li>
        <li className="flex-1">
          <ButtonLink
            bgType="/itemphotos/Diamond_Chestplate_Eq.png"
            to="/login"
            w="90"
            h="50"
          />
        </li>
        <li className="flex-1">
          <ButtonLink
            bgType="/itemphotos/Steak_Eq.png"
            to="/login"
            w="90"
            h="50"
          />
        </li>
        <li className="flex-1">
          <ButtonLink
            bgType="/itemphotos/Painting_Eq.png"
            to="/login"
            w="90"
            h="50"
          />
        </li>
      </ul>
    </div>
  );
};

export default SortBar;
