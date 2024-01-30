import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";

interface Block {
  type: "";
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
    type: "",
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
          <h2 className="text-5xl font-semibold mb-20 text-white text-center">
            {blockData.name}
          </h2>
        )}
        <div className="flex flex-start flex-cols content-center">
          <div className="flex w-1/2 content-center justify-evenly">
            <ItemContainer type="default">
              <ImageHandler
                imagePath={"/itemphotos/" + blockData.p_eq}
                w="250"
                h="250"
              />
            </ItemContainer>
            {blockData.p_craft && (
              <ItemContainer type="default">
                <ImageHandler
                  imagePath={"/itemphotos/" + blockData.p_craft}
                  w="250"
                  h="250"
                />
              </ItemContainer>
            )}
          </div>
          <div className="flex-1 flex-wrap mr-52">
            <div className="col-span-1 bg p-4 rounded-lg">
              {blockData && (
                <div className="text-white text-xl ml-6 mr-6">
                  {blockData.info}
                </div>
              )}
              {blockData && (
                <div className="mt-16 text-white text-xl flex justify-center">
                  <table>
                    <tbody>
                      <tr>
                        <td>Flammable:</td>
                        <td>{blockData.flamable === 1 ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td>Stackable:</td>
                        <td>{blockData.stackable === 1 ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td>Hardness:</td>
                        <td>{blockData.hardness}</td>
                      </tr>
                      <tr>
                        <td>Blast Resistance:</td>
                        <td>{blockData.blast_res}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockItemPage;
