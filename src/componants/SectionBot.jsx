import { useContext, useRef } from "react";
import chat from "../assets/chat.svg";
import { ContextAPI } from "../context/contextProvider";
import { FaUserAlt } from "react-icons/fa";
import "./style.scss";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import under from "../assets/under.svg";
export default function SectionBot() {
  const newDate = new Date();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const lastmessage = useRef(null);
  const { answerDisplay } = useContext(ContextAPI);
  return (
    <div>
      {answerDisplay.length === 0 ? (
        <div className="welocome text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-bold ">Ask Med-GPT AI Anything</h2>
          <img
            src={`${under}`}
            alt=""
            className="relative left-1/2 -translate-x-1/2 -mt-4"
          />
          <p>Trusted by Millions of Users & Fortune 500 Companies</p>
        </div>
      ) : (
        <div
          className="chat flex flex-col justify-start gap-2 pb-40 items-start mt-20 mx-52"
          // Use a unique identifier as the key
        >
          {
            
          }
        </div>
      )}
    </div>
  );
}
