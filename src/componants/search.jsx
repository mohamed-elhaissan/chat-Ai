import "./style.scss";
import { IoMdSend } from "react-icons/io";
import { useContext, useRef, useState } from "react";
import { ContextAPI } from "../context/contextProvider";
import em1 from '../assets/em1.svg'
import em2 from '../assets/em2.svg'
import em3 from '../assets/em3.svg'

export default function Search() {
    const [handleinputValue,setHandleInputValue] = useState(true)
    const {genrateAnswer,setInputValue} = useContext(ContextAPI)
    const input = useRef(null);
    const handleinput = () => {
        genrateAnswer()
        input.current.value = ''
    }
   
    return (
        <>
            <div
                className="searchBox fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between w-1/2 rounded-lg  bg-white px-5 py-2  ">
                <img src={em3} className="mr-2" alt=""/>
                <input ref={input} onChange={(e)=>{
                    const inputValue = e.target.value
                    if (inputValue.length != 0 ) {
                        setHandleInputValue(false);
                        setInputValue(inputValue)
                    }else {
                        setHandleInputValue(true)
                    }
                    
                }}
                    type="text"
                    className="w-full bg-transparent outline-none border-none "
                    placeholder="Message to Med-Gpt..."
                />
                <div className="w-1/4 flex items-center justify-center gap-1">
                <img src={em1} alt="" className="rounded-full  w-1/5 cursor-pointer"/>
                <img src={em2} alt="" className="rounded-full  w-1/5 cursor-pointer"/>
                    <button disabled={handleinputValue} className="flex cursor-pointer  mr-2 items-center ml-2 gap-1 bg-black text-white text-sm py-3 px-5 rounded-lg ]  hover:opacity-85" onClick={handleinput}>
                        Send <IoMdSend className="text-2xl"/>
                    </button>
                </div>
            </div>
        </>
    );
}
