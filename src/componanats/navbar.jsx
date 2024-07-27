import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Img from "../assesstes/img.svg";
import { FaMoon } from "react-icons/fa";
import "./navbarCss.css";

export default function Main() {
  return (
    <header className="container my-5">
      <div className="container flex items-center justify-around   ">
        <h1 className="font-bold uppercase text-2xl font-inter">Chat Ui</h1>
        <div className="father flex gap-5 items-center bg-white px-4 py-2 rounded-full">
          <IoIosNotificationsOutline className="icon text-3xl cursor-pointer text-slate-700" />
          <IoSettingsOutline className="icon text-2xl cursor-pointer text-slate-700" />
          <FaMoon className="icon text-2xl cursor-pointer text-slate-700" />

          <img src={Img} alt="" className="rounded-full " />
        </div>
      </div>
    </header>
  );
}
