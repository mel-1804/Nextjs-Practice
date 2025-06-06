"use client";
import React from "react";
// import style from "@/app/home.module.css";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Home = () => {
  const [estado, setEstado] = useState(false);
  return (
    <>
      <div className={`${poppins.className} antialiased`}>Página Home</div>
      <div>
        <Image src="/pinguinos.jpg" width={500} height={500} />
      </div>
    </>
  );
};

export default Home;
