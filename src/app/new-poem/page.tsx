"use client";

import newPoemPost from "@/lib/actions/newPoemPost";
import getUserData from "@/lib/getUserData";
import { PoemFormStateType } from "@/types/poem";
import { useActionState, useEffect, useState } from "react";
import { BsMagic } from "react-icons/bs";

const NewPoemPage = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUserData(["email"]);
      setUser(userData?.email ?? "");
    };
    fetchUserData();
  }, []);

  const initialState: PoemFormStateType = {};
  const [{ poem, error }, action, isPending] = useActionState(
    newPoemPost,
    initialState,
  );

  return (
    <main className="w-screen p-4">
      <h1 className="p-5 text-center text-xl font-extrabold">
        We appreciate your creativity - share your poem with the community!
      </h1>
      <form
        action={action}
        className="flex flex-col items-center justify-center gap-4"
      >
        <input type="hidden" name="user" value={user} />
        <textarea
          className="bg-dark dark:bg-light text-light dark:text-dark rounded-xl border-2 p-3 outline-none"
          rows={10}
          name="poem"
          placeholder="Start writing poem..."
          defaultValue={poem}
        ></textarea>
        {error && (
          <span className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold">
            {error}
          </span>
        )}
        <button
          type="submit"
          className="bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center gap-3 rounded-full px-4 py-2 text-lg font-bold duration-300 active:scale-95"
        >
          <BsMagic className={`${isPending && "animate-spin"}`} />
          {isPending ? "We are doing it" : "Post your magic lines"}
          <BsMagic className={`${isPending && "animate-spin"} -scale-x-100`} />
        </button>
      </form>
    </main>
  );
};

export default NewPoemPage;
