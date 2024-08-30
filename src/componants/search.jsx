import "./style.scss";
import {IoIosMic} from "react-icons/io";
import {IoHappyOutline} from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { useContext, useRef } from "react";
import { ContextAPI } from "../context/contextProvider";


export default function Search() {
    const {setInputfield,genrateAnswer} = useContext(ContextAPI)
    const input = useRef(null);
    const handleinput = () => {
        genrateAnswer()
        input.current.value = ''
    }
   
    return (
        <>
            <div
                className="searchBox fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between w-1/2 rounded-lg  bg-white px-5 py-2  ">
                <input ref={input} onChange={(e)=>setInputfield(e.target.value)} 
                    type="text"
                    className="w-full bg-transparent outline-none border-none "
                    placeholder="Message to Med-Gpt..."
                />
                <div className="w-1/4 flex items-center justify-center gap-1">
                    <IoIosMic className='rounded-full  text-3xl cursor-pointer  ' />
                    <IoHappyOutline className='rounded-full  text-3xl cursor-pointer '/>
                    <button className="flex items-center gap-1 bg-primary text-white text-sm py-3 px-5 rounded-lg ]  hover:opacity-85" onClick={handleinput}>
                        Send <IoMdSend/>
                    </button>
                </div>
            </div>
        </>
    );
}
