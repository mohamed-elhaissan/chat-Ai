import "../../componants/style.scss";
export default function Loading() {
  return (
    <div className="loading flex absolute left-0 top-0 items-center justify-center bg-black w-full h-full">
        <span className="loading text-white text-2xl">LOADING...</span>
    </div>
  );
}
