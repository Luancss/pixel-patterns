import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <div className="flex flex-col items-center gap-2">
        <Image
          alt="Luancss"
          src="https://avatars.githubusercontent.com/u/104950187?v=4"
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-gray-300">Made by <Link href="https://github.com/Luancss" target="_blank" className="text-zinc-400 underline">Luancss</Link></p>
      </div>
      <p className="text-gray-300">© 2024 Pixel Patterns</p>
    </div>
  );
};

export default Footer;
