import getPoem from "@/lib/actions/getPoem";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import getUserData from "@/lib/actions/getUserData";

const Poem = async ({ poemId }: { poemId: string }) => {
  const poem = await getPoem(poemId);
  const date = poem.createdAt.toLocaleDateString();
  const time = poem.createdAt.toLocaleTimeString();

  const user = await getUserData(["name", "profile", "uname"], poem.user);

  return (
    <main className="p-5">
      <Link
        href={`/people/${poem.user}`}
        className="mb-3 grid grid-cols-[3rem_1fr] grid-rows-2"
      >
        <div className="row-span-2 size-12">
          {user?.profile ? (
            <Image
              src={user?.profile}
              alt={user.name + "'s profile"}
              width={48}
              height={48}
              className="rounded-full"
            />
          ) : (
            <BiUser />
          )}
        </div>
        <h2 className="pl-3 text-lg font-bold">{user?.name}</h2>
        <h4 className="pl-4 text-xs">{user?.uname}</h4>
      </Link>
      <p className="bg-dark dark:bg-light text-light dark:text-dark rounded-2xl border-2 p-3">
        {poem.poem}
      </p>
      <div className="flex w-full justify-end gap-3 p-2 text-xs">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </main>
  );
};

export default Poem;
