import { useState } from "react";
import "./main.css";
import profile from "../assets/profile.svg";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center text-lg px-10 my-2">
        <h1 className="font-bold text-main cursor-pointer">Med-GPT6.7</h1>
        <div className="flex gap-5 text-2xl items-center justify-center ">
          <span className="cursor-pointer">
            <ion-icon name="moon-outline"></ion-icon>
          </span>
          <span className="cursor-pointer">
            <ion-icon name="sunny-outline"></ion-icon>
          </span>
        </div>
        <div className="flex flex-row-reverse items-center gap-5">
          <img src={profile} alt="" className="cursor-pointer" />
          <div
            className="togle-menu flex gap-1 flex-col cursor-pointer relative duration-200 ease-[cubic-bezier(0.16, 1, 0.3, 1)] transition-all"
            onClick={() => {
              setShow(!show);
            }}
          >
            <span
              className="block w-10 h-1 rounded-lg bg-main"
              style={{
                width: show ? "10px" : "40px",
              }}
            ></span>
            <span
              className="block w-10 h-1 rounded-lg bg-main duration-200 ease-[cubic-bezier(0.16, 1, 0.3, 1)] transition-all"
              style={{
                width: show ? "30px" : "40px",
              }}
            ></span>
            <span
              className="block w-10 h-1 rounded-lg bg-main duration-200 ease-[cubic-bezier(0.16, 1, 0.3, 1)] transition-all"
              style={{
                width: show ? "10px" : "40px",
              }}
            ></span>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
