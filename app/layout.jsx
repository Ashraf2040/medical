"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicon.css";
import Header from "./components/Header";
import Footers from "./components/Footer";
import Footer from "./components/Footer";
import { AccordionDemo } from "./components/AccordionDemo";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({children}) {
  const pathName = usePathname();
  return (
    <html  lang="en" className="m-0 p-0 bg-white min-h-screen relative">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <div className={`${pathName.includes("info") ? "hidden" : "block"}`}>
          <Header />
        </div>
        <div>{children}</div>

     <div><Footer /></div>
          
       
      </body>
    </html>
  );
}
