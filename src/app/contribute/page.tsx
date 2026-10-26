import Image from "next/image";

import { Contributors } from "@/app/contribute/_components/contributors";
import { SetupGuide } from "@/app/contribute/_components/setup-guide";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";

export default function ContributePage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <Contributors />
      <div className="w-full rounded-md flex flex-col md:items-center md:justify-center antialiased relative overflow-hidden">
        <div className="p-4 max-w-7xl mx-auto relative z-10  w-full flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 animate-slide-in-left">
            Contribute
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto animate-slide-in-right">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
          <Image
            className="mt-10"
            src="/code.svg"
            alt="Code"
            width={150}
            height={150}
          />
        </div>
        <div className="p-1 mx-auto relative z-10 text-left max-w-[380px] md:max-w-[1000px] md:p-4 ">
          <SetupGuide />
        </div>
      </div>
    </>
  );
}
