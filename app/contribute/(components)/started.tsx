import React from "react";
import {
  CodeButtonCorrect,
  CodeButtonError,
  CodeCss,
  CodeTailwind,
} from "./code-block";
import { AlertCircleIcon, CircleCheck, CircleX } from "lucide-react";

const Started = () => {
  return (
    <div>
      <p className="text-xl text-gray-300 mt-10 mb-4 border-b-2 border-zinc-600 border-separate pb-4 text-center">
        If your component is{" "}
        <span className="font-bold text-blue-500">Tailwind</span> , use this
        structure:
      </p>
      <CodeTailwind />
      <p className="text-xl text-gray-300 mt-10 mb-4 border-b-2 border-zinc-600 border-separate pb-4 text-center">
        If your component is{" "}
        <span className="font-bold text-blue-500">Css</span> , use this
        structure:
      </p>
      <p className="flex text-gray-300">
        <AlertCircleIcon className="text-yellow-300 mr-4 items-center justify-center" />{" "}
        Randomly place 5 numeric digits in all your component classes to avoid
        conflicts with existing components and future components
      </p>
      <p className="mt-6 text-gray-300">Example:</p>
      <div className="flex items-center justify-center gap-4">
        <CircleX className="text-red-500" />
        <CodeButtonError />
      </div>
      <div className="flex items-center justify-center gap-4">
        <CircleCheck className="text-green-500" />
        <CodeButtonCorrect />
      </div>

      <CodeCss />
    </div>
  );
};

export default Started;
