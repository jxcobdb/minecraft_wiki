import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

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

interface Armor {}

interface Food {}

interface Other {}

interface Tool {}

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
      <table className="table-fixed">
        <tbody>
          {data.block.map((item) => (
            <tr key={item.id_block}>
              <td className="border p-4" key={item.id_block}>
                <Link href={"/block/" + item.id_block}>{item.p_eq}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
