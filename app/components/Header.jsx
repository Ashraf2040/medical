"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modals from "./Modals";
export default function Header() {
  const [lang, setLang] = useState("English");
  return (
    <div className=" shadow-sm flex gap-2 relative flex-col  pb-4  items-center bg-gray-50">
      <div className="flex items-center justify-center w-full ">
       <Link href="/" className="w-[50%] ">
        
         <Image
          src="/Logo1.png"
          height={200}
          width={400}
          alt="logo"
          className=" mt-2 mb-2 w-full h-16"
        /></Link>
        {/* <Image src="/diaf.png" alt="diaf" width={180} height={180} /> */}
      </div>
      <h1 className=" leading-5 my-1   font-semibold">
        AI Health Assistant for  Guests of Allah{" "}
      </h1>
      <div>

        <div className="flex items-center justify-center gap-3  h-10 mt-1">
          <p className="py-2 rounded-md font-semibold  px-3 bg-[#dbeefd] text-[#02B1BF]">{lang}</p>
          <div><Modals setLang={setLang} /></div>  
        
        </div>
      {/* <select

        
        className="bg-gray-300 font-semibold p-2 rounded-md  mr-2 mt-4  "<
        
      >
        <option value="en" className="flex  items-center  ">
          
          English 
        </option>
        <option value="ar" className=""> Arabic</option>
        <option value="ur" className=" "> Urdu</option>
        <option value="fr" className=""> French</option>
        <option value="tu" className=" "> Turkish</option>
        <option value="de" className=" "> Deutsch</option>
      </select> */}
      </div>
      {/* <div className=" flex absolute left-8 items-center gap-2 mt-3 ">
        <button className="bg-[#E6EFEA] rounded-lg py-2  px-3 text-green-800 font-semibold">
          En
        </button>
        <button className="bg-[#E6EFEA] rounded-lg py-2 px-3 text-green-800 font-semibold">
          Ar
        </button>
      </div> */}
    </div>
  );
}
