"use client";

import { Check, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const CardRamdom = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      toast.success("Code copied!");

      setTimeout(() => {
        setIsChecked(false);
      }, 2000)
    }
  };

  return (
    <section className="grid grid-cols-4 gap-5 mx-auto justify-items-center justify-content-center">
      <div className="flex flex-col items-center justify-center bg-[#ccc] w-[300px] h-[250px] rounded-xl relative">
        <div className="absolute top-2 right-2">
          <Button
            onClick={handleClick}
            variant="link"
          >
            {isChecked ? <Check size={20} /> : <CopyIcon size={20} />}
          </Button>
        </div>
      </div>
    </section>
  );
};
