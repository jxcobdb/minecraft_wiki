// SortBar.tsx

import React from "react";
import ButtonSort from "@/components/ButtonSort";
import ItemContainer from "./ItemContainer";

interface SortBarProps {
  onButtonClick: (filterKey: string) => void;
}

const SortBar: React.FC<SortBarProps> = ({ onButtonClick }) => {
  return (
    <ul className="flex ml-24 pt-5">
      <li className="flex-1 ml-10">
        <ButtonSort
          onClick={() => onButtonClick("all")}
          bgType="/itemphotos/TNT_Eq.png"
          to="/login"
          w="90"
          h="50"
        />
        <p className="px-3 ext-lg font-semibold text-white text-1xl">
          All items
        </p>
      </li>
      <li className="flex-1">
        <ButtonSort
          onClick={() => onButtonClick("tool")}
          bgType="/itemphotos/Diamond_Pickaxe_Eq.png"
          to="/"
          w="90"
          h="30"
        />
        <p className="px-6 ext-lg font-semibold text-white text-1xl">Tools</p>
      </li>

      <li className="flex-1">
        <ButtonSort
          onClick={() => onButtonClick("block")}
          bgType="/itemphotos/Grass_Block_Eq.png"
          to="/about"
          w="90"
          h="50"
        />
        <p className="px-6 ext-lg font-semibold text-white text-1xl">Block</p>
      </li>
      <li className="flex-1">
        <ButtonSort
          onClick={() => onButtonClick("armor")}
          bgType="/itemphotos/Diamond_Chestplate_Eq.png"
          to="/login"
          w="90"
          h="50"
        />
        <p className="px-5 ext-lg font-semibold text-white text-1xl">Armor</p>
      </li>
      <li className="flex-1">
        <ButtonSort
          onClick={() => onButtonClick("food")}
          bgType="/itemphotos/Steak_Eq.png"
          to="/login"
          w="90"
          h="50"
        />
        <p className="px-6 ext-lg font-semibold text-white text-1xl">Food</p>
      </li>
      <li className="flex-1 content-center">
        <ButtonSort
          onClick={() => onButtonClick("other")}
          bgType="/itemphotos/Painting_Eq.png"
          to="/login"
          w="90"
          h="50"
        />
        <p className="px-6 ext-lg font-semibold text-white text-1xl">Other</p>
      </li>
    </ul>
  );
};

export default SortBar;
