
import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicon.css";
import Header from "./components/Header";
import Footers from "./components/Footer";
import Footer from "./components/Footer";
import { AccordionDemo } from "./components/AccordionDemo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Assistant",
  description: "A.I Assistant for the Guests of Allah",
};

export default function RootLayout({children}) {
  return (
    <html  lang="en" className="m-0 p-0 bg-white min-h-screen relative">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <div>
          <Header />
        </div>
        <div>{children}</div>

        <div className="  bottom-0 w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
