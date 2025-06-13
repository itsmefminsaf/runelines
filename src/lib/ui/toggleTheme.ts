"use server";

import { cookies } from "next/headers";

const toggleTheme = async () => {
  const currentTheme = (await cookies()).get("theme")?.value;
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  (await cookies()).set("theme", newTheme);
};
export default toggleTheme;
