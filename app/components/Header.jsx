import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className=" shadow-lg flex relative flex-col  pb-4  items-center bg-gray-100">
      <div className="flex items-center justify-center   ">
       <Link href="/"> <Image
          src="/logo.png"
          height={300}
          width={300}
          alt="logo"
          className="max-h-28 max-w-28"
        /></Link>
        <Image src="/diaf.png" alt="diaf" width={180} height={180} />
      </div>
      <h1 className=" leading-5 text-xl  font-semibold">
        A.I Assistant for the Guests of Allah{" "}
      </h1>
      <div>
      <select
        
        className="bg-gray-300 font-semibold p-2 rounded-md  mr-2 mt-4  "
        
      >
        <option value="en" className="flex  items-center  ">
          
          English 
        </option>
        <option value="ar" className=""> Arabic</option>
        <option value="ur" className=" "> Urdu</option>
        <option value="fr" className=""> French</option>
        <option value="tu" className=" "> Turkish</option>
        <option value="de" className=" "> Deutsch</option>
      </select>
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
