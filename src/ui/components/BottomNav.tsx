import getUserData from "@/lib/getUserData";
import Link from "next/link";
import { BiBook, BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const BottomNav = async () => {
  const user = await getUserData(["name"]);
  if (!user) return null;

  return (
    <nav className="bg-dark dark:bg-light text-light dark:text-dark fixed bottom-0">
      <ul className="flex h-16 w-screen items-center justify-evenly">
        <Link href="/" className="nav-items">
          <BiHome className="size-6" />
          Home
        </Link>
        <Link href="/collections" className="nav-items">
          <BiBook className="size-6" />
          Collection
        </Link>
        <Link
          href="/settings"
          className="nav-items bg-dark dark:bg-light border-light dark:border-dark relative bottom-4 rounded-full border-4 p-3"
        >
          <FaPlus className="size-8 stroke-2" />
        </Link>
        <Link href="/people" className="nav-items">
          <IoPeople className="size-6" />
          People
        </Link>
        <Link href="/profile" className="nav-items">
          <CgProfile className="size-6" />
          Profile
        </Link>
      </ul>
    </nav>
  );
};

export default BottomNav;
