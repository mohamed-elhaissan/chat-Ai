import chat from '../assets/chat.svg'
import './style.scss'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
export default function SectionBot() {
    const newDate = new Date();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
  return (
    <div>
      <div className="chat flex flex-col justify-start gap-2 items-start mx-52">
        <div className="gptchat">
            <div className='flex items-center mt-12 justify-center gap-2 border-solid border-gray-100 border-2'>
                <img  src={`${chat}`} alt=""/>
                <div className='gptrespone bg-white p-3 rounded-lg flex gap-2'>
                    <p>Hello! I’m your personal AI Assistant Med-gpt.</p>
                    <span className='flex items-center text-[12px] text-gray-500'>
                        <p>{`${hour}:${minutes}`}</p>
                        <IoCheckmarkDoneOutline className='text-[15px] text-green-400'/>
                    </span>
                </div>
            </div>
        </div>
        <div className='persongpt'>

        </div>
      </div>
    </div>
  );
}
