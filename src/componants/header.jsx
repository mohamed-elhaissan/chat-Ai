import { useContext, useRef, useState } from "react";
import "./style.scss";
import { CiDark } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { darkMode } from "../context/darkModeprovider";
import { MdLightMode } from "react-icons/md";

export default function Header() {
  const [showAPI, setShowAPI] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const darkDiv = useRef();
  const { setIsDarkModeACtvated, isDarkmodeActvated } = useContext(darkMode);

  return (
    <div className={isDarkmodeActvated ? "dark" : "light"}>
      <div
        className="h-full w-full  fixed   left-0 top-0  opacity-0   bg-[#18181A] -z-30"
        style={{
          transition: "all 2s cubic-bezier(0.16, 1, 0.3, 1)",
          top: isDarkmodeActvated ? "0%" : "-100%",
          opacity: isDarkmodeActvated ? "1" : "0",
        }}
        ref={darkDiv}
      ></div>
      <div
        className="top absolute left-0 top-0 bg-black  opacity-50 w-full h-full z-10"
        style={{
          display: showAPI ? "block" : "none",
        }}
      ></div>
      <div className="flex justify-between items-center text-lg px-10 my-1">
        <h1 className="font-bold text-2xl text-black cursor-pointer dark:text-gray-300  ">
          Med-GPT6.7
        </h1>
        <div className="flex items-center shadow-xl dark:bg-[#27272A]  px-3 py-2 rounded-full text-sm  ">
          <input
            type="text"
            className="bg-[#F4F7FE] dark:bg-[#27272A] rounded-full px-4 py-2 outline-none"
            placeholder="Search...."
          />
          <IoIosLock
            className="text-2xl dark:text-[#FAFAFA] ml-4 cursor-pointer"
            onClick={() => {
              setShowAPI(!showAPI);
            }}
          />
          {!isDarkmodeActvated ? (
            <CiDark
              onClick={() => {
                setIsDarkModeACtvated(!isDarkmodeActvated);
              }}
              className="text-2xl mx-2 dark:text-[#FAFAFA] cursor-pointer"
            />
          ) : (
            <MdLightMode
              onClick={() => {
                setIsDarkModeACtvated(!isDarkmodeActvated);
              }}
              className="text-2xl mx-2 dark:text-[#FAFAFA] cursor-pointer"
            />
          )}
          <IoPersonCircleOutline className="text-3xl  dark:text-[#FAFAFA] cursor-pointer" />
        </div>
      </div>
      <div
        className="absolute top-40  z-20 bg-white p-5 left-1/2  -translate-x-1/2 rounded-lg shadow-lg "
        style={{
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          opacity : showAPI ? 1 : 0,
          scale : showAPI ? '1' : '0',
          right : showAPI ? '20%' : '-10%'
        }}
      >
        <span className="flex items-center justify-end">
          <IoCloseOutline
            className="cursor-pointer text-lg hover:bg-red-800 rounded-full hover:text-white"
            onClick={() => {
              setShowAPI(!showAPI);
            }}
          />
        </span>
        <h2 className="text-2xl text-center  mb-5 mt-5 text-[#1B254] font-semibold">
          Enter your OpenAI API Key
        </h2>
        <div>
          <input
            type="text"
            className="bg-[#F4F7FE] rounded-lg mx-2 w-80 focus:outline-black   px-4 py-2 outline-none"
            
            placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          />
          <button
            className="bg-black text-white py-2 px-3 rounded-lg"
            onClick={() => {
              setShowAlert(!showAlert);
              setTimeout(() => {
                setShowAPI(!showAPI);
              }, 400);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
