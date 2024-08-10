"use client"; // components/CardRamdom.tsx""
import { useState } from "react";
import { Check, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";

interface ContentProps {
  content: React.ReactNode;
}

export const Card = ({ content }: ContentProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    const contentToCopy = renderToStaticMarkup(<>{content}</>);

    navigator.clipboard
      .writeText(contentToCopy)
      .then(() => {
        setIsChecked(true);
        toast.success("Code copied!");

        setTimeout(() => {
          setIsChecked(false);
        }, 2000);
      })
      .catch((err) => {
        toast.error("Failed to copy!");
      });
  };

  return (
    <section className="mx-auto justify-items-center justify-content-center">
      <div className="flex flex-col items-center justify-center bg-[#ccc] w-[300px] h-[250px] rounded-xl relative">
        <Button
          onClick={handleClick}
          variant="link"
          className="absolute top-2 right-2"
        >
          {isChecked ? <Check size={20} /> : <CopyIcon size={20} />}
        </Button>
        <div className="flex items-center justify-center">{content}

        </div>
      </div>
    </section>
  );
};
