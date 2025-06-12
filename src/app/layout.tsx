import Nav from "@/ui/components/Nav";
import BottomNav from "@/ui/components/BottomNav";
import "@/ui/tailwind.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RuneLines | Share your poems with the world",
    template: "%s | RuneLines",
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="bg-light text-dark">
        <Nav />
        {children}
        <BottomNav />
      </body>
    </html>
  );
};

export default RootLayout;
