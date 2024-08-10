import Link from "next/link";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <div className="flex gap-x-4 mt-7 mb-10">
      <Button
        asChild
        className=" border-2 border-[#fff] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
      >
        <Link href="/buttons">Buttons</Link>
      </Button>
      <Button
        asChild
        className=" border-2 border-[#fff] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
      >
        <Link href="/buttons">Cards</Link>
      </Button>
      <Button
        asChild
        className=" border-2 border-[#fff] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
      >
        <Link href="/buttons">Buttons</Link>
      </Button>
    </div>
  );
};
