import Navbar from "@/components/Navbar";
import React from "react";
import ImageHandler from "@/components/ImageHandler";

const LoginPage = () => {
  return(
  <div>
  <Navbar />

  <div className="grid grid-cols-3 gap-4">
    
    <div className="col-span-1 flex justify-center items-center mt-1">
      <ImageHandler imagePath="/assets/SteveHorse.svg" w="450" h="120" />
    </div>

    <div className="col-span-1 flex justify-center items-center">
      
    </div>

    <div className="col-span-1 flex justify-center items-center mt-12">
      <ImageHandler imagePath="/assets/SteveAlexPig.svg" w="450" h="120" />
    </div>
  </div>
  </div>
  );
};

export default LoginPage;
