import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Linia from "@/components/Linia";
import SortBar from "@/components/Sortbar";
import Link from "next/link";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";

interface Data {
  block: Block[];
  armor: Armor[];
  food: Food[];
  other: Other[];
  tool: Tool[];
}

interface Block {
  type: string;
  name: string;
  blast_res: number;
  flamable: number;
  hardness: number;
  id: number;
  id_world: number;
  info: string;
  p_craft: null;
  p_eq: string;
  stackable: number;
}

interface Armor {
  type: string;
  def: number;
  durability: number;
  id: number;
  id_armor_list: number;
  id_material: number;
  info: string;
  p_craft: string;
  p_eq: string;
}

interface Food {
  type: string;
  heal: number;
  id: number;
  info: string;
  name_food: string;
  p_craft: string;
  p_eq: string;
}

interface Other {
  type: string;
  id: number;
  info: string;
  name_other: string;
  p_craft: string;
  p_eq: string;
  stackable: number;
}

interface Tool {
  type: string;
  attack_speed: number;
  damage: number;
  dps: number;
  durability: number;
  id_material: number;
  id: number;
  id_tool_list: number;
  id_tool_type: number;
  info: string;
  mining_speed: number;
  p_craft: string;
  p_eq: string;
}

const MainPage = () => {
  const [data, setData] = useState<Data>({
    armor: [],
    block: [],
    food: [],
    other: [],
    tool: [],
  });

  const [filterKey, setFilterKey] = useState<string>("all");

  const getData = async () => {
    const response = await fetch("/api/get-data");
    const json = await response.json();
    console.log(json);
    setData(json.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItems = (items: any[], idKey: string) => {
    return items.map((item) => (
      <div key={item.id}>
        <ItemContainer type="animated">
          <Link
            href={`/${item.type}/${item.id}`}
            className="object-contain h-fit">
            <ImageHandler
              imagePath={`/itemphotos/${item.p_eq}`}
              w="100"
              h="100"
            />
          </Link>
        </ItemContainer>
      </div>
    ));
  };

  const getCategoryData = () => {
    switch (filterKey) {
      case "block":
        return data.block;
      case "armor":
        return data.armor;
      case "food":
        return data.food;
      case "other":
        return data.other;
      case "tool":
        return data.tool;
      case "all":
        return [
          ...data.block,
          ...data.armor,
          ...data.food,
          ...data.other,
          ...data.tool,
        ];
      default:
        return [];
    }
  };

  return (
    <div>
      <Navbar />
      <Linia />
      <SortBar />

      <div className="flex items-center justify-center py-15 z-10">
        <div className="pt-14 px-10 pb-14 grid grid-center grid-cols-5 grid-flow-cols gap-8 pt-0">
          {renderItems(getCategoryData(), filterKey)}
        </div>
      </div>

      {/* <div>
        <button onClick={() => setFilterKey("all")}>Show All</button>
      </div> */}
    </div>
  );
};

export default MainPage;
