import "./navbarCss.css";
function Hero() {
  return (
    <div className="my-20">
      <div className="top flex justify-center gap-1 cursor-pointer">
        <div className="left flex py-4 px-6  font-jakarta font-bold">
          <h2>GPT-3.5</h2>
        </div>
        <div className="right flex justify-center py-4 px-6  font-jakarta font-bold opacity-50 ">
          <h2>GPT-4</h2>
        </div>
      </div>
      <div className="selections mt-3 p-2 font-jakarta ">
        <select className="mx-auto py-1 px-5">
          <option value="">No option Enabled</option>
          <option value="" disabled className="p-2 ">
            programming
          </option>
        </select>
      </div>
    </div>
  );
}
export default Hero;
