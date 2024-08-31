import { useState } from 'react';
import './style.scss';
import {CiDark} from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";



export default function Header() {
    const [showAPI,setShowAPI] = useState(false)

    return (
        <>
            <div className='beforeAll absolute left-0 top-0 w-full h-full bg-black none z-10'>

            </div>
            <div className="flex justify-between items-center text-lg px-10 my-1">
                <h1 className="font-bold text-2xl text-black cursor-pointer  ">Med-GPT6.7</h1>
                <div className='flex items-center  px-3 py-2 rounded-full text-sm  ' style={{
                    boxShadow : 'rgba(112, 144, 176, 0.18) 14px 17px 40px 4px'
                }}>
                    <input type="text" className='bg-[#F4F7FE] rounded-full px-4 py-2 outline-none' placeholder='Search....'/>
                    <IoIosLock  className='text-2xl cursor-pointer' onClick={()=>{setShowAPI(!showAPI)}}/>   
                    <CiDark  className='text-2xl mx-2 cursor-pointer'/>
                    <IoPersonCircleOutline  className='text-3xl cursor-pointer'/>
                </div>
            </div>
            <div className='absolute top-[5%] z-20 bg-gray-200 p-5 left-1/2 -translate-x-1/2 rounded-lg'>
                <span className='flex items-center justify-end'>
                <IoCloseOutline className='cursor-pointer text-lg hover:bg-red-800 rounded-full hover:text-white'/>
                </span>
                <h2 className='text-2xl text-center mb-5 text-[#1B254] font-semibold'>Enter your OpenAI API Key</h2>
                <div>
                    <input type="text" className='bg-[#F4F7FE] rounded-lg mx-2   px-4 py-2 outline-none' placeholder='sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'/>
                    <button className='bg-[#4A25E1] text-white py-2 px-3 rounded-lg'>Submit</button>
                </div>
            </div>
        </>
    );
}
