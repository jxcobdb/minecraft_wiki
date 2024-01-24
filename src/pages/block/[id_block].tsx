import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";


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
  const {id_item, table } = router.query;

  console.log('ID Item:', id_item);
  console.log('Table:', table);



  const getCom = async () => {
    const response = await fetch("/api/get-data");
    const json = await response.json();
    setData(json.data);
    console.log(json);
  };

  React.useEffect(() => {
    getCom();
  }, []);


  return (
    <div>
      <Navbar />
      <h1>Block Item Page</h1>
      <p>ID Item: {id_item}</p>
      <p>Table: {table}</p>
    </div>
  );
};

export default BlockItemPage;
