import { useContext, useEffect, useRef } from "react";
import chat from "../assets/chat.svg";
import { ContextAPI } from "../context/contextProvider";
import { FaUserAlt } from "react-icons/fa";
import gsap from "gsap-trial";
import { darkMode } from "../context/darkModeprovider";
import "./style.scss";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import under from "../assets/under.svg";
export default function SectionBot() {
  const newDate = new Date();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  const { iaAnswer } = useContext(ContextAPI);
  const animateLastItem = useRef();

  const { isDarkmodeActvated } = useContext(darkMode);
  useEffect(() => {
    if (animateLastItem) {
      gsap.fromTo(
        animateLastItem.current,
        {
          y: "80%",
          opacity: 0,
          ease: "power1.in",
        },
        {
          y: 0,
          opacity: 1,
          ease: "power.in",
        }
      );
    }
  }, [iaAnswer.length]);
  return (
    <div className={isDarkmodeActvated ? "dark" : "light"}>
      {iaAnswer.length === 0 ? (
        <div className="welocome text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-bold dark:text-gray-200">
            Ask Med-GPT AI Anything
          </h2>
          <img
            src={`${under}`}
            alt=""
            className="relative left-1/2 -translate-x-1/2 -mt-4"
          />
          <p className="dark:text-gray-200">
            Trusted by Millions of Users & Fortune 500 Companies
          </p>
        </div>
      ) : (
        <div className="chat flex flex-col justify-start  gap-2 pb-40 items-start mt-20 mx-52">
          {iaAnswer.map((item, index) => (
            <div
              key={index}
              className={index % 2 == 0 ? "self-end" : "self-start"}
              ref={index == iaAnswer.length - 1 ? animateLastItem : null}
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
