import "@/ui/tailwind.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RuneLines | Share your poems with the world",
    template: "%s | RuneLines",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="bg-light dark:bg-dark text-dark dark:text-light">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
