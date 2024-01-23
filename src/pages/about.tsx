import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import ItemContainer from "../components/ItemContainer";

interface Data {
  block: Block[];
  armor: Armor[];
}

interface Block {
  key: number;
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

const AboutPage = () => {
  const [data, setData] = React.useState<Data>({
    armor: [],
    block: [],
  });
  const getData = async () => {
    const response = await fetch("/api/get-data?type=block");
    const json = await response.json();
    setData(json.data);
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.block.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
