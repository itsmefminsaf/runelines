import { BiError } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <h1 className="flex h-72 w-screen flex-col items-center justify-center gap-5 p-3 text-center text-2xl font-extrabold text-red-500">
      <BiError className="size-10" />
      Sorry, this page isn&apos;t found.
    </h1>
  );
};

export default NotFoundPage;
