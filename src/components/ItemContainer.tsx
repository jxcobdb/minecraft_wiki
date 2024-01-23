// MyComponent.tsx

import React, { useEffect, useState } from "react";
// import { getData, connect, pool } from "../features/db_controller";

interface MyComponentProps {}

interface DataItem {
  id_armor: number;
  id_material: number;
  id_armor_list: number;
  durability: number;
  def: number;
  p_eq: string;
  p_craft: string;
  info: string;
}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [data, setData] = useState<DataItem[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await connect();

  //     try {
  //       const result = await getData();
  //       if (result && result.recordset) {
  //         setData(result.recordset);
  //       } else {
  //         console.error("Empty or undefined recordset in the result");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       await pool.close();
  //     }
  //   };

  //   fetchData();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id_armor}>{item.info}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
