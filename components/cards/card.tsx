"use client";

import { useState } from "react";
import { Check, CopyIcon, InfoIcon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import { cn } from "@/lib/utils";

interface ContentProps {
  content: React.ReactNode;
  background?: string;
  iconColor?: string;
  information: string;
}

export const Card = ({
  content,
  background,
  iconColor = "currentColor",
  information,
}: ContentProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isInformation, setIsInformation] = useState(false);

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
          variant="link"
          className="absolute top-2 left-2 flex items-center"
          onMouseEnter={() => setIsInformation(true)}
          onMouseLeave={() => setIsInformation(false)}
        >
          <InfoIcon size={20} color={iconColor} />
          <span
            className={cn(
              "absolute -top-3 left-1/2 transform -translate-x-1/2 p-1 z-50 rounded text-[10px] uppercase font-medium transition-opacity duration-300",
              isInformation ? "opacity-100" : "opacity-0"
            )}
            style={{ color: iconColor }}
          >
            {information}
          </span>
        </Button>
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
        <div className="flex items-center justify-center rounded-xl">
          {content}
        </div>
      </div>
    </section>
  );
};
