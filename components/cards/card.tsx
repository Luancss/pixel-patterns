"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/useThemeStore";
import { CodeBlock } from "@react-email/code-block";
import { motion } from "framer-motion";
import { Check, Code2, CopyIcon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { toast } from "sonner";
import { Background } from "../layout";
import { Geminid, Star } from "../shapes";
import { ThemeModal } from "../theme-modal";
import { Button } from "../ui/button";

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
}: ContentProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isMouseInBoundary, setIsMouseInBoundary] = useState(true);
  const { theme } = useThemeStore();

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDialogOpen) return;

      const dialog = document.querySelector('[role="dialog"]');
      if (!dialog) return;

      const rect = dialog.getBoundingClientRect();

      // Define the boundary area
      const boundaryTop = rect.top - 50;
      const boundaryBottom = rect.bottom + 50;
      const boundaryLeft = rect.left - 150;
      const boundaryRight = rect.right + 150;

      // Check if mouse is outside the boundary
      const isOutside =
        e.clientX < boundaryLeft ||
        e.clientX > boundaryRight ||
        e.clientY < boundaryTop ||
        e.clientY > boundaryBottom;

      setIsMouseInBoundary(!isOutside);

      if (isOutside) {
        setMousePosition({ x: 0, y: 0 });
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const rotateY = (deltaX / rect.width) * 10;
      const rotateX = (deltaY / rect.height) * -10;

      setMousePosition({ x: rotateY, y: rotateX });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [isDialogOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

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
      .catch(() => {
        toast.error("Failed to copy!");
      });
  };

  const contentCode = renderToStaticMarkup(<>{content}</>);

  return (
    <section className="mx-auto justify-center">
      <div
        className={cn(
          `flex flex-col items-center justify-center w-[300px] h-[250px] rounded-xl relative card`,
          background ? `${background}` : "bg-[#808080]"
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          variant="link"
          className="absolute top-2 left-2 flex items-center"
          onClick={() => setIsDialogOpen(true)}
        >
          <Code2 size={20} color={iconColor} />
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="flex flex-col justify-center max-w-[850px] max-h-[650px] h-full w-full bg-black overflow-hidden text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `perspective(2000px) translate(-50%, -50%) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            top: "50%",
            left: "50%",
            transition: isMouseInBoundary ? "none" : "transform 0.5s ease-out",
          }}
        >
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
            <X className="h-4 w-4" />
          </DialogClose>
          <Star />
          <Geminid />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col mx-auto rounded-xl overflow-hidden w-[700px] max-h-[650px] -mt-8 mb-6"
          >
            <Background />
            <DialogHeader className="text-white mx-auto mb-5 z-50 flex w-full flex-row items-center">
              <DialogTitle className="text-2xl flex items-center">
                Code Preview
                <Button onClick={handleClick} variant="link">
                  {isChecked ? (
                    <Check size={20} color={iconColor} />
                  ) : (
                    <CopyIcon size={20} color={iconColor} />
                  )}
                </Button>
              </DialogTitle>
              <ThemeModal />
            </DialogHeader>
            <div className="flex gap-2 items-center bg-[#1F1F1F] px-4 py-2 rounded-t-xl z-50">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="w-full h-full overflow-y-auto custom-scrollbar mx-auto z-50"
            >
              <CodeBlock
                code={contentCode}
                lineNumbers
                style={{
                  margin: "0",
                  borderRadius: "0",
                  padding: "1rem",
                  borderLeft: "3px solid #1F1F1F",
                  zIndex: "50",
                }}
                theme={theme}
                language="javascript"
              />
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
