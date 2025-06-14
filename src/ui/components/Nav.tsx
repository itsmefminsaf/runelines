import Logo from "@/ui/components/Logo";
import ToggleThemeButton from "./ToggleThemeButton";

const Nav = () => {
  return (
    <nav className="border-b-dark dark:border-b-light flex items-center justify-center gap-10 border-b-4 p-3">
      <Logo />
      <hr className="bg-dark dark:bg-light h-5 w-0.5 rounded-full" />
      <ToggleThemeButton />
    </nav>
  );
};

export default Nav;
