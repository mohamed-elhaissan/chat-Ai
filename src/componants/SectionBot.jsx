import { useContext } from "react";
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
  const { iaAnswer } = useContext(ContextAPI);
  
  return (
    <div>
      {iaAnswer.length === 0 ? (
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
          className="chat flex flex-col justify-start  gap-2 pb-40 items-start mt-20 mx-52"
        >
          {iaAnswer.map((item, index) => (
            <div key={index} className={index % 2 == 0 ? 'self-end' : 'self-start'}>
              <div  >
                  <div className="flex items-center    justify-center gap-2 border-solid" style={{
                    flexDirection : index % 2 == 0 ? 'row-reverse' : 'row'
                  }}>
                    {
                      index % 2 !== 0  ? (
                        <img src={`${chat}`} alt="" />
                      ) : (

                        <FaUserAlt className="bg-gray-500 rounded-full p-2 text-4xl" />
                      )
                    }
                    <div className="gptrespone bg-[#4F46E5] p-3 rounded-lg text-gray-200 flex gap-2">
                      <p>{item}</p>
                      <p>{index}</p>
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
