import { FadeLoader } from "react-spinners";

function Loading() {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-40 flex justify-center items-center bg-white">
      <FadeLoader color="#e87e1d" size={20} />
    </div>
  );
}

export default Loading;
