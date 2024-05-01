"use client";

import { Message, experimental_useAssistant as useAssistant } from "ai/react";
import { useEffect, useRef, useState } from "react";
import styles from "./loader.module.css";
 import Accordion from "./_Accordion/Accordion";
import Link from "next/link";
import QuestionCard from "./QuestionCard";
import Image from "next/image";

export default function HomePage() {
  const { status, messages, submitMessage,input, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });

  const askedQuestions1 = [
    "ماهي مناسك الحج؟",
    "ماهي مناسك العمرة؟",
    "ماهو ميقات اهل المدينة؟",
    "ماهي شروط حج التمتع ؟",
    "كيفية لبس الاحرام ؟",
    "مالفرق بين التحلل الاكبر والاصغر؟",
  ];
  const askedQuestions2 = [
    "ماهي مناسك الحج1؟",
    "ماهي مناسك العمرة1؟",
    "ماهو ميقات اهل المدينة1؟",
    "ماهي شروط حج التمتع1 ؟",
    "كيفية لبس الاحرام1 ؟",
    "مالفرق بين التحلل الاكبر والاصغر1؟",
  ];
  const newArray = askedQuestions1.concat(askedQuestions2);

  const [merged, setMerged] = useState(true);
  const [enabled, setEnabled] = useState(false);

  const [questionArray, setQuestionArray] = useState(askedQuestions1);

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
   
  }, [status]);


  const handleSerchClick = () => {
    setEnabled(!enabled);
  };
  const handleClick = () => {
    if (merged) {
      setQuestionArray(newArray);
    } else {
      setQuestionArray(askedQuestions1);
    }
    setMerged(!merged);
  };



  return (
    <div className=" flex flex-col w-full   items-center  mt-2  ">
      <div className="navigate flex items-center flex-wrap justify-center gap-6 my-6 px-2 w-full sm:text-sm  ">
        {/* <button
          className="bg-gradient-to-br px-4 rounded-lg font-semibold text-white py-2 from-[#366a3d] to-green-400 sm:text-sm"
          onClick={handleSerchClick}
        >
          Ask Ai
        </button> */}
        <Link href="/medical" className="">
          <button className=" bg-[#dbeefd] px-2 rounded-lg  text-[14px] text-[#00afbf] py-1">
          Nearby Medicals 
          </button>
        </Link>
        <Link href="/healthcare">
          <button className="bg-[#dbeefd] px-2 rounded-lg  text-[14px] text-[#00afbf] py-1 ">
          Healthcare Education
          </button>
        </Link>
      </div>

      <div className="  w-[90%]   flex flex-col  ">
        <div className=" ">
          {messages.map((m) => (
            <div key={m.id} className=" py-8 bg-gray-100 rounded-lg  relative ">
              <>
                <div className="flex gap-2 items-center  mb-10      ">
                  <span className="text-3xl flex ">
                    {m.role === "user" && (
                      <div className="absolute right-10  sm:right-0 flex items-center h-fit mb-4 ">
                        <span
                          className="bg-[#CDE4D6]  rounded-l-lg rounded-tr-xl
                         text-[18px] font-semibold px-8 py-0.5"
                        >
                          {m.content}
                        </span>
                        🤵
                      </div>
                    )}
                  </span>
                </div>
                <div>
                  <div className="flex items-center  justify-start mt-16   w-fit sm:mt-8  pl-4 ">
                    <div className="flex items-center w-fit relative ">
                      {status === "in_progress" ? (
                        <Image
                          src="/Ai.png"
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10"
                        />
                      ) : (
                        ""
                      )}
                      {status === "in_progress" ? (
                        <span
                          className={`${styles.loader} absolute left-3 bottom-0`}
                        ></span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {m.role === "assistant" && (
                    <p
                      style={{ direction: "rtl" }}
                      className="whitespace-pre-wrap ml-8 w-4/5 bg-white self-center  p-10"
                    >
                      {m.content}
                    </p>
                  )}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={submitMessage}
        className=" items-center justify-center   w-[90%]  flex ">
        <input
          ref={inputRef}
          disabled={status !== "awaiting_message"}
          className="  p-2 ring-1 ring-gray-200  outline-none focus:ring-[#00afbf]   bg-white  rounded-[10px]  w-5/6 relative"
          value={input}
          placeholder="Type your question..."
          onChange={handleInputChange}
          
        />
        <button className="absolute right-14">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="w-6  h-8 text-[#00afbf] ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

</button>
        {/* <button className="p-4 bg-black rounded-r-lg -ml-2 font-bold text-white px-4 ">
          Ask
        </button> */}
      </form>
      <h2 className="text-md text-[#00afbf] font-semibold my-6">Few examples to ask</h2>
      {/* <div className="FAQ w-4/5   grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {questionArray.map((question) => (
          <input key={question} value={question}  className="bg-white cursor-pointer"  disabled/>
        ))}
      </div>
      <div className=" 0 w-4/5 flex justify-center items-center py-4 ">
        <button
          className="flex  gap-1 w-fit  font-semibold  text-green-900"
          onClick={handleClick}
        >
          {!merged ? "Less examples" : "More examples"}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6  h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </div> */}
  <div className="  mt-2 w-full  "> <Accordion /></div>   

      {/* <div className=" p-12  min-h-40 w-full flex flex-col  ">
          <div>
            {messages.map((m: Message) => (
              <div key={m.id} className=" py-8 bg-gray-100 rounded-lg ">
                <>
                  <div className="flex gap-2 items-center justify-center mb-10    ">
                    <span className="text-3xl flex items-ceter">
                      {m.role === "user" && (
                        <div className="absolute right-20">
                          <span
                            className="bg-[#CDE4D6] mr-4 rounded-l-lg rounded-tr-xl
                         text-[20px] font-semibold px-8 py-2"
                          >
                            {m.content}
                            
                          </span>
                          🤵
                        </div>
                      )}
                    </span>
                  </div>
                  <div>
                    <div>{status === "in_progress" ?"Thinking 😶‍🌫️":""}</div>
                    {m.role === "assistant" && (
                      <p className="whitespace-pre-wrap ml-8 w-4/5 bg-white self-center  p-10">

                        {m.content}
                      </p>
                    )}
                  </div>
                </>
              </div>
            ))}
          </div>
        </div> */}
    </div>
  );
}

//  {/* {error != null && (
//         <div className="relative bg-red-500 text-white px-6 py-4 rounded-md">
//           <span className="block sm:inline">
//             Error: {(error as any).toString()}
//           </span>
//         </div>
//       )} */}

/* {messages.map((m: Message) => (
          // <div
          //   key={m.id}
          //   className="whitespace-pre-wrap flex flex-col px-40 flex-right"
          //   // style={{ color: roleToColorMap[m.role] }}
          // >
          //   {" "}
          
          //     {" "}
          //     <div className="bg-blue-600">
          //       {`${m.role}: `} {m.role !== "data" && m.content}
          //     </div>
         
          //   {m.role === "data" && (
          //     <div className="">
          //       {(m.data as any).description}
          //       <br />
          //       <pre className={"bg-gray-200"}>
          //         {JSON.stringify(m.data, null, 2)}
          //       </pre>
          //     </div>
          //   )}
          //   <br />
          //   <br />
          // </div>
        ))} */

// {/* {status === "in_progress" && (
//   <div className="h-8 w-full  p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
// )} */}
