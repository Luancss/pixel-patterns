"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Check, CopyIcon } from "lucide-react";

export default function CopyCard({ text, text2 }: { text: string; text2?: string }) {
  const combinedText = text + (text2 ? `\n${text2}` : '');

  return (
    <div className="flex flex-col rounded-lg overflow-hidden my-6">
      <div className="bg-gray-800 text-sm text-gray-200 px-6 py-1 flex items-center justify-between">
        <p>Bash</p>
        <Copy content={combinedText} />
      </div>
      <div className="text-base bg-black px-6 py-5">
        <p className="text-gray-300 flex flex-col gap-y-2">
          {text}
        </p>
        {text2 && (
          <p className="text-gray-300 flex flex-col gap-y-2">
            {text2}
          </p>
        )}
      </div>
    </div>
  );
}

const Copy = ({ content }: { content: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    navigator.clipboard
      .writeText(content)
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
    <Button onClick={handleClick} variant="link">
      {isChecked ? (
        <>
          <Check size={20} color="#fff" />
          <p className="ml-2 text-gray-100 text-xs">Code Copied</p>
        </>
      ) : (
        <>
          <CopyIcon size={20} color="#fff" />
          <p className="ml-2 text-gray-100 text-xs">Copy Code</p>
        </>
      )}
    </Button>
  );
};
