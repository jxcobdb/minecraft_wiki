import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";
import ComContainer from "@/components/ComConteiner";

interface Data {
  block: Block[];
  armor: Armor[];
  food: Food[];
  other: Other[];
  tool: Tool[];
  com: Com[];
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

interface Com {
  id_com: number;
  id_godfather: number;
  id_father: number;
  login: string;
  value: string;
}

const MainPage = () => {
  const [data, setData] = React.useState<Data>({
    armor: [],
    block: [],
    food: [],
    other: [],
    tool: [],
    com: [],
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
      <div className="flex items-center justify-center py-15">
        <div className="pt-14 px-10 pb-14 grid grid-center grid-cols-5 grid-flow-cols gap-8">
          {data.block.map((item) => (
            <div key={item.id_block}>
              <ItemContainer>
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
              <ItemContainer>
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
              <ItemContainer>
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
              <ItemContainer>
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
              <ItemContainer>
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
        {data.com.map((item) => (
          <div key={item.id_com}>
            <ComContainer login={item.login} value={item.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
