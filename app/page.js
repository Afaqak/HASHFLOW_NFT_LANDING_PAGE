'use client';
import { useState } from "react";
import Header from "./Header";
import Volume from "./Volume";
import Trade from "./Trade";
import TradeCross from "./TradeCross";
import SizeisSize from "./SizeisSize";
import Footer from "./Footer";
import font_Grotesk from "@/utils/font";
import Navigation from "./Navigation";

export default function Home() {
  

  return (
    <main className={`relative overflow-x-hidden bg-[#0D0D0D] 
    ${font_Grotesk.className}
    `}>
      
      <Navigation/>
      <Header />
      <Volume />
      <Trade />
      <TradeCross />
      <SizeisSize />
      <Footer />
    </main>
  );
}
