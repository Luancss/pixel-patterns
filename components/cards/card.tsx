"use client";

import { useState } from "react";
import { Check, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import { cn } from "@/lib/utils";

interface ContentProps {
  content: React.ReactNode;
  background?: string;
  iconColor?: string;
}

export const Card = ({ content, background, iconColor = "currentColor" }: ContentProps) => {
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
      <div
        className={cn(
          `flex flex-col items-center justify-center w-[300px] h-[250px] rounded-xl relative card`,
          background ? `${background}` : "bg-[#808080]"
        )}
      >
        <Button
          onClick={handleClick}
          variant="link"
          className="absolute top-2 right-2"
        >
          {isChecked ? (
            <Check size={20} color={iconColor} />
          ) : (
            <CopyIcon size={20} color={iconColor} />
          )}
        </Button>
        <div className="flex items-center justify-center rounded-xl">{content}</div>
      </div>
    </section>
  );
};
