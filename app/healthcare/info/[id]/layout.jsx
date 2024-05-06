
import { Inter } from "next/font/google";



import Footer from "../../../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Assistant",
  description: "A.I Assistant for the Guests of Allah",
};

export default function RootLayout({children}) {
  return (
    <html  lang="en" className=" p-0 bg-white min-h-screen relative">
      <body className={`${inter.className} flex flex-col h-screen`}>
        
        <div>{children}</div>

       
      </body>
    </html>
  );
}
