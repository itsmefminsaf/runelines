import Nav from "@/ui/components/Nav";
import BottomNav from "@/ui/components/BottomNav";
import "@/ui/tailwind.css";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: {
    default: "RuneLines | Share your poems with the world",
    template: "%s | RuneLines",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const theme = (await cookies()).get("theme")?.value || "light";
  return (
    <html lang="en" className={`${theme === "dark" && "dark"}`}>
      <body className="bg-light dark:bg-dark text-dark dark:text-light">
        <Nav />
        {children}
        <BottomNav />
      </body>
    </html>
  );
};

export default RootLayout;
