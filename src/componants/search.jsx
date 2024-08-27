export default function Search(){
    return (
        <>
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-between w-1/2 rounded-lg bg-white px-5 py-2">
                <input type="text" className="w-full bg-transparent outline-none border-none" placeholder="Message to Med-Gpt..."/>
                <div className="w-1/4 flex items-center justify-center gap-1">
                <ion-icon name="happy-outline" ></ion-icon>
                <ion-icon name="mic-outline"></ion-icon>
                <button className="flex items-center gap-1 bg-primary text-white text-sm py-3 px-5 rounded-lg">Send<ion-icon name="send-outline" ></ion-icon></button>
                </div>
            </div>
        </>
    );
}   