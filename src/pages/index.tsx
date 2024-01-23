import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import ImageHandler from "@/components/ImageHandler";

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
    console.log(json);
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log(data.block);

  return (
    <div>
      <Navbar />
      <div className="py-6 px-6 content-center justify-center grid grid-cols-5 gap-10">
        {data.block.map((item) => (
          <div key={item.id_block}>
            <div
              className="flex items-center justify-center"
              style={{
                backgroundImage: "url(/assets/GridSlot.svg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                justifyContent: "center",
                padding: "10px",
                borderRadius: "10px",
                width: "300px",
                height: "200px",
              }}>
              <Link
                href={"/block/" + item.id_block}
                className="object-contain h-fit">
                <ImageHandler
                  imagePath={"/itemphotos/" + item.p_eq}
                  w="100"
                  h="100"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <table className="flex grid">
        <tbody>
          {data.block.map((item) => (
            <tr key={item.id_block}>
              <td className="border p-4" key={item.id_block}>
                <Link href={"/block/" + item.id_block}>{item.p_eq}</Link>
              </td>
            </tr>
          ))}
          {data.armor.map((item) => (
            <tr key={item.id_armor}>
              <td className="border p-4" key={item.id_armor}>
                <Link href={"/armor/" + item.id_armor}>{item.p_eq}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default MainPage;
