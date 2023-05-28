import { motion } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className={` bg-[#0D0D0D] cursor-pointer md:flex hidden px-10 py-10 h-[10vh] text-white justify-between flex-row gap-4 items-center`}>
        <div className="z-10 font-bold text-xl">#HASHFLOW</div>
        <ul className="flex gap-4 z-10">
          <li>Home</li>
          <li>Roadmap</li>
          <li>Docs</li>
          <li>Blog</li>
        </ul>
        <button className="bg-[#0F2A40] z-10 text-[#ACACAE] border-gray-600 border text-xl px-4 py-1 rounded-full">
          Login
        </button>
      </nav>
      <nav className={` bg-[#0D0D0D] cursor-pointer md:hidden flex px-10 py-10 h-[10vh] text-white justify-between flex-row gap-4 items-center`}>
        <h1 className="font-bold text-xl z-10">#HASHFLOW</h1>
        <div onClick={toggleNav} className="fixed right-10 top-5 z-[1100]">
          <div className="flex-col flex h-11 relative w-11 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
            <motion.div animate={nav ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }} className="flex flex-col bg-white justify-between h-1 w-7 mb-1 cursor-pointer"></motion.div>
            <motion.div animate={nav ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }} className="flex flex-col bg-white justify-between h-1 w-7 cursor-pointer"></motion.div>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ x: 1000 }}
        animate={nav ? { x: 0 } : { x: 1000 }}
        className="min-w-[60%] md:hidden flex flex-col items-center justify-center min-h-screen fixed z-[1000] bg-white text-red-500 right-0 top-0"
      >
        <ul className="flex gap-4 flex-col text-3xl cursor-pointer">
          <li>Home</li>
          <li>Roadmap</li>
          <li>Docs</li>
          <li>Blog</li>
          <button className="bg-[#0C1618] text-[#ACACAE] border-gray-600 border text-2xl px-6 py-2 mt-4 rounded-full">
            Login
          </button>
        </ul>
      </motion.div>
    </>
  );
};

export default Navigation;
