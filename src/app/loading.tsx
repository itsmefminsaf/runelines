import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex aspect-square w-screen items-center justify-center">
      <AiOutlineLoading className="animate-spin" />
    </div>
  );
};

export default Loading;
