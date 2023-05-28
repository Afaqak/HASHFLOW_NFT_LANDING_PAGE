import React from "react";
import ShinyBox from "./shinyBox";
import font_Grotesk from "@/utils/font";
import Image from "next/image";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div
      className={`bg-[#0D0D0D] min-h-[80vh] py-24 px-10 relative flex items-center justify-center ${font_Grotesk.className}`}
    >

      <img
        src="/map.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
      />
      <div className="z-20  relative px-10">
        <div className="flex items-center justify-center gap-4">
        <motion.div 
          initial={{x: -1000}}
          animate={{x: 0}}
        className="md:absolute relative  md:bottom-10 lg:bottom-20 md:right-24 

        ">
          <ShinyBox
            gradient1="#CC733C"
            gradient2="#CC6950"
            location="/avalanche.svg"
          />
        </motion.div>
        <motion.div
          initial={{x: 1000}}
          animate={{x: 0}}
        className="md:absolute relative md:bottom-0 md:right-0 transform md:scale-75">
        <ShinyBox
          gradient1="#3260C6"
          gradient2="#535BB1"
          location="/arbitrium.svg"
        />
        </motion.div>
        <motion.div 
          initial={{y: -1000}}
          animate={{y: 0}}
        className="md:absolute relative md:-top-[10%] md:right-16">
        <ShinyBox
          gradient1="#3260C6"
          gradient2="#535BB1"
          location="/etherum.svg"
        />
        </motion.div>
        <motion.div
          initial={{y: -1000}}
          animate={{y: 0}}
        className="md:absolute relative  md:left-24  transform md:scale-75">
        <ShinyBox
          gradient1="#F4BA2F"
          gradient2="#CC733C"
          location="/cube.svg"
        />
        </motion.div>
        <motion.div
          initial={{x: -1000}}
          animate={{x: 0}}
        className="md:absolute relative md:top-[50%] md:left-0 lg:left-16">
        <ShinyBox
          gradient1="#CC733C"
          gradient2="#CC6950"
          location="/optimism.svg"
        />
        </motion.div>
        <motion.div
          initial={{x: -1000}}
          animate={{x: 0}}
        className="md:absolute relative md:bottom-0 md:left-44 transform md:-rotate-45">
            <ShinyBox gradient1="#535BB1" gradient2="white" location="/S.svg" />
          </motion.div>
        </div>
        <h1 className="text-5xl mt-4 lg:text-8xl text-white font-bold text-center ">
          <span className=" bg-gradient-to-tr from-[#CC733C] to-[#CC6950] bg-clip-text text-transparent">
            The
          </span>{" "}
          <span className=" bg-gradient-to-r from-[#CC5F6B] to-[#9A589A] bg-clip-text text-transparent">
            Future
          </span>{" "}
          <span className=" bg-gradient-to-r from-[#535BB1] to-[#3260C6] bg-clip-text text-transparent">
            Of
          </span>{" "}
          <span className=" bg-gradient-to-r from-[#1A6EC7] to-[#10A196] bg-clip-text text-transparent">
            Trading
          </span>
        </h1>
        <p className="text-[#CCCCCC] text-center text-5xl md:text-8xl pt-4 md:pt-6">Begins Here</p>
        <span className="text-[#ACACAE] block text-xl pt-10  text-center">
          Trade any asset on any chain in seconds.No deposits.No bs.
        </span>
        <div className="flex relative items-center justify-center pt-10 gap-4">
          
          <button className="bg-[#0F2A40] text-[#ACACAE] border-gray-600 border lg:text-xl px-6 py-4 rounded-full">
            Get Started
          </button>
          <button className="text-[#0F2A40] bg-[#ACACAE] border-[#0F2A40] border lg:text-xl px-6 py-4 rounded-full">
            launch app
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <button className="bg-[#0F2A40] text-[#ACACAE] border-gray-600 border text-xl px-6 py-4 rounded-full 
relative after:content-[' '] after:absolute after:inset-0 after:rounded-full after:opacity-50  after:filter after:blur-[20px] after:transform after:scale-150 after:transition-all after:duration-500 after:delay-500
after:bg-gradient-to-r after:from-[#535BB1] after:to-[#3260C6] after:w-[100%] after:h-[110%]
">
launch app
</button> */
}
