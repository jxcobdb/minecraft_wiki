import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import ImageHandler from "@/components/ImageHandler";
import ItemContainer from "@/components/ItemContainer";

interface Other {
  type: string;
  id: number;
  info: string;
  name_other: string;
  p_craft: string;
  p_eq: string;
  stackable: number;
}

const OtherItemPage = () => {
  const router = useRouter();
  const { id, table } = router.query;

  const [otherData, setotherData] = useState<Other>({
    type: "",
    id: 0,
    info: "",
    name_other: "",
    p_craft: "",
    p_eq: "",
    stackable: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/get-item-details?id=${id}&table=other`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log("API Response:", json);
        setotherData(json.data.output[0]);
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
        {otherData && (
          <h2 className="text-5xl font-semibold mb-20 text-white text-center">
            {otherData.name_other}
          </h2>
        )}
        <div className="flex flex-start flex-cols content-center">
          <div className="flex w-1/2 content-center justify-evenly">
            <ItemContainer type="default">
              <ImageHandler
                imagePath={"/itemphotos/" + otherData.p_eq}
                w="250"
                h="250"
              />
            </ItemContainer>
            {otherData.p_craft && (
              <ItemContainer type="default">
                <ImageHandler
                  imagePath={"/itemphotos/" + otherData.p_craft}
                  w="250"
                  h="250"
                />
              </ItemContainer>
            )}
          </div>
          <div className="flex-1 flex-wrap mr-52">
            <div className="col-span-1 bg p-4 rounded-lg">
              {otherData && (
                <div className="text-white text-xl ml-6 mr-6">
                  {otherData.info}
                </div>
              )}
              {otherData && (
                <div className="mt-16 text-white text-xl flex justify-center">
                  <table>
                    <tbody>
                      <tr>
                        <td>Stackable:</td>
                        <td>{otherData.stackable === 1 ? "Yes" : "No"}</td>
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

export default OtherItemPage;

/*                      <tr>
                        <td>Stackable:</td>
                        <td>{otherData.stackable === 1 ? "Yes" : "No"}</td>
                      </tr>
                      */
