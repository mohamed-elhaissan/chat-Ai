import { useContext, useEffect, useRef } from "react";
import chat from "../assets/chat.svg";
import { ContextAPI } from "../context/contextProvider";
import { FaUserAlt } from "react-icons/fa";
import gsap from "gsap";
import "./style.scss";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import under from '../assets/under.svg'
export default function SectionBot() {
  const newDate = new Date();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const lastmessage = useRef(null);
  const { iaAnswers, humanQuestion } = useContext(ContextAPI);

  gsap.set(lastmessage.current, { x: -100, opacity: 0, ease: "back" });
  useEffect(() => {
    if (lastmessage.current) {
      gsap.to(lastmessage.current, {
        x: 100,
        duration: 0.5,
      });
    } else {
      console.log("notdoneuet");
    }
  }, [iaAnswers]);
  return (
    <div>
      {iaAnswers.length === 0 ? (
        <div className="welocome text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-bold ">Ask Med-GPT AI Anything</h2>
          <img src={`${under}`} alt="" className="relative left-1/2 -translate-x-1/2 -mt-4"/>
          <p>Trusted by Millions of Users & Fortune 500 Companies</p>
        </div>
      ) : (
        iaAnswers.map((response, index) => (
          <div
            className="chat flex flex-col justify-start gap-2 items-start mx-52"
            key={response.id} // Use a unique identifier as the key
          >
            <div className="persongpt self-end">
              <div className="flex items-center flex-row-reverse justify-center gap-2 border-solid border-gray-100 border-2">
                <FaUserAlt className="bg-gray-500 rounded-full p-2 text-4xl" />
                <div className="gptrespone bg-[#4F46E5] p-3 rounded-lg text-gray-200 flex gap-2">
                  <p>{humanQuestion[index]}</p>
                  <span className="flex items-center text-[12px] text-white">
                    <p>{`${hour}:${minutes}`}</p>
                    <IoCheckmarkDoneOutline className="text-[15px] text-green-400" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="gptchat self-start"
              ref={lastmessage} // Set the ref for all messages
            >
              <div className="flex items-center mt-12 justify-center gap-2 border-solid border-gray-100 border-2">
                <img src={`${chat}`} alt="" />
                <div className="gptrespone bg-white p-3 rounded-lg flex gap-2">
                  <p>{response}</p>
                  <span className="flex items-center text-[12px] text-gray-500">
                    <p>{`${hour}:${minutes}`}</p>
                    <IoCheckmarkDoneOutline className="text-[15px] text-green-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
