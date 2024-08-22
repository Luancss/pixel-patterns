"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Check, CopyIcon } from "lucide-react";

const Copy = ({ content }: { content: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    const contentToCopy = content;
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

export default Copy;
