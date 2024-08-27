import './main.css'
import profile from '../assets/profile.svg'
export default function Header(){
    return(
       <>
        <div className='flex justify-between items-center text-lg px-10 my-2'>
            <h1 className='font-bold text-main cursor-pointer'>
                Med-GPT6.7
            </h1>
            <div className='flex gap-5 text-2xl items-center justify-center '>
                <span className='cursor-pointer'>
                <ion-icon name="moon-outline"></ion-icon>
                </span>
                <span>
                <ion-icon name="sunny-outline"></ion-icon>
                </span>
            </div>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
        </>
    )
}