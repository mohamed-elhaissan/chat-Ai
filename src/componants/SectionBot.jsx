import { useContext } from "react";
import chat from "../assets/chat.svg";
import { ContextAPI } from "../context/contextProvider";
import { FaUserAlt } from "react-icons/fa";
import "./style.scss";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
export default function SectionBot() {
  const newDate = new Date();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const { iaAnswers, humanQuestion } = useContext(ContextAPI);
  return (
    <div>
        {iaAnswers.map((respone, index) => (
      <div className="chat flex flex-col justify-start gap-2 items-start mx-52" key={index}>
          <div className="persongpt self-end" >
          <div className="flex items-center flex-row-reverse justify-center gap-2 border-solid border-gray-100 border-2">
            <FaUserAlt className="bg-gray-500 rounded-full p-2 text-4xl " />
            <div className="gptrespone bg-[#4F46E5] p-3 rounded-lg text-gray-200 flex gap-2">
              <p>{humanQuestion[index]}</p>
              <span className="flex items-center text-[12px] text-gray-500">
                <p>{`${hour}:${minutes}`}</p>
                <IoCheckmarkDoneOutline className="text-[15px] text-green-400" />
              </span>
            </div>
          </div>
        </div>
          <div className="gptchat self-start" >
            <div className="flex items-center mt-12 justify-center gap-2 border-solid border-gray-100 border-2">
              <img src={`${chat}`} alt="" />
              <div className="gptrespone bg-white p-3 rounded-lg flex gap-2">
                <p>{respone}</p>
                <span className="flex items-center text-[12px] text-gray-500">
                  <p>{`${hour}:${minutes}`}</p>
                  <IoCheckmarkDoneOutline className="text-[15px] text-green-400" />
                </span>
              </div>
            </div>
          </div>
      </div>
        ))}
        
    </div>
  );
}
