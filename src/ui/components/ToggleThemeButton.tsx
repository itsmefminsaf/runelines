import toggleTheme from "@/lib/ui/toggleTheme";
import React from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ToggleThemeButton = () => {
  return (
    <button onClick={toggleTheme}>
      <CiLight className="hidden size-8 stroke-2 dark:block" />
      <CiDark className="block size-8 stroke-2 dark:hidden" />
    </button>
  );
};

export default ToggleThemeButton;
