import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { CiDark } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap-trial";

export default function Header() {
  const [showAPI, setShowAPI] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [darkModeActvate, setDarkModeActvate] = useState(false);
  const inputFocus = useRef();
  const apifield = useRef();
  const darkDiv = useRef();
  useEffect(() => {
    if (darkModeActvate) {
      gsap.to(darkDiv.current, {
        y: "0%",
        duration: 0.5, // Set a smooth animation duration (adjust as needed)
        ease: "power3.inOut",
        borderRadius: "0%",
      });
    } else {
      gsap.to(darkDiv.current, {
        y: "-100%",
        duration: 0.5, // Set a smooth animation duration (adjust as needed)
        ease: "power3.inOut",
        borderRadius: "0% 0% 50% 50%",
      });
    }
  }, [darkModeActvate]);
  useEffect(() => {
    inputFocus.current.focus();
    gsap.set(apifield.current, {
      opacity: 0,
      scale: 0,
    });
    if (showAPI) {
      gsap.to(apifield.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back",
      });
    } else {
      gsap.to(apifield.current, {
        opacity: 0,
        y: -100,
        duration: 0.5,
        scale: 0,
        ease: "back",
      });
    }
  }, [showAPI]);
  return (
    <div className="dark">
      <div
        className="h-full absolute left-0 top-0 w-full bg-[#131314] -z-30"
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
        <div className="flex items-center shadow-xl dark:bg-[#2E2A36]  px-3 py-2 rounded-full text-sm  ">
          <input
            type="text"
            className="bg-[#F4F7FE] rounded-full px-4 py-2 outline-none"
            placeholder="Search...."
          />
          <IoIosLock
            className="text-2xl text-blue-600 ml-4 cursor-pointer"
            onClick={() => {
              setShowAPI(!showAPI);
            }}
          />
          <CiDark
            onClick={() => {
              setDarkModeActvate(!darkModeActvate);
            }}
            className="text-2xl mx-2 dark:text-blue-600 cursor-pointer"
          />
          <IoPersonCircleOutline className="text-3xl  dark:text-blue-600 cursor-pointer" />
        </div>
      </div>
      <div
        className="absolute top-40  z-20 bg-white p-5 left-1/2 -translate-x-1/2 rounded-lg shadow-lg -translate-y-1/2"
        ref={apifield}
      >
        <span className="flex items-center justify-end">
          <IoCloseOutline
            className="cursor-pointer text-lg hover:bg-red-800 rounded-full hover:text-white"
            onClick={() => {
              setShowAPI(!showAPI);
            }}
          />
        </span>
        <h2 className="text-2xl text-center mb-5 mt-5 text-[#1B254] font-semibold">
          Enter your OpenAI API Key
        </h2>
        <div>
          <input
            ref={inputFocus}
            type="text"
            className="bg-[#F4F7FE] rounded-lg mx-2 w-80 focus:outline-green-500   px-4 py-2 outline-none"
            style={{
              border: showAlert ? "1px solid red" : "none",
            }}
            placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          />
          <button
            className="bg-[#48BB78] text-white py-2 px-3 rounded-lg"
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
