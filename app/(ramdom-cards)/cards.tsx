import { Card } from "@/components/cards/card";

export const RamdonCards = () => {
  const cardsToLeft = [
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
      iconColor="#fff"
      background="bg-gradient-to-r from-green-950"
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
      background="bg-slate-900"
      content={
        <div className="bg-slate-900 p-2 rounded-full">
          <div className="relative flex text-center rounded-3xl">
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
      iconColor="#fff"
      background="bg-gradient-to-l from-slate-950"
      content={
        <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            Contact me
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </span>
        </button>
      }
    />,
    <Card
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <div className="flex flex-col bg-black rounded-3xl">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
                  Corporate
                </h2>
                <p className="mt-2 text-sm text-gray-100">
                  Grow steadily and pizza.
                </p>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-5xl font-light tracking-tight text-white">
                    $35
                  </span>
                  <span className="text-base font-medium text-white">
                    {" "}
                    /mo{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-6 pb-8 sm:px-8">
            <a
              aria-describedby="tier-starter"
              className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
            >
              Get started
            </a>
          </div>
        </div>
      }
    />,
    <Card
      background="bg-[#fff]"
      content={
        <div className="flex flex-col bg-white rounded-3xl">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                  Starter
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Suitable to grow steadily.
                </p>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-5xl font-light tracking-tight text-black">
                    $25
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {" "}
                    /mo{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-6 pb-8 sm:px-8">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>
      }
    />,
    <Card
      iconColor="#fff"
      background="bg-[#1f1f1f]"
      content={
        <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
          <p className="z-10 absolute bottom-2 left-2">See more</p>
        </button>
      }
    />,
    <Card
      iconColor="#fff"
      background="bg-[#212730]"
      content={
        /* From Uiverse.io by catraco */
        <div className="bg-slate-800 border border-slate-700 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
          <h1 className="text-center text-slate-600 text-xl font-bold col-span-6">
            Send Feedback
          </h1>
          <textarea
            className="bg-slate-700 text-slate-300 h-28 placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300"
            placeholder="Your feedback..."
          ></textarea>
          <p className="fill-slate-300 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-700 hover:border-slate-300 focus:fill-blue-200 focus:bg-blue-600 border border-slate-600">
            <svg
              viewBox="0 0 512 512"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
            </svg>
          </p>
          <p className="fill-slate-300 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-700 hover:border-slate-300 focus:fill-blue-200 focus:bg-blue-600 border border-slate-600">
            <svg
              viewBox="0 0 512 512"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
            </svg>
          </p>
          <span className="col-span-2"></span>
          <p className="col-span-2 stroke-slate-300 bg-slate-700 focus:stroke-blue-200 focus:bg-blue-600 border border-slate-600 hover:border-slate-300 rounded-lg p-2 duration-300 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10.11 13.6501L13.69 10.0601"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </p>
        </div>
      }
    />,
  ];

  const cardsToRight = [
    <Card
      iconColor="#fff"
      background="bg-gradient-to-r from-gray-600"
      content={
        <div className="flex flex-col gap-3">
          <button className="cursor-pointer">
            <div className="flex max-w-48 h-12 px-3 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:h-14">
              <svg viewBox="30 336.7 120.9 129.2" className="w-5 sm:w-7">
                <path
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  fill="#FFD400"
                ></path>
                <path
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  fill="#FF3333"
                ></path>
                <path
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  fill="#48FF48"
                ></path>
                <path
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  fill="#3BCCFF"
                ></path>
              </svg>
              <div>
                <div className="text-[.5rem] sm:text-xs text-left">
                  GET IT ON
                </div>
                <div className="text-sm font-semibold font-sans -mt-1 sm:text-xl">
                  Google Play
                </div>
              </div>
            </div>
          </button>

          <button className="cursor-pointer">
            <div className="flex max-w-48 h-12 px-3 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:gap-3 sm:h-14">
              <svg viewBox="0 0 384 512" className="w-5 sm:w-7">
                <path
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  fill="currentColor"
                ></path>
              </svg>
              <div>
                <div className="text-[.5rem] sm:text-xs text-left">
                  Download on the
                </div>
                <div className="text-lg font-semibold font-sans -mt-1 sm:text-2xl">
                  App Store
                </div>
              </div>
            </div>
          </button>

          <button className="cursor-pointer">
            <div className="flex max-w-48 h-12 px-3 py-4 gap-2 rounded-xl items-center justify-center bg-black text-white dark:text-black dark:bg-white sm:h-14">
              <svg viewBox="0 0 16 16" className="w-5 sm:w-7">
                <path
                  fill="currentColor"
                  d="m10.213 1.471l.691-1.26q.069-.124-.048-.192q-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11a.35.35 0 0 1-.263-.11a.37.37 0 0 1-.107-.264a.37.37 0 0 1 .107-.265a.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265a.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11a.37.37 0 0 1-.268-.11a.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75q.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288a.97.97 0 0 0 .71-.288a.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288a.97.97 0 0 0 .71-.288a.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308q.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278a.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685a1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69a.97.97 0 0 1-.707.284a1 1 0 0 1-.712-.284a.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68"
                ></path>
              </svg>
              <div>
                <div className="text-[.5rem] sm:text-xs text-left">
                  Download
                </div>
                <div className="text-sm font-semibold font-sans -mt-1 sm:text-xl">
                  Android APK
                </div>
              </div>
            </div>
          </button>
        </div>
      }
    />,
    <Card
      iconColor="#fff"
      background="bg-gradient-to-r from-neutral-200 to-neutral-500"
      content={
        /* From Uiverse.io by themrsami */
        <div className="flex justify-around gap-4 items-center px-4 py-1 bg-black rounded-[15px] ring-1 ring-white">
          <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9167 30H20.4167C19.2658 30 18.3333 29.1392 18.3333 28.0769V21.1538C18.3333 20.3038 17.5875 19.6154 16.6667 19.6154H13.3333C12.4125 19.6154 11.6667 20.3038 11.6667 21.1538V28.0769C11.6667 29.1392 10.7342 30 9.58333 30H2.08333C0.9325 30 0 29.1392 0 28.0769V13.3946C0 11.6262 0.878334 9.95539 2.3825 8.86154L14.2258 0.246923C14.68 -0.0823077 15.32 -0.0823077 15.7733 0.246923L27.6183 8.86154C29.1225 9.95539 30 11.6254 30 13.3931V28.0769C30 29.1392 29.0675 30 27.9167 30Z"
                fill="white"
              ></path>
            </svg>

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
              Home
            </div>
          </div>

          <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0013 0C10.482 0 6.81914 3.50348 6.81914 7.82609V9.13044C6.81914 13.453 10.482 16.9565 15.0013 16.9565C19.5206 16.9565 23.1835 13.453 23.1835 9.13044V7.82609C23.1835 3.50348 19.5206 0 15.0013 0ZM14.9987 20.8696C9.53569 20.8696 2.52628 23.6959 0.509366 26.2041C-0.737054 27.755 0.44947 30 2.49366 30H27.5063C29.5505 30 30.7371 27.755 29.4906 26.2041C27.4737 23.6972 20.4616 20.8696 14.9987 20.8696Z"
                fill="white"
              ></path>
            </svg>

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
              About
            </div>
          </div>

          <div className="relative group hover:cursor-pointer hover:bg-zinc-900 p-2 rounded-full transition-all duration-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6641 0C19.4231 0 19.2178 0.171203 19.1738 0.408203L18.9531 1.58398C18.8961 1.88898 18.6546 2.11669 18.3496 2.17969C18.0656 2.23869 17.7857 2.31239 17.5137 2.40039C17.2187 2.49639 16.8973 2.42055 16.6953 2.18555L15.9199 1.2793C15.7629 1.0963 15.4981 1.05283 15.2891 1.17383L14.7109 1.50781C14.5029 1.62781 14.4083 1.88042 14.4883 2.10742L14.8848 3.23438C14.9878 3.52637 14.8931 3.84378 14.6621 4.05078C14.4471 4.24378 14.2438 4.44711 14.0508 4.66211C13.8438 4.89311 13.5264 4.98972 13.2344 4.88672L12.1055 4.48828C11.8785 4.40828 11.6278 4.50194 11.5078 4.71094L11.1719 5.29102C11.0519 5.49902 11.0973 5.76487 11.2793 5.92188L11.377 6.00586C12.56 6.02586 13.572 6.87206 13.791 8.03906L13.8516 8.35742L14.0605 8.11133C14.5195 7.57733 15.1622 7.28695 15.8262 7.25195C16.7222 5.89695 18.255 5 20 5C22.761 5 25 7.239 25 10C25 11.745 24.103 13.2779 22.748 14.1719C22.713 14.8359 22.4227 15.4795 21.8887 15.9375L21.6426 16.1465L21.9609 16.207C23.1279 16.426 23.9741 17.4381 23.9941 18.6211L24.0781 18.7188C24.2351 18.9017 24.5 18.9472 24.709 18.8262L25.2891 18.4902C25.4971 18.3702 25.5917 18.1196 25.5117 17.8926L25.1133 16.7637C25.0103 16.4717 25.1069 16.1543 25.3379 15.9473C25.5529 15.7543 25.7562 15.5509 25.9492 15.3359C26.1562 15.1049 26.4736 15.0103 26.7656 15.1133L27.8926 15.5098C28.1196 15.5898 28.3722 15.4961 28.4922 15.2871L28.8262 14.707C28.9462 14.499 28.9027 14.2351 28.7207 14.0781L27.8145 13.3008C27.5795 13.0988 27.5036 12.7774 27.5996 12.4824C27.6876 12.2104 27.7613 11.9324 27.8203 11.6484C27.8833 11.3444 28.111 11.1029 28.416 11.0449L29.5918 10.8223C29.8288 10.7813 30 10.5769 30 10.3359V9.66406C30 9.42306 29.8288 9.21783 29.5918 9.17383L28.416 8.95312C28.111 8.89612 27.8833 8.65461 27.8203 8.34961C27.7613 8.06561 27.6876 7.78567 27.5996 7.51367C27.5036 7.21867 27.5795 6.89731 27.8145 6.69531L28.7207 5.91992C28.9037 5.76292 28.9472 5.49806 28.8262 5.28906L28.4922 4.71094C28.3722 4.50294 28.1196 4.40828 27.8926 4.48828L26.7656 4.88477C26.4736 4.98777 26.1562 4.89311 25.9492 4.66211C25.7562 4.44711 25.5529 4.24378 25.3379 4.05078C25.1069 3.84378 25.0103 3.52637 25.1133 3.23438L25.5117 2.10547C25.5917 1.87847 25.4981 1.62781 25.2891 1.50781L24.709 1.17188C24.501 1.05188 24.2351 1.0973 24.0781 1.2793L23.3027 2.18555C23.1007 2.42055 22.7794 2.49639 22.4844 2.40039C22.2124 2.31239 21.9324 2.23869 21.6484 2.17969C21.3444 2.11669 21.1029 1.88703 21.0449 1.58203L20.8242 0.40625C20.7822 0.17025 20.5769 0 20.3359 0H19.6641ZM10.6641 8C10.4231 8 10.2178 8.17025 10.1738 8.40625L9.98828 9.39453C9.91128 9.80553 9.58383 10.1084 9.17383 10.1914C8.83283 10.2604 8.49788 10.3481 8.17188 10.4551C7.77588 10.5851 7.34131 10.4879 7.07031 10.1719L6.41992 9.41211C6.26292 9.23011 5.99706 9.18664 5.78906 9.30664L5.21094 9.64062C5.00194 9.76062 4.90828 10.0132 4.98828 10.2402L5.32422 11.1914C5.46222 11.5854 5.33053 12.0091 5.01953 12.2871C4.76253 12.5171 4.51806 12.7606 4.28906 13.0176C4.01106 13.3286 3.58736 13.4603 3.19336 13.3223L2.24023 12.9883C2.01323 12.9083 1.76258 13.0029 1.64258 13.2109L1.30664 13.7891C1.18564 13.9981 1.23106 14.2629 1.41406 14.4199L2.17383 15.0703C2.48983 15.3413 2.58703 15.7759 2.45703 16.1719C2.35003 16.4979 2.26236 16.8328 2.19336 17.1738C2.11036 17.5838 1.80748 17.9113 1.39648 17.9883L0.408203 18.1738C0.171203 18.2178 0 18.4231 0 18.6641V19.3359C0 19.5769 0.17025 19.7822 0.40625 19.8262L1.39453 20.0117C1.80553 20.0887 2.10841 20.4162 2.19141 20.8262C2.26041 21.1682 2.34808 21.5021 2.45508 21.8281C2.58508 22.2241 2.48788 22.6587 2.17188 22.9297L1.41211 23.5801C1.23011 23.7371 1.18664 24.0029 1.30664 24.2109L1.64062 24.7891C1.76062 24.9981 2.01323 25.0917 2.24023 25.0117L3.19141 24.6758C3.58541 24.5378 4.00911 24.6695 4.28711 24.9805C4.51711 25.2375 4.76058 25.4819 5.01758 25.7109C5.32858 25.9889 5.46027 26.4126 5.32227 26.8066L4.98828 27.7598C4.90828 27.9868 5.00294 28.2374 5.21094 28.3574L5.78906 28.6934C5.99806 28.8144 6.26292 28.7689 6.41992 28.5859L7.07031 27.8262C7.34131 27.5102 7.77588 27.413 8.17188 27.543C8.49788 27.65 8.83283 27.7376 9.17383 27.8066C9.58383 27.8896 9.91128 28.1925 9.98828 28.6035L10.1738 29.5918C10.2178 29.8288 10.4231 30 10.6641 30H11.3359C11.5769 30 11.7822 29.8287 11.8242 29.5938L12.0098 28.6055C12.0868 28.1945 12.4142 27.8916 12.8242 27.8086C13.1662 27.7396 13.5002 27.6519 13.8262 27.5449C14.2222 27.4149 14.6567 27.5121 14.9277 27.8281L15.5781 28.5879C15.7351 28.7699 15.999 28.8153 16.207 28.6953L16.7871 28.3594C16.9961 28.2394 17.0898 27.9887 17.0098 27.7617L16.6758 26.8086C16.5378 26.4146 16.6695 25.9909 16.9805 25.7129C17.2375 25.4829 17.4819 25.2394 17.7109 24.9824C17.9889 24.6714 18.4136 24.5397 18.8066 24.6777L19.7598 25.0117C19.9868 25.0917 20.2374 24.9971 20.3574 24.7891L20.6934 24.2109C20.8144 24.0019 20.7689 23.7371 20.5859 23.5801L19.8262 22.9297C19.5102 22.6587 19.413 22.2241 19.543 21.8281C19.65 21.5021 19.7376 21.1672 19.8066 20.8262C19.8896 20.4162 20.1925 20.0887 20.6035 20.0117L21.5918 19.8262C21.8288 19.7822 22 19.5769 22 19.3359V18.6641C22 18.4231 21.8287 18.2188 21.5938 18.1758L20.6055 17.9902C20.1945 17.9132 19.8916 17.5838 19.8086 17.1738C19.7396 16.8328 19.6519 16.4979 19.5449 16.1719C19.4149 15.7759 19.5121 15.3433 19.8281 15.0723L20.5879 14.4219C20.7699 14.2649 20.8153 13.999 20.6953 13.791L20.3594 13.2109C20.2394 13.0019 19.9887 12.9083 19.7617 12.9883L18.8086 13.3242C18.4146 13.4622 17.9909 13.3305 17.7129 13.0195C17.4829 12.7625 17.2394 12.5181 16.9824 12.2891C16.6714 12.0111 16.5397 11.5874 16.6777 11.1934L17.0117 10.2402C17.0917 10.0132 16.9971 9.76258 16.7891 9.64258L16.2109 9.30664C16.0019 9.18564 15.7371 9.23106 15.5801 9.41406L14.9297 10.1738C14.6587 10.4898 14.2241 10.587 13.8281 10.457C13.5021 10.35 13.1672 10.2624 12.8262 10.1934C12.4162 10.1104 12.0887 9.80748 12.0117 9.39648L11.8262 8.4082C11.7822 8.1712 11.5769 8 11.3359 8H10.6641ZM20 9C19.448 9 19 9.448 19 10C19 10.552 19.448 11 20 11C20.552 11 21 10.552 21 10C21 9.448 20.552 9 20 9ZM11 13C14.314 13 17 15.686 17 19C17 22.314 14.314 25 11 25C7.686 25 5 22.314 5 19C5 15.686 7.686 13 11 13ZM11 17C9.895 17 9 17.895 9 19C9 20.105 9.895 21 11 21C12.105 21 13 20.105 13 19C13 17.895 12.105 17 11 17Z"
                fill="white"
              ></path>
            </svg>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
              Services
            </div>
          </div>

          <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6923 0C10.1547 0 8.07692 2.16563 8.07692 4.8V6H10.3846V4.8C10.3846 3.45938 11.4032 2.4 12.6923 2.4H17.3077C18.5968 2.4 19.6154 3.45938 19.6154 4.8V6H21.9231V4.8C21.9231 2.16563 19.8453 0 17.3077 0H12.6923ZM5.625 7.2C2.51953 7.2 0 9.82031 0 13.05V24.15C0 27.3797 2.51953 30 5.625 30H24.375C27.4805 30 30 27.3797 30 24.15V13.05C30 9.82031 27.4805 7.2 24.375 7.2H5.625ZM15 15.4875C16.3386 15.4875 17.4159 16.6078 17.4159 18C17.4159 19.3922 16.3386 20.5125 15 20.5125C13.6614 20.5125 12.5841 19.3922 12.5841 18C12.5841 16.6078 13.6614 15.4875 15 15.4875Z"
                fill="white"
              ></path>
            </svg>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
              Portfolio
            </div>
          </div>

          <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4672 19.4199C21.9377 19.1095 21.2868 19.116 20.7598 19.4291L18.0912 21.0191C17.4938 21.3751 16.7477 21.3334 16.1999 20.9056C15.2529 20.166 13.7282 18.9217 12.4016 17.5952C11.0751 16.2687 9.8308 14.7439 9.09124 13.7969C8.66342 13.2491 8.62168 12.503 8.97776 11.9057L10.5677 9.23697C10.8821 8.71002 10.8847 8.05394 10.5743 7.52438L6.65865 0.835732C6.27909 0.188781 5.52518 -0.129478 4.79606 0.0492166C4.0878 0.221389 3.16825 0.641386 2.20434 1.6066C-0.813896 4.62483 -2.41693 9.71567 8.93342 21.066C20.2838 32.4164 25.3733 30.8146 28.3928 27.7951C29.3593 26.8286 29.778 25.9077 29.9515 25.1982C30.1276 24.4703 29.8145 23.7216 29.1689 23.3434C27.5567 22.4004 24.0794 20.3643 22.4672 19.4199Z"
                fill="white"
              ></path>
            </svg>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
              Contact
            </div>
          </div>
        </div>
      }
    />,
  ];

  return (
    <div className="space-y-5 border-x-2">
      <div className="scroller" data-direction="left" data-speed="fast">
        <div className="scroller__inner">
          {cardsToLeft}
          {cardsToLeft}
        </div>
      </div>
      <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
          {cardsToRight}
          {cardsToRight}
        </div>
      </div>
    </div>
  );
};
