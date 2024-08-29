import './style.scss';
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
export default function Header() {
 
  return (
    <>
      <div className="flex justify-between items-center text-lg px-10 my-1">
        <h1 className="font-bold text-main cursor-pointer dark:text-white">Med-GPT6.7</h1>
        <div className="flex gap-5 text-2xl items-center justify-center ">
          <span className="cursor-pointer">
            <CiDark className='relative dark:text-white' />
          </span>
          <span className="cursor-pointer">
            <MdOutlineLightMode className='relavtive dark:text-white'/>
          </span>
        </div>
        <div className="parentDiv cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:scale-0 before:bg-black before:w-full before:h-full before:rounded-full relative  w-[60px] h-[60px] rounded-full before:transition-all before:duration-200 before:ease-[cubic-bezier(0.16, 1, 0.3, 1)] hover:before:scale-100 dark:before:bg-white"
       >
          <span className="child block w-10  left-2 absolute top-5 z-20 h-[3px] transition-all duration-100 ease-in mb-1 rounded-full dark:bg-gray-50"></span>
          <span className="child block w-10  absolute left-2 bottom-5  z-20 h-[3px] transition-all duration-100 ease-in mb-1 rounded-full dark:bg-gray-50"></span>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
