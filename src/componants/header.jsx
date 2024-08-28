import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center text-lg px-10 my-5">
        <h1 className="font-bold text-main cursor-pointer">Med-GPT6.7</h1>
        <div className="flex gap-5 text-2xl items-center justify-center ">
          <span className="cursor-pointer">
            <CiDark />
          </span>
          <span className="cursor-pointer">
            <MdOutlineLightMode />
          </span>
        </div>
        <div className="cursor-pointer relative ">
          <span
            className="block absolute -top-[100%] -left-[20%] rounded-full bg-black w-[60px] z-10 h-[60px]"
          ></span>
          <span className="block w-10 bg-white relative z-20 h-[3px] transition-all duration-100 ease-in mb-1 rounded-full"></span>
          <span className="block w-10 bg-white relative z-20 h-[3px] transition-all duration-100 ease-in mb-1 rounded-full"></span>
          <span className="block w-10 bg-white relative z-20 h-[3px] transition-all duration-100 ease-in mb-1 rounded-full"></span>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
