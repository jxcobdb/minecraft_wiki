import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";

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
  name: string;
}

const ToolItemPage = () => {
  const router = useRouter();
  const { id, table } = router.query;

  const [toolData, settoolData] = useState<Tool>({
    type: "",
    attack_speed: 0,
    damage: 0,
    dps: 0,
    durability: 0,
    id_material: 0,
    id: 0,
    id_tool_list: 0,
    id_tool_type: 0,
    info: "",
    mining_speed: 0,
    p_craft: "",
    p_eq: "",
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/get-item-details?id=${id}&table=tool`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log("API Response:", json);
        settoolData(json.data.output[0]);
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
        {toolData && (
          <h2 className="text-5xl font-semibold mb-20 text-white text-center">
            {toolData.name}
          </h2>
        )}
        <div className="flex flex-start flex-cols content-center">
          <div className="flex w-1/2 content-center justify-evenly">
            <ItemContainer type="default">
              <ImageHandler
                imagePath={"/itemphotos/" + toolData.p_eq}
                w="250"
                h="250"
              />
            </ItemContainer>
            {toolData.p_craft && (
              <ItemContainer type="default">
                <ImageHandler
                  imagePath={"/itemphotos/" + toolData.p_craft}
                  w="250"
                  h="250"
                />
              </ItemContainer>
            )}
          </div>
          <div className="flex-1 flex-wrap mr-52">
            <div className="col-span-1 bg p-4 rounded-lg">
              {toolData && (
                <div className="text-white text-xl ml-6 mr-6">
                  {toolData.info}
                </div>
              )}
              {toolData && (
                <div className="mt-16 text-white text-xl flex justify-center">
                  <table>
                    <tbody>
                      <tr>
                        <td>Attack Speed:</td>
                        <td>{toolData.attack_speed}</td>
                      </tr>
                      <tr>
                        <td>Damage:</td>
                        <td>{toolData.damage}</td>
                      </tr>
                      <tr>
                        <td>Dps:</td>
                        <td>{toolData.dps}</td>
                      </tr>
                      <tr>
                        <td>Durabilty:</td>
                        <td>{toolData.durability === 1 ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td>Material:</td>
                        <td>{toolData.id_material}</td>
                      </tr>
                      <tr>
                        <td>Is weapon?</td>
                        <td>{toolData.id_tool_list === 1 ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td>Tool type:</td>
                        <td>{toolData.id_tool_type}</td>
                      </tr>
                      <tr>
                        <td>Mining speed:</td>
                        <td>{toolData.mining_speed}</td>
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

export default ToolItemPage;
