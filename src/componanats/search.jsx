export default function Search() {
  return (
    <div className="serach flex justify-between ps-0 fixed bottom-[10%] pe-10 p-2 left-1/2 transform -translate-x-1/2 rounded-full shadow-[0px_10px_30px_rgba(0,0,0,0.1)] w-[50%]">
      <input type="text" placeholder="Search..." className="border-none outline-none cursor-pointer font-jakarta  ml-4 pl-10 "/>
      <button className="font-jakarta py-2 px-20 bg-gray-600 text-white rounded-full">Search</button>
    </div>
  );
}
