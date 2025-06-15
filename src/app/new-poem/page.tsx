"use client";

import { BsMagic } from "react-icons/bs";

const NewPoemPage = () => {
  return (
    <main className="w-screen p-4">
      <h1 className="p-5 text-center text-xl font-extrabold">
        We appreciate your creativity - share your poem with the community!
      </h1>
      <form className="flex flex-col items-center justify-center gap-4">
        <textarea
          className="bg-dark dark:bg-light text-light dark:text-dark rounded-xl border-2 p-3 outline-none"
          rows={10}
          name="poem"
          placeholder="Start writing poem..."
        ></textarea>
        <button
          type="submit"
          className="bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center gap-3 rounded-full px-4 py-2 text-lg font-bold duration-300 active:scale-95"
        >
          <BsMagic />
          Post your magic lines
          <BsMagic />
        </button>
      </form>
    </main>
  );
};

export default NewPoemPage;
