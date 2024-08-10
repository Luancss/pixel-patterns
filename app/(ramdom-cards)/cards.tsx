import { Card } from "@/components/cards/card";

export const RamdonCards = () => {
  const cards = [
    <Card
      background="bg-red-300"
      content={
        <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Hover Me
        </button>
      }
    />,
    <Card
      background="bg-lime-100"
      content={
        <button
          title="Save"
          className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2"
        >
          <svg
            viewBox="0 -0.5 25 25"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span className="text-sm text-lime-400 font-bold pr-1">
            Save Post
          </span>
        </button>
      }
    />,
    <Card
      iconColor="#fff"
      content={
        <div className="bg-slate-900 p-2">
          <div className="relative flex text-center">
            <div className="flex pl-3.5 pt-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
              >
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
              >
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
              >
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
            </div>
            <span className="absolute inset-x-0 top-2 text-xs text-slate-500">
              ProgressBar.tsx
            </span>
          </div>
          <div className="mt-5 space-y-1.5 px-5 pb-10">
            <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Card</span>
              <span className="text-slate-500">&gt;</span>
            </p>
            <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Text</span>
              <span className="text-slate-500">&gt;</span>
              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">Ticket Sales</span>
              </span>
              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Text</span>
              <span className="text-slate-500">&gt;</span>
            </p>
            <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Metric</span>
              <span className="text-slate-500">&gt;</span>
              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">$ 71,465</span>
              </span>
              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Metric</span>
              <span className="text-slate-500">&gt;</span>
            </p>
            <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Flex</span>
              <span className="ml-2 text-violet-400">
                classNameName<span className="text-slate-500">=</span>
                <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span className="relative text-blue-400">"mt-3"</span>
                </span>
              </span>
              <span className="text-slate-500">&gt;</span>
            </p>
            <p className="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Text</span>
              <span className="text-slate-500">&gt;</span>
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Bold</span>
              <span className="text-slate-500">&gt;</span>
              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">32%</span>
              </span>
              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Bold</span>
              <span className="text-slate-500">&gt;</span>
              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">of annual target</span>
              </span>
              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Text</span>
              <span className="text-slate-500">&gt;</span>
            </p>
            <p className="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Text</span>
              <span className="text-slate-500">&gt;</span>
              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">$ 223,328</span>
              </span>
              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Text</span>
              <span className="text-slate-500">&gt;</span>
            </p>
            <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Flex</span>
              <span className="text-slate-500">&gt;</span>
            </p>
          </div>
        </div>
      }
    />,
    <Card
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
          <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
            Hover me
          </div>
          <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
            Hover me
          </div>
        </button>
      }
    />,
    <Card
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
          <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
            Hover me
          </div>
          <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
            Hover me
          </div>
        </button>
      }
    />,
    <Card
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
          <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
            Hover me
          </div>
          <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
            Hover me
          </div>
        </button>
      }
    />,
  ];

  return (
    <div className="space-y-5">
      <div className="scroller" data-direction="left" data-speed="fast">
        <div className="scroller__inner">
          {cards}
          {cards}{" "}
          {/* Duplicar os cards para criar o efeito de rotação contínua */}
        </div>
      </div>
      <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
          {cards}
          {cards}
        </div>
      </div>
    </div>
  );
};
