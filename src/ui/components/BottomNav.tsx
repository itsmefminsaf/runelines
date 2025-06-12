import getSession from "@/lib/getSession";
import Link from "next/link";
import { BiBook, BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const BottomNav = async () => {
  const verifiedUser = await getSession();
  if (!verifiedUser) return null;

  return (
    <nav className="bg-accent text-background fixed bottom-0">
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
          className="nav-items bg-accent border-background relative bottom-4 rounded-full border-4 p-3"
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
