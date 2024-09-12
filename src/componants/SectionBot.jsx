import { useContext, useEffect, useRef } from "react";
import chat from "../assets/chat.svg";
import { ContextAPI } from "../context/contextProvider";
import { FaUserAlt } from "react-icons/fa";
import { darkMode } from "../context/darkModeprovider";
import "./style.scss";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import gsap from "gsap-trial";
import under from "../assets/under.svg";
export default function SectionBot() {
  const newDate = new Date();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const { iaAnswer } = useContext(ContextAPI);
  const messageRef = useRef();
  useEffect(() => {
    if (messageRef) {
      gsap.to(messageRef.current,{
        y : 0,
        opacity : 1,
      })
    }
  }, [iaAnswer]);

  const { isDarkmodeActvated } = useContext(darkMode);
  return (
    <div className={isDarkmodeActvated ? "dark" : "light"}>
      {iaAnswer.length === 0 ? (
        <div className="welocome text-center absolute left-1/2 top-1/2 -translate-x-1/2 sm:w-full -translate-y-1/2">
          <h2 className="text-5xl font-bold sm:w-full dark:text-gray-200">
            Ask Med-GPT AI Anything
          </h2>
          <img
            src={`${under}`}
            alt=""
            className="relative left-1/2 -translate-x-1/2 -mt-4"
          />
          <p className="dark:text-gray-200 sm:text-sm">
            Trusted by Millions of Users & Fortune 500 Companies
          </p>
        </div>
      ) : (
        <div className="chat flex flex-col justify-start sm:w-full xl:px-52  gap-2 pb-40 items-start mt-20 lg:px-5">
          {iaAnswer.map((item, index) => (
            <div
              key={index}
              className={index % 2 == 0 ? "self-end   relative translate-y-4 opacity-0 " : "self-start  relative translate-y-4 opacity-0 "}
              style={{
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              ref={index == iaAnswer.length - 1 ? messageRef : null}
            >
              <div>
                <div
                  className="flex items-center    justify-center gap-2 border-solid"
                  style={{
                    flexDirection: index % 2 == 0 ? "row-reverse" : "row",
                  }}
                >
                  {index % 2 !== 0 ? (
                    <img src={`${chat}`} alt="" />
                  ) : (
                    <FaUserAlt className="bg-gray-500 rounded-full p-2 text-4xl" />
                  )}
                  <div
                    className="gptrespone bg-[#4F46E5] p-3 rounded-lg text-gray-200 flex gap-2"
                    style={{
                      background: index % 2 == 0 ? "#4F46E5" : "#fff",
                      color: index % 2 == 0 ? "#fff" : "#000",
                    }}
                  >
                    <p>{item}</p>
                    <span className="flex items-center text-[12px] text-white">
                      <p>{`${hour}:${minutes}`}</p>
                      <IoCheckmarkDoneOutline className="text-[15px] text-green-400" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
