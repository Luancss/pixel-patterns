"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  return (
   <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-7 mb-10 slide-in-down items-center justify-center"> 
      <Button
        asChild
        className={cn(
          "border-2 border-[#646464] rounded-lg text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:border-[#fff] cursor-pointer transition",
          pathname === "/" ? "border-[#fff]" : ""
        )}
      >
        <Link href="/">All</Link>
      </Button>
      <Button
        asChild
        className={cn(
          "border-2 border-[#646464] rounded-lg text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:border-[#fff] cursor-pointer transition",
          pathname === "/buttons" ? "border-[#fff]" : ""
        )}
      >
        <Link href="/buttons">Buttons</Link>
      </Button>
      <Button
        asChild
        className={cn(
          "border-2 border-[#646464] rounded-lg text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:border-[#fff] cursor-pointer transition",
          pathname === "/inputs" ? "border-[#fff]" : ""
        )}
      >
        <Link href="/inputs">Inputs</Link>
      </Button>
      <Button
        asChild
        className={cn(
          "border-2 border-[#646464] rounded-lg text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:border-[#fff] cursor-pointer transition",
          pathname === "/loaders" ? "border-[#fff]" : ""
        )}
      >
        <Link href="/loaders">Loaders</Link>
      </Button>
      <Button
        asChild
        className={cn(
          "border-2 border-[#646464] rounded-lg text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:border-[#fff] cursor-pointer transition",
          pathname === "/cards" ? "border-[#fff]" : ""
        )}
      >
        <Link href="/cards">Cards</Link>
      </Button>
      <Button
        asChild
        className={cn(
          "border-2 border-[#646464] rounded-lg text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:border-[#fff] cursor-pointer transition",
          pathname === "/checkboxes" ? "border-[#fff]" : ""
        )}
      >
        <Link href="/checkboxes">Checkboxes</Link>
      </Button>
      <Button
        asChild
        className={cn(
          "border-2 border-[#646464] rounded-lg text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base hover:border-[#fff] cursor-pointer transition",
          pathname === "/forms" ? "border-[#fff]" : ""
        )}
      >
        <Link href="/forms">Forms</Link>
      </Button>
    </div>
  );
};
