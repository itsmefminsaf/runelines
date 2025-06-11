import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Logo = () => {
  return (
    <h1 className={`${pacifico.className} text-4xl font-extrabold`}>
      RuneLine
    </h1>
  );
};

export default Logo;
