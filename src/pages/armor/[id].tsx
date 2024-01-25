import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";

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

const ArmorItemPage = () => {
  const router = useRouter();
  const { id, table } = router.query;

  const [armorData, setArmorData] = useState<Armor>({
    type: "",
    def: 0,
    durability: 0,
    id: 0,
    id_armor_list: 0,
    id_material: 0,
    info: "",
    p_craft:"",
    p_eq: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/get-item-details?id=${id}&table=armor`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log("API Response:", json);
        setArmorData(json.data.output[0]);
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
        {armorData && (
          <h2 className="text-5xl font-semibold mb-20 text-white text-center">
            {armorData.id_material} {armorData.id_armor_list}
          </h2>
        )}
        <div className="flex flex-start flex-cols content-center">
          <div className="flex w-1/2 content-center justify-evenly">
            <ItemContainer type="default">
              <ImageHandler
                imagePath={"/itemphotos/" + armorData.p_eq}
                w="250"
                h="250"
              />
            </ItemContainer>
            {armorData.p_craft && (
  <ItemContainer type="default">
    <ImageHandler
      imagePath={"/itemphotos/" + armorData.p_craft}
      w="250"
      h="250"
    />
  </ItemContainer>
)}
          </div>
          <div className="flex-1 flex-wrap mr-52">
            <div
              className="col-span-1 bg p-4 rounded-lg"
              >
              {armorData && (
                <div className="text-white text-xl ml-6 mr-6">{armorData.info}</div>
              )}
              {armorData && (
                <div className="mt-16 text-white text-xl flex justify-center">
                  <table>
                    <tbody>
                      <tr>
                        <td>Durability:</td>
                        <td>{armorData.durability}</td>
                      </tr>
                      <tr>
                        <td>Def:</td>
                        <td>{armorData.def}</td>
                      </tr>
                      <tr>
                        <td>Type:</td>
                        <td>{armorData.type}</td>
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

export default ArmorItemPage;


/*                      <tr>
                        <td>Stackable:</td>
                        <td>{armorData.stackable === 1 ? "Yes" : "No"}</td>
                      </tr>
                      */