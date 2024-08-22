import { CodeBlock, dracula, atomDark, coldarkDark } from "@react-email/code-block";

export const CodeTailwind = () => {
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
    <CodeBlock code={code} lineNumbers theme={dracula} language="javascript" />
  );
};

export const CodeCss = () => {
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
    <CodeBlock code={code} lineNumbers theme={dracula} language="javascript" />
  );
};

export const CodeButtonError = () => {
  const code = `<button>Click me</button>`;

  return (
    <CodeBlock code={code} lineNumbers theme={coldarkDark} language="javascript" />
  );
};

export const CodeButtonCorrect = () => {
  const code = `<button class="content83501">Click me</button>`;

  return (
    <CodeBlock code={code} lineNumbers theme={coldarkDark} language="javascript" />
  );
};


