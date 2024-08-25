"use client";
import { Button } from "@/components/ui/button";
import {
  CodeBlock,
  dracula,
  coldarkDark,
} from "@react-email/code-block";
import { Check, CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const CodeTailwind = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    const contentToCopy = code;

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

  const code = `<Card
      key={generateKey()}
      iconColor="#fff" /* #fff or #000 */
      information="Tailwind"
      background="bg-green-950 or bg-[#212121]" /* Use one of these ways */ 
      content={
        /* Add your code here */
      }
    />,`;

  return (
    <div className="relative">
      <CodeBlock
        code={code}
        lineNumbers
        theme={dracula}
        language="javascript"
      />
      <div>
        <Button
          onClick={handleClick}
          variant="link"
          className="absolute top-0 right-0"
        >
          {isChecked ? (
            <Check size={20} color="#fff" />
          ) : (
            <CopyIcon size={20} color="#fff" />
          )}
        </Button>
      </div>
    </div>
  );
};

export const CodeCss = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    const contentToCopy = code;

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

  const code = `<Card
      key={generateKey()}
      iconColor="#fff" /* #fff or #000 */
      information="Css"
      background="bg-green-950 or bg-[#212121]" /* Use one of these ways */  
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: \`
            /* Add your html here */
              <style>
                /* Add your css here */
              </style>
            \`,
          }}
        />
      }
    />,`;

  return (
    <div className="relative">
      <CodeBlock
        code={code}
        lineNumbers
        theme={dracula}
        language="javascript"
      />
      <div>
        <Button
          onClick={handleClick}
          variant="link"
          className="absolute top-0 right-0"
        >
          {isChecked ? (
            <Check size={20} color="#fff" />
          ) : (
            <CopyIcon size={20} color="#fff" />
          )}
        </Button>
      </div>
    </div>
  );
};

export const CodeButtonError = () => {
  const code = `<button>Click me</button>`;

  return (
    <CodeBlock
      code={code}
      lineNumbers
      theme={coldarkDark}
      language="javascript"
    />
  );
};

export const CodeButtonCorrect = () => {
  const code = `<button class="button83501">Click me</button>`;

  return (
    <CodeBlock
      code={code}
      lineNumbers
      theme={coldarkDark}
      language="javascript"
    />
  );
};
