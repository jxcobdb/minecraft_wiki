import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

const BlockItemPage = () => {
  const router = useRouter();
  const { id_block } = router.query;

  return (
    <div>
      <Navbar />
      <h1>Block Item Page</h1>
      <p>ID: {id_block}</p>
    </div>
  );
};

export default BlockItemPage;
