import Navbar from "@/components/Navbar";
import Linia from "@/components/Linia";
import React from "react";
import Link from "next/link";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";
import SortBar from "@/components/SortBar";


interface Data {
  block: Block[];
  armor: Armor[];
  food: Food[];
  other: Other[];
  tool: Tool[];
}

interface Block {
  name: string;
  blast_res: number;
  flamable: number;
  hardness: number;
  id_block: number;
  id_world: number;
  info: string;
  p_craft: null;
  p_eq: string;
  stackable: number;
}

interface Armor {
  def: number;
  durabilisty: number;
  id_armor: number;
  id_armor_list: number;
  id_material: number;
  info: string;
  p_craft: string;
  p_eq: string;
}

interface Food {
  heal: number;
  id_food: number;
  info: string;
  name_food: string;
  p_craft: string;
  p_eq: string;
}

interface Other {
  id_other: number;
  info: string;
  name_other: string;
  p_craft: string;
  p_eq: string;
  stackable: number;
}

interface Tool {
  attack_speed: number;
  damage: number;
  dps: number;
  durability: number;
  id_material: number;
  id_tool: number;
  id_tool_list: number;
  id_tool_type: number;
  info: string;
  mining_speed: number;
  p_craft: string;
  p_eq: string;
}

const MainPage = () => {
  const [data, setData] = React.useState<Data>({
    armor: [],
    block: [],
    food: [],
    other: [],
    tool: [],
  });

  const getData = async () => {
    const response = await fetch("/api/get-data");
    const json = await response.json();
    setData(json.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log(data);
  console.log(data.block);
  return (
    <div>
      <Navbar />
      <Linia />
      <SortBar />
      

      <div className="flex items-center justify-center py-15 z-10">
        <div className="pt-14 px-10 pb-14 grid grid-center grid-cols-5 grid-flow-cols gap-8 pt-0">
          {data.block.map((item) => (
            <div key={item.id_block}>
              <ItemContainer type="animated">
                <Link
                  href={"/block/" + item.id_block}
                  className="object-contain h-fit">
                  <ImageHandler
                    imagePath={"/itemphotos/" + item.p_eq}
                    w="100"
                    h="100"
                    />
                </Link>
              </ItemContainer>
              
            </div>

))}
          {data.armor.map((item) => (
            <div key={item.id_armor}>
              <ItemContainer type="animated">
                <Link
                  href={"/armor/" + item.id_armor}
                  className="object-contain h-fit">
                  <ImageHandler
                    imagePath={"/itemphotos/" + item.p_eq}
                    w="100"
                    h="100"
                    />
                </Link>
              </ItemContainer>
            </div>
          ))}
          {data.food.map((item) => (
            <div key={item.id_food}>
              <ItemContainer type="animated">
                <Link
                  href={"/food/" + item.id_food}
                  className="object-contain h-fit">
                  <ImageHandler
                    imagePath={"/itemphotos/" + item.p_eq}
                    w="100"
                    h="100"
                    />
                </Link>
              </ItemContainer>
            </div>
          ))}
          {data.other.map((item) => (
            <div key={item.id_other}>
              <ItemContainer type="animated">
                <Link
                  href={"/other/" + item.id_other}
                  className="object-contain h-fit">
                  <ImageHandler
                    imagePath={"/itemphotos/" + item.p_eq}
                    w="100"
                    h="100"
                    />
                </Link>
              </ItemContainer>
            </div>
          ))}
          {data.tool.map((item) => (
            <div key={item.id_tool}>
              <ItemContainer type="animated">
                <Link
                  href={"/tool/" + item.id_tool}
                  className="object-contain h-fit">
                  <ImageHandler
                    imagePath={"/itemphotos/" + item.p_eq}
                    w="100"
                    h="100"
                    />
                </Link>
              </ItemContainer>
            </div>
          ))}
        </div>
      </div>

    </div>
    
  );
};

export default MainPage;
