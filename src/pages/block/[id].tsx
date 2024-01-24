import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";

interface Block {
  blast_res: number;
  flamable: number;
  hardness: number;
  id: number;
  id_world: number;
  info: string;
  name: string;
  p_craft: null;
  p_eq: string;
  stackable: number;
}

interface Com {
  id_com: number;
  id_godfather: number;
  id_father: number;
  id_item: number;
  login: string;
  value: string;
}

interface Data {
  com: Com[];
}

const BlockItemPage = () => {
  const router = useRouter();
  const { id, table } = router.query;

  // console.log('ID Item:', id_item);
  // console.log('Table:', table);

  // const getCom = async () => {
  //   const response = await fetch("/api/get-data");
  //   const json = await response.json();
  //   setData(json.data);
  //   console.log(json);
  // };

  // React.useEffect(() => {
  //   getCom();
  // }, []);

  const [blockData, setBlockData] = useState<Block>({
    blast_res: 0,
    flamable: 0,
    hardness: 0,
    id: 0,
    id_world: 0,
    info: "",
    name: "",
    p_craft: null,
    p_eq: "",
    stackable: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/get-item-details?id=${id}&table=block`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log("API Response:", json);
        setBlockData(json.data.output[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="py-10 justify-center content-center text-center">
        {blockData && (
          <h2 className="text-5xl font-semibold mb-5 text-white text-center text-4xl">
            {blockData.name}
          </h2>
        )}
        <div className="flex flex-start flex-cols content-center">
          <div className="flex w-1/2 content-center justify-evenly">
            <ItemContainer>
              {blockData && (
                <ImageHandler
                  imagePath={"/itemphotos/" + blockData.p_eq}
                  w="150"
                  h="150"
                />
              )}
            </ItemContainer>
          </div>
          <div className="flex w-1/2">
            {blockData && (
              <div className="text-white ml-16 mr-12 text-xl">
                {blockData.info}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockItemPage;
