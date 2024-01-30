import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";

interface Food {
  type: string;
  heal: number;
  id: number;
  info: string;
  name_food: string;
  p_craft: string;
  p_eq: string;
}

const FoodItemPage = () => {
  const router = useRouter();
  const { id, table } = router.query;

  const [foodData, setfoodData] = useState<Food>({
    type: "",
    heal: 0,
    id: 0,
    info: "",
    name_food: "",
    p_craft: "",
    p_eq: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/get-item-details?id=${id}&table=food`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log("API Response:", json);
        setfoodData(json.data.output[0]);
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
        {foodData && (
          <h2 className="text-5xl font-semibold mb-20 text-white text-center">
            {foodData.name_food}
          </h2>
        )}
        <div className="flex flex-start flex-cols content-center">
          <div className="flex w-1/2 content-center justify-evenly">
            <ItemContainer type="default">
              <ImageHandler
                imagePath={"/itemphotos/" + foodData.p_eq}
                w="250"
                h="250"
              />
            </ItemContainer>
            {foodData.p_craft && (
              <ItemContainer type="default">
                <ImageHandler
                  imagePath={"/itemphotos/" + foodData.p_craft}
                  w="250"
                  h="250"
                />
              </ItemContainer>
            )}
          </div>
          <div className="flex-1 flex-wrap mr-52">
            <div className="col-span-1 bg p-4 rounded-lg">
              {foodData && (
                <div className="text-white text-xl ml-6 mr-6">
                  {foodData.info}
                </div>
              )}
              {foodData && (
                <div className="mt-16 text-white text-xl flex justify-center">
                  <table>
                    <tbody>
                      <tr>
                        <td>Heal: </td>
                        <td>{foodData.heal}</td>
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

export default FoodItemPage;

/*                      <tr>
                        <td>Stackable:</td>
                        <td>{foodData.stackable === 1 ? "Yes" : "No"}</td>
                      </tr>
                      */
