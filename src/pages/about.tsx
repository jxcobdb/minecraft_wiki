import Navbar from "@/components/Navbar";
import React from "react";
import ImageHandler from "@/components/ImageHandler";
import Profile from "@/components/Profile";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pb-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 flex justify-center items-center mt-1">
            <ImageHandler imagePath="/assets/SteveHorse.svg" w="450" h="120" />
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <ImageHandler
              imagePath="/assets/WelcomeToWiki.svg"
              w="600"
              h="120"
            />
          </div>

          <div className="col-span-1 flex justify-center items-center mt-12">
            <ImageHandler
              imagePath="/assets/SteveAlexPig.svg"
              w="450"
              h="120"
            />
          </div>
        </div>

        <div className="flex-1 mt-2 flex-wrap">
          <h2 className="text-lg font-semibold mb-5 text-white text-center text-4xl">
            Projekt
          </h2>
          <p className="text-white ml-16 mr-12 text-xl text-center">
            Witaj na naszej stronie! Generalnie ta firma to przyszłość Poslkiego
            frontendu, a Minecraft Wiki od dzisiaj będzie tak wyglądać także się
            przyzwyczajajcie
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex justify-center items-center ml-12">
            <h2 className="text-lg font-semibold  text-white pt-24 text-4xl mb-10">
              Zespół pracujący nad projektem:
            </h2>
            <p className="text-white"></p>
          </div>
        </div>
        <Profile />

        <div className="col-span-1 flex justify-center items-center ml-12 mt-10">
          <div
            className="col-span-1 bg p-4 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/assets/Background.svg")',
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}>
            <h2 className="text-lg font-semibold mb-5 text-white text-center text-4xl">
              Kontakt
            </h2>

            <p className="text-white">
              Email: 30@wp.pp <br />
              Gadu-Gadu: 302381 <br />
              Skype: majkraft@skype.pl <br />
              Gołump: Wruc21553 <br />
              Instagram: @Majkraft <br />
              Discord: Majkraft#2137
              <br />
              Adres: Wroc, love69 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
