import { Card } from "@/components/cards/card";

export const RamdonCards = () => {
  const cardsToLeft = [
    <Card
      information="Tailwind"
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
      information="Tailwind"
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
      information="Css"
      background="bg-gradient-to-r from-yellow-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <button class="amogus-btn">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 36 36"
  width="36px"
  height="36px"
  >
  <rect width="36" height="36" x="0" y="0" fill="#fdd835"></rect>
  <path
    fill="#e53935"
    d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
  ></path>
  <path
    fill="#b71c1c"
    d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
  ></path>
  <path
    fill="#212121"
    d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
  ></path>
  <path
    fill="#01579b"
    d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
  ></path>
  <path
    fill="#212121"
    d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
  ></path>
  <path
    fill="#81d4fa"
    d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
  ></path>
  <path
    fill="#212121"
    d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
  ></path>
  <path
    fill="#e1f5fe"
    d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
  ></path>
</svg>
<span class="imposter">now!</span>
<span class="crewmate">play</span>
</button>
<style>
.amogus-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  color: white;
  text-shadow: 2px 2px rgb(116, 116, 116);
  text-transform: uppercase;
  cursor: pointer;
  border: solid 2px black;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 17px;
  background-color: hsl(49deg 98% 60%);
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}

.amogus-btn:active {
  transform: scale(0.9);
  transition: all 100ms ease;
}

.amogus-btn svg {
  transition: all 0.5s ease;
  z-index: 2;
}

.crewmate {
  transition: all 0.5s ease;
  transition-delay: 300ms;
}

.amogus-btn:hover svg {
  transform: scale(3) translate(50%);
}

.imposter {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  z-index: 2;
}

.amogus-btn:hover .imposter {
  transform: translateX(10px);
  transition-delay: 300ms;
}

.amogus-btn:hover .crewmate {
  transform: translateX(200%);
  transition-delay: 300ms;
}
</style>
      `,
          }}
        />
      }
    />,
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-l from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <div class="sus-boxes-1a2b">
            <div class="sus-box-1a2b">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="sus-box-1a2b">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="sus-box-1a2b">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="sus-box-1a2b">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <style>
          .sus-boxes-1a2b {
            --size: 32px;
            --duration: 800ms;
            height: calc(var(--size) * 2);
            width: calc(var(--size) * 3);
            position: relative;
            transform-style: preserve-3d;
            transform-origin: 50% 50%;
            margin-top: calc(var(--size) * 1.5 * -1);
            transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
          }

          .sus-boxes-1a2b .sus-box-1a2b {
            width: var(--size);
            height: var(--size);
            top: 0;
            left: 0;
            position: absolute;
            transform-style: preserve-3d;
          }

          .sus-boxes-1a2b .sus-box-1a2b:nth-child(1) {
            transform: translate(100%, 0);
            -webkit-animation: sus-box1-1a2b var(--duration) linear infinite;
            animation: sus-box1-1a2b var(--duration) linear infinite;
          }

          .sus-boxes-1a2b .sus-box-1a2b:nth-child(2) {
            transform: translate(0, 100%);
            -webkit-animation: sus-box2-1a2b var(--duration) linear infinite;
            animation: sus-box2-1a2b var(--duration) linear infinite;
          }

          .sus-boxes-1a2b .sus-box-1a2b:nth-child(3) {
            transform: translate(100%, 100%);
            -webkit-animation: sus-box3-1a2b var(--duration) linear infinite;
            animation: sus-box3-1a2b var(--duration) linear infinite;
          }

          .sus-boxes-1a2b .sus-box-1a2b:nth-child(4) {
            transform: translate(200%, 0);
            -webkit-animation: sus-box4-1a2b var(--duration) linear infinite;
            animation: sus-box4-1a2b var(--duration) linear infinite;
          }

          .sus-boxes-1a2b .sus-box-1a2b > div {
            --background: #5C8DF6;
            --top: auto;
            --right: auto;
            --bottom: auto;
            --left: auto;
            --translateZ: calc(var(--size) / 2);
            --rotateY: 0deg;
            --rotateX: 0deg;
            position: absolute;
            width: 100%;
            height: 100%;
            background: var(--background);
            top: var(--top);
            right: var(--right);
            bottom: var(--bottom);
            left: var(--left);
            transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
          }

          .sus-boxes-1a2b .sus-box-1a2b > div:nth-child(1) {
            --top: 0;
            --left: 0;
          }

          .sus-boxes-1a2b .sus-box-1a2b > div:nth-child(2) {
            --background: #145af2;
            --right: 0;
            --rotateY: 90deg;
          }

          .sus-boxes-1a2b .sus-box-1a2b > div:nth-child(3) {
            --background: #447cf5;
            --rotateX: -90deg;
          }

          .sus-boxes-1a2b .sus-box-1a2b > div:nth-child(4) {
            --background: #DBE3F4;
            --top: 0;
            --left: 0;
            --translateZ: calc(var(--size) * 3 * -1);
          }

          @-webkit-keyframes sus-box1-1a2b {
            0%, 50% {
              transform: translate(100%, 0);
            }

            100% {
              transform: translate(200%, 0);
            }
          }

          @keyframes sus-box1-1a2b {
            0%, 50% {
              transform: translate(100%, 0);
            }

            100% {
              transform: translate(200%, 0);
            }
          }

          @-webkit-keyframes sus-box2-1a2b {
            0% {
              transform: translate(0, 100%);
            }

            50% {
              transform: translate(0, 0);
            }

            100% {
              transform: translate(100%, 0);
            }
          }

          @keyframes sus-box2-1a2b {
            0% {
              transform: translate(0, 100%);
            }

            50% {
              transform: translate(0, 0);
            }

            100% {
              transform: translate(100%, 0);
            }
          }

          @-webkit-keyframes sus-box3-1a2b {
            0%, 50% {
              transform: translate(100%, 100%);
            }

            100% {
              transform: translate(0, 100%);
            }
          }

          @keyframes sus-box3-1a2b {
            0%, 50% {
              transform: translate(100%, 100%);
            }

            100% {
              transform: translate(0, 100%);
            }
          }

          @-webkit-keyframes sus-box4-1a2b {
            0% {
              transform: translate(200%, 0);
            }

            50% {
              transform: translate(200%, 100%);
            }

            100% {
              transform: translate(100%, 100%);
            }
          }

          @keyframes sus-box4-1a2b {
            0% {
              transform: translate(200%, 0);
            }

            50% {
              transform: translate(200%, 100%);
            }

            100% {
              transform: translate(100%, 100%);
            }
          }
        </style>
      `,
          }}
        />
      }
    />,
    <Card
      information="Tailwind"
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
      information="Tailwind"
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
  ];

  const cardsToRight = [
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-b from-zinc-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div class="wave-group">
              <input required="" type="text" class="input">
              <span class="bar"></span>
              <label class="label">
                <span class="label-char" style="--index: 0">N</span>
                <span class="label-char" style="--index: 1">a</span>
                <span class="label-char" style="--index: 2">m</span>
                <span class="label-char" style="--index: 3">e</span>
              </label>
            </div>
            <style>
            .wave-group {
              position: relative;
            }

            .wave-group .input {
              font-size: 16px;
              padding: 10px 10px 10px 5px;
              display: block;
              width: 200px;
              border: none;
              border-bottom: 1px solid #515151;
              background: transparent;
            }

            .wave-group .input:focus {
              outline: none;
            }

            .wave-group .label {
              color: #999;
              font-size: 18px;
              font-weight: normal;
              position: absolute;
              pointer-events: none;
              left: 5px;
              top: 10px;
              display: flex;
            }

            .wave-group .label-char {
              transition: 0.2s ease all;
              transition-delay: calc(var(--index) * .05s);
            }

            .wave-group .input:focus ~ label .label-char,
            .wave-group .input:valid ~ label .label-char {
              transform: translateY(-20px);
              font-size: 14px;
              color: #5264AE;
            }

            .wave-group .bar {
              position: relative;
              display: block;
              width: 200px;
            }

            .wave-group .bar:before,.wave-group .bar:after {
              content: '';
              height: 2px;
              width: 0;
              bottom: 1px;
              position: absolute;
              background: #5264AE;
              transition: 0.2s ease all;
              -moz-transition: 0.2s ease all;
              -webkit-transition: 0.2s ease all;
            }

            .wave-group .bar:before {
              left: 50%;
            }

            .wave-group .bar:after {
              right: 50%;
            }

            .wave-group .input:focus ~ .bar:before,
            .wave-group .input:focus ~ .bar:after {
              width: 50%;
            }
            </style>
          `,
          }}
        />
      }
    />,
    <Card
      information="Tailwind"
      iconColor="#000"
      background="bg-gradient-to-r from-neutral-950"
      content={
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
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-[#000] to-neutral-500"
      content={
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>

          <style jsx>{`
            .wheel-and-hamster {
              --dur: 1s;
              position: relative;
              width: 12em;
              height: 12em;
              font-size: 14px;
            }

            .wheel,
            .hamster,
            .hamster div,
            .spoke {
              position: absolute;
            }

            .wheel,
            .spoke {
              border-radius: 50%;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            .wheel {
              background: radial-gradient(
                100% 100% at center,
                hsla(0, 0%, 60%, 0) 47.8%,
                hsl(0, 0%, 60%) 48%
              );
              z-index: 2;
            }

            .hamster {
              animation: hamster var(--dur) ease-in-out infinite;
              top: 50%;
              left: calc(50% - 3.5em);
              width: 7em;
              height: 3.75em;
              transform: rotate(4deg) translate(-0.8em, 1.85em);
              transform-origin: 50% 0;
              z-index: 1;
            }

            .hamster__head {
              animation: hamsterHead var(--dur) ease-in-out infinite;
              background: hsl(30, 90%, 55%);
              border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
              box-shadow: 0 -0.25em 0 hsl(30, 90%, 80%) inset,
                0.75em -1.55em 0 hsl(30, 90%, 90%) inset;
              top: 0;
              left: -2em;
              width: 2.75em;
              height: 2.5em;
              transform-origin: 100% 50%;
            }

            .hamster__ear {
              animation: hamsterEar var(--dur) ease-in-out infinite;
              background: hsl(0, 90%, 85%);
              border-radius: 50%;
              box-shadow: -0.25em 0 hsl(30, 90%, 55%) inset;
              top: -0.25em;
              right: -0.25em;
              width: 0.75em;
              height: 0.75em;
              transform-origin: 50% 75%;
            }

            .hamster__eye {
              animation: hamsterEye var(--dur) linear infinite;
              background-color: hsl(0, 0%, 0%);
              border-radius: 50%;
              top: 0.375em;
              left: 1.25em;
              width: 0.5em;
              height: 0.5em;
            }

            .hamster__nose {
              background: hsl(0, 90%, 75%);
              border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
              top: 0.75em;
              left: 0;
              width: 0.2em;
              height: 0.25em;
            }

            .hamster__body {
              animation: hamsterBody var(--dur) ease-in-out infinite;
              background: hsl(30, 90%, 90%);
              border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
              box-shadow: 0.1em 0.75em 0 hsl(30, 90%, 55%) inset,
                0.15em -0.5em 0 hsl(30, 90%, 80%) inset;
              top: 0.25em;
              left: 2em;
              width: 4.5em;
              height: 3em;
              transform-origin: 17% 50%;
              transform-style: preserve-3d;
            }

            .hamster__limb--fr,
            .hamster__limb--fl {
              clip-path: polygon(
                0 0,
                100% 0,
                70% 80%,
                60% 100%,
                0% 100%,
                40% 80%
              );
              top: 2em;
              left: 0.5em;
              width: 1em;
              height: 1.5em;
              transform-origin: 50% 0;
            }

            .hamster__limb--fr {
              animation: hamsterFRLimb var(--dur) linear infinite;
              background: linear-gradient(
                hsl(30, 90%, 80%) 80%,
                hsl(0, 90%, 75%) 80%
              );
              transform: rotate(15deg) translateZ(-1px);
            }

            .hamster__limb--fl {
              animation: hamsterFLLimb var(--dur) linear infinite;
              background: linear-gradient(
                hsl(30, 90%, 90%) 80%,
                hsl(0, 90%, 85%) 80%
              );
              transform: rotate(15deg);
            }

            .hamster__limb--br,
            .hamster__limb--bl {
              border-radius: 0.75em 0.75em 0 0;
              clip-path: polygon(
                0 0,
                100% 0,
                100% 30%,
                70% 90%,
                70% 100%,
                30% 100%,
                40% 90%,
                0% 30%
              );
              top: 1em;
              left: 2.8em;
              width: 1.5em;
              height: 2.5em;
              transform-origin: 50% 30%;
            }

            .hamster__limb--br {
              animation: hamsterBRLimb var(--dur) linear infinite;
              background: linear-gradient(
                hsl(30, 90%, 80%) 90%,
                hsl(0, 90%, 75%) 90%
              );
              transform: rotate(-25deg) translateZ(-1px);
            }

            .hamster__limb--bl {
              animation: hamsterBLLimb var(--dur) linear infinite;
              background: linear-gradient(
                hsl(30, 90%, 90%) 90%,
                hsl(0, 90%, 85%) 90%
              );
              transform: rotate(-25deg);
            }

            .hamster__tail {
              animation: hamsterTail var(--dur) linear infinite;
              background: hsl(0, 90%, 85%);
              border-radius: 0.25em 50% 50% 0.25em;
              box-shadow: 0 -0.2em 0 hsl(0, 90%, 75%) inset;
              top: 1.5em;
              right: -0.5em;
              width: 1em;
              height: 0.5em;
              transform: rotate(30deg) translateZ(-1px);
              transform-origin: 0.25em 0.25em;
            }

            .spoke {
              animation: spoke var(--dur) linear infinite;
              background: radial-gradient(
                  100% 100% at center,
                  hsl(0, 0%, 60%) 4.8%,
                  hsla(0, 0%, 60%, 0) 5%
                ),
                linear-gradient(
                    hsla(0, 0%, 55%, 0) 46.9%,
                    hsl(0, 0%, 65%) 47% 52.9%,
                    hsla(0, 0%, 65%, 0) 53%
                  )
                  50% 50% / 99% 99% no-repeat;
            }

            /* Animations */
            @keyframes hamster {
              from,
              to {
                transform: rotate(4deg) translate(-0.8em, 1.85em);
              }

              50% {
                transform: rotate(0) translate(-0.8em, 1.85em);
              }
            }

            @keyframes hamsterHead {
              from,
              25%,
              50%,
              75%,
              to {
                transform: rotate(0);
              }

              12.5%,
              37.5%,
              62.5%,
              87.5% {
                transform: rotate(8deg);
              }
            }

            @keyframes hamsterEye {
              from,
              90%,
              to {
                transform: scaleY(1);
              }

              95% {
                transform: scaleY(0);
              }
            }

            @keyframes hamsterEar {
              from,
              25%,
              50%,
              75%,
              to {
                transform: rotate(0);
              }

              12.5%,
              37.5%,
              62.5%,
              87.5% {
                transform: rotate(12deg);
              }
            }

            @keyframes hamsterBody {
              from,
              25%,
              50%,
              75%,
              to {
                transform: rotate(0);
              }

              12.5%,
              37.5%,
              62.5%,
              87.5% {
                transform: rotate(-2deg);
              }
            }

            @keyframes hamsterFRLimb {
              from,
              25%,
              50%,
              75%,
              to {
                transform: rotate(50deg) translateZ(-1px);
              }

              12.5%,
              37.5%,
              62.5%,
              87.5% {
                transform: rotate(-30deg) translateZ(-1px);
              }
            }

            @keyframes hamsterFLLimb {
              from,
              25%,
              50%,
              75%,
              to {
                transform: rotate(-30deg);
              }

              12.5%,
              37.5%,
              62.5%,
              87.5% {
                transform: rotate(50deg);
              }
            }

            @keyframes hamsterBRLimb {
              from,
              25%,
              50%,
              75%,
              to {
                transform: rotate(-60deg) translateZ(-1px);
              }

              12.5%,
              37.5%,
              62.5%,
              87.5% {
                transform: rotate(20deg) translateZ(-1px);
              }
            }

            @keyframes hamsterBLLimb {
              from,
              25%,
              50%,
              75%,
              to {
                transform: rotate(20deg);
              }

              12.5%,
              37.5%,
              62.5%,
              87.5% {
                transform: rotate(-60deg);
              }
            }

            @keyframes hamsterTail {
              from,
              25%,
              50%,
              75%,
              to {
                transform: rotate(30deg) translateZ(-1px);
              }

              12.5%,
              37.5%,
              62.5%,
              87.5% {
                transform: rotate(10deg) translateZ(-1px);
              }
            }

            @keyframes spoke {
              from {
                transform: rotate(0);
              }

              to {
                transform: rotate(-1turn);
              }
            }
          `}</style>
        </div>
      }
    />,
    <Card
      information="Css"
      background="bg-gradient-to-r from-slate-950 to-slate-900"
      iconColor="#fff"
      content={
        <div className="card-container">
          <div className="card-playing">
            <div className="card-image"></div>
            <div className="card-wave"></div>
            <div className="card-wave"></div>
            <div className="card-wave"></div>
            <div className="card-infotop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="card-icon"
              >
                <path
                  fill="currentColor"
                  d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                ></path>
              </svg>
              <br />
              UI / EX Designer
              <br />
              <div className="card-name">Luan Carlos</div>
            </div>
          </div>
          <style jsx>{`
            .card-container {
              margin: 100px auto;
              background: transparent;
              box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
              position: relative;
              width: 200px;
              height: 240px;
              border-radius: 16px;
              overflow: hidden;
            }

            .card-playing {
              position: relative;
              width: 100%;
              height: 100%;
            }

            .card-image {
              position: absolute;
              width: 100%;
              height: 100%;
            }

            .card-wave {
              position: absolute;
              width: 540px;
              height: 700px;
              opacity: 0.6;
              left: 0;
              top: 0;
              margin-left: -50%;
              margin-top: -70%;
              background: linear-gradient(
                744deg,
                #af40ff,
                #5b42f3 60%,
                #00ddeb
              );
            }

            .card-wave:nth-child(2),
            .card-wave:nth-child(3) {
              top: 210px;
            }

            .card-playing .card-wave {
              border-radius: 40%;
              animation: wave 3000ms infinite linear;
            }

            .card-wave {
              border-radius: 40%;
              animation: wave 55s infinite linear;
            }

            .card-playing .card-wave:nth-child(2) {
              animation-duration: 4000ms;
            }

            .card-wave:nth-child(2) {
              animation-duration: 50s;
            }

            .card-playing .card-wave:nth-child(3) {
              animation-duration: 5000ms;
            }

            .card-wave:nth-child(3) {
              animation-duration: 45s;
            }

            @keyframes wave {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .card-icon {
              width: 3em;
              margin-top: -1em;
              padding-bottom: 1em;
            }

            .card-infotop {
              text-align: center;
              font-size: 20px;
              position: absolute;
              top: 5.6em;
              left: 0;
              right: 0;
              color: rgb(255, 255, 255);
              font-weight: 600;
            }

            .card-name {
              font-size: 14px;
              font-weight: 100;
              position: relative;
              top: 1em;
              text-transform: lowercase;
            }
          `}</style>
        </div>
      }
    />,
    <Card
      information="Css"
      iconColor="#fff"
      background="#242424"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="glow-button">Button</button>
          <style>
            .glow-button {
              --glow-color: rgb(217, 176, 255);
              --glow-spread-color: rgba(191, 123, 255, 0.781);
              --enhanced-glow-color: rgb(231, 206, 255);
              --btn-color: rgb(100, 61, 136);
              border: 0.25em solid var(--glow-color);
              padding: 1em 3em;
              color: var(--glow-color);
              font-size: 15px;
              font-weight: bold;
              background-color: var(--btn-color);
              border-radius: 1em;
              outline: none;
              box-shadow: 0 0 1em 0.25em var(--glow-color),
                0 0 4em 1em var(--glow-spread-color),
                inset 0 0 0.75em 0.25em var(--glow-color);
              text-shadow: 0 0 0.5em var(--glow-color);
              position: relative;
              transition: all 0.3s;
            }
            .glow-button::after {
              pointer-events: none;
              content: "";
              position: absolute;
              top: 120%;
              left: 0;
              height: 100%;
              width: 100%;
              background-color: var(--glow-spread-color);
              filter: blur(2em);
              opacity: 0.7;
              transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
            }
            .glow-button:hover {
              color: var(--btn-color);
              background-color: var(--glow-color);
              box-shadow: 0 0 1em 0.25em var(--glow-color),
                0 0 4em 2em var(--glow-spread-color),
                inset 0 0 0.75em 0.25em var(--glow-color);
            }
            .glow-button:active {
              box-shadow: 0 0 0.6em 0.25em var(--glow-color),
                0 0 2.5em 2em var(--glow-spread-color),
                inset 0 0 0.5em 0.25em var(--glow-color);
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-r from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <button class="space-btn" type="button">
          <strong class="space-text">SPACE</strong>
          <div class="stars-container">
            <div class="stars"></div>
          </div>
          <div class="glow-effect">
            <div class="glow-circle glow-circle1"></div>
            <div class="glow-circle glow-circle2"></div>
          </div>
        </button>
        <style>
          .space-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 13rem;
            height: 3rem;
            background-size: 300% 300%;
            cursor: pointer;
            backdrop-filter: blur(1rem);
            border-radius: 5rem;
            transition: 0.5s;
            animation: gradientAnimation 5s ease infinite;
            border: double 4px transparent;
            background-image: linear-gradient(#212121, #212121),
              linear-gradient(
                137.48deg,
                #ffdb3b 10%,
                #fe53bb 45%,
                #8f51ea 67%,
                #0044ff 87%
              );
            background-origin: border-box;
            background-clip: content-box, border-box;
            position: relative;
            overflow: hidden;
          }

          .stars-container {
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            overflow: hidden;
            transition: 0.5s;
            backdrop-filter: blur(1rem);
            border-radius: 5rem;
          }

          .space-text {
            z-index: 2;
            font-family: "Avalors Personal Use";
            font-size: 12px;
            letter-spacing: 5px;
            color: #ffffff;
            text-shadow: 0 0 4px white;
          }

          .glow-effect {
            position: absolute;
            display: flex;
            width: 12rem;
          }

          .glow-circle {
            width: 100%;
            height: 30px;
            filter: blur(2rem);
            animation: pulseAnimation 4s infinite;
            z-index: -1;
          }

          .glow-circle1 {
            background: rgba(254, 83, 186, 0.636);
          }

          .glow-circle2 {
            background: rgba(142, 81, 234, 0.704);
          }

          .space-btn:hover .stars-container {
            z-index: 1;
            background-color: #212121;
          }

          .space-btn:hover {
            transform: scale(1.1);
          }

          .space-btn:active {
            border: double 4px #fe53bb;
            background-origin: border-box;
            background-clip: content-box, border-box;
            animation: none;
          }

          .space-btn:active .glow-circle {
            background: #fe53bb;
          }

          .stars {
            position: relative;
            background: transparent;
            width: 200rem;
            height: 200rem;
          }

          .stars::after {
            content: "";
            position: absolute;
            top: -10rem;
            left: -100rem;
            width: 100%;
            height: 100%;
            animation: starRotateAnimation 90s linear infinite;
            background-image: radial-gradient(#ffffff 1px, transparent 1%);
            background-size: 50px 50px;
          }

          .stars::before {
            content: "";
            position: absolute;
            top: 0;
            left: -50%;
            width: 170%;
            height: 500%;
            animation: starAnimation 60s linear infinite;
            background-image: radial-gradient(#ffffff 1px, transparent 1%);
            background-size: 50px 50px;
            opacity: 0.5;
          }

          @keyframes starAnimation {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-135rem);
            }
          }

          @keyframes starRotateAnimation {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0);
            }
          }

          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes pulseAnimation {
            0% {
              transform: scale(0.75);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
            }
            70% {
              transform: scale(1);
              box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
            }
            100% {
              transform: scale(0.75);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
          }
        </style>
      `,
          }}
        />
      }
    />,
  ];

  const cardsToLeft_TwoColumn = [
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <label class="sus-hamburger-1a2b">
            <input type="checkbox">
            <svg viewBox="0 0 32 32">
              <path class="sus-line-1a2b sus-line-top-bottom-1a2b" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path class="sus-line-1a2b" d="M7 16 27 16"></path>
            </svg>
          </label>
          <style>
            .sus-hamburger-1a2b {
              cursor: pointer;
            }

            .sus-hamburger-1a2b input {
              display: none;
            }

            .sus-hamburger-1a2b svg {
              height: 3em;
              transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
            }

            .sus-line-1a2b {
              fill: none;
              stroke: white;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 3;
              transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                          stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
            }

            .sus-line-top-bottom-1a2b {
              stroke-dasharray: 12 63;
            }

            .sus-hamburger-1a2b input:checked + svg {
              transform: rotate(-45deg);
            }

            .sus-hamburger-1a2b input:checked + svg .sus-line-top-bottom-1a2b {
              stroke-dasharray: 20 300;
              stroke-dashoffset: -32.42;
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div class="unique-container-abc123">
              <div class="unique-radio-wrapper-def456">
                <input class="unique-input-ghi789" name="btn" id="unique-value-1" type="radio">
                <div class="unique-btn-jkl012">
                  <span aria-hidden="">_</span>Cyber
                  <span class="unique-btn__glitch-mno345" aria-hidden="">_Cyber🦾</span>
                  <label class="unique-number-pqr678">r1</label>
                </div>
              </div>
              <div class="unique-radio-wrapper-stu901">
                <input class="unique-input-vwx234" name="btn" id="unique-value-2" checked="true" type="radio">
                <div class="unique-btn-yza567">
                  _Radio<span aria-hidden="">_</span>
                  <span class="unique-btn__glitch-bcd890" aria-hidden="">_R_a_d_i_o_</span>
                  <label class="unique-number-efg123">r2</label>
                </div>
              </div>
              <div class="unique-radio-wrapper-hij456">
                <input class="unique-input-klm789" name="btn" id="unique-value-3" type="radio">
                <div class="unique-btn-nop012">
                  Buttons<span aria-hidden=""></span>
                  <span class="unique-btn__glitch-qrstuv" aria-hidden="">Buttons_</span>
                  <label class="unique-number-wxy345">r3</label>
                </div> 
              </div>
            </div>
            <style>
              .unique-container-abc123 {
                display: flex;
                flex-direction: row;
              }
  
              .unique-radio-wrapper-def456, .unique-radio-wrapper-stu901, .unique-radio-wrapper-hij456 {
                position: relative;
                height: 38px;
                width: 84px;
                margin: 3px;
              }
  
              .unique-radio-wrapper-def456 .unique-input-ghi789, 
              .unique-radio-wrapper-stu901 .unique-input-vwx234,
              .unique-radio-wrapper-hij456 .unique-input-klm789 {
                position: absolute;
                height: 100%;
                width: 100%;
                margin: 0;
                cursor: pointer;
                z-index: 10;
                opacity: 0;
              }
  
              .unique-btn-jkl012, .unique-btn-yza567, .unique-btn-nop012 {
                --primary: #ff184c;
                --shadow-primary: #fded00;
                --color: white;
                --font-size: 9px;
                --shadow-primary-hue: 180;
                --shadow-secondary-hue: 60;
                --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
                --clip: polygon(11% 0, 95% 0, 100% 25%, 90% 90%, 95% 90%, 85% 90%, 85% 100%, 7% 100%, 0 80%);
                --border: 5px;
                --shimmy-distance: 5;
                --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
                --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
                --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
                --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
                --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
                --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
                --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
                color: var(--color);
                text-transform: uppercase;
                font-size: var(--font-size);
                letter-spacing: 3px;
                position: relative;
                font-weight: 900;
                width: 100%;
                height: 100%;
                line-height: 38px;
                text-align: center;
                transition: background 0.2s, 0.3s;
              }
  
              .unique-input-ghi789:checked + .unique-btn-jkl012,
              .unique-input-vwx234:checked + .unique-btn-yza567,
              .unique-input-klm789:checked + .unique-btn-nop012 {
                --primary: #8B00FF;
                --shadow-primary: #00e572;
              }
  
              .unique-input-ghi789:hover + .unique-btn-jkl012,
              .unique-input-vwx234:hover + .unique-btn-yza567,
              .unique-input-klm789:hover + .unique-btn-nop012 {
                --primary: #cc133c;
                --font-size: 11px;
              }
  
              .unique-btn-jkl012:after, .unique-btn-yza567:after, .unique-btn-nop012:after,
              .unique-btn-jkl012:before, .unique-btn-yza567:before, .unique-btn-nop012:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                clip-path: var(--clip);
                z-index: -1;
              }
  
              .unique-btn-jkl012:before {
                background: var(--shadow-primary);
                transform: translate(var(--border), 0);
              }
  
              .unique-btn-yza567:before {
                background: var(--shadow-primary);
                transform: translate(var(--border), 0);
              }
  
              .unique-btn-nop012:before {
                background: var(--shadow-primary);
                transform: translate(var(--border), 0);
              }
  
              .unique-btn-jkl012:after {
                background: var(--primary);
              }
  
              .unique-btn-yza567:after {
                background: var(--primary);
              }
  
              .unique-btn-nop012:after {
                background: var(--primary);
              }
  
              .unique-btn__glitch-mno345,
              .unique-btn__glitch-bcd890,
              .unique-btn__glitch-qrstuv {
                position: absolute;
                top: calc(var(--border) * -1);
                left: calc(var(--border) * -1);
                right: calc(var(--border) * -1);
                bottom: calc(var(--border) * -1);
                background: var(--shadow-primary);
                text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
                clip-path: var(--clip);
                animation: glitch 2s infinite;
                display: none;
              }
  
              .unique-input-ghi789:hover + .unique-btn-jkl012 .unique-btn__glitch-mno345,
              .unique-input-vwx234:hover + .unique-btn-yza567 .unique-btn__glitch-bcd890,
              .unique-input-klm789:hover + .unique-btn-nop012 .unique-btn__glitch-qrstuv {
                display: block;
              }
  
              .unique-input-ghi789:checked + .unique-btn-jkl012 .unique-btn__glitch-mno345,
              .unique-input-vwx234:checked + .unique-btn-yza567 .unique-btn__glitch-bcd890,
              .unique-input-klm789:checked + .unique-btn-nop012 .unique-btn__glitch-qrstuv {
                display: block;
                animation: glitch 5s infinite;
              }
  
              .unique-btn__glitch-mno345:before,
              .unique-btn__glitch-bcd890:before,
              .unique-btn__glitch-qrstuv:before {
                content: '';
                position: absolute;
                top: calc(var(--border) * 1);
                right: calc(var(--border) * 1);
                bottom: calc(var(--border) * 1);
                left: calc(var(--border) * 1);
                clip-path: var(--clip);
                background: var(--primary);
                z-index: -1;
              }
  
              .unique-number-pqr678, .unique-number-efg123, .unique-number-wxy345 {
                background: var(--shadow-primary);
                color: #323232;
                font-size: 5.5px;
                font-weight: 700;
                letter-spacing: 1px;
                position: absolute;
                width: 15px;
                height: 6px;
                top: 0;
                left: 81%;
                line-height: 6.2px;
              }
  
              @keyframes glitch {
                0% {
                  clip-path: var(--clip-one);
                }
  
                2%, 8% {
                  clip-path: var(--clip-two);
                  transform: translate(calc(var(--shimmy-distance) * -1%), 0);
                }
  
                6% {
                  clip-path: var(--clip-two);
                  transform: translate(calc(var(--shimmy-distance) * 1%), 0);
                }
  
                9% {
                  clip-path: var(--clip-two);
                  transform: translate(0, 0);
                }
  
                10% {
                  clip-path: var(--clip-three);
                  transform: translate(calc(var(--shimmy-distance) * 1%), 0);
                }
  
                13% {
                  clip-path: var(--clip-three);
                  transform: translate(0, 0);
                }
  
                14%, 21% {
                  clip-path: var(--clip-four);
                  transform: translate(calc(var(--shimmy-distance) * 1%), 0);
                }
  
                25% {
                  clip-path: var(--clip-five);
                  transform: translate(calc(var(--shimmy-distance) * 1%), 0);
                }
  
                30% {
                  clip-path: var(--clip-five);
                  transform: translate(calc(var(--shimmy-distance) * -1%), 0);
                }
  
                35%, 45% {
                  clip-path: var(--clip-six);
                  transform: translate(calc(var(--shimmy-distance) * -1%));
                }
  
                40% {
                  clip-path: var(--clip-six);
                  transform: translate(calc(var(--shimmy-distance) * 1%));
                }
  
                50% {
                  clip-path: var(--clip-six);
                  transform: translate(0, 0);
                }
  
                55% {
                  clip-path: var(--clip-seven);
                  transform: translate(calc(var(--shimmy-distance) * 1%), 0);
                }
  
                60% {
                  clip-path: var(--clip-seven);
                  transform: translate(0, 0);
                }
  
                31%, 61%, 100% {
                  clip-path: var(--clip-four);
                }
              }
            </style>
          `,
          }}
        />
      }
    />,
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-l from-gray-950 to-gray-900"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <div class="unique-wrapper-123">
            <div class="unique-circle-001"></div>
            <div class="unique-circle-002"></div>
            <div class="unique-circle-003"></div>
            <div class="unique-shadow-001"></div>
            <div class="unique-shadow-002"></div>
            <div class="unique-shadow-003"></div>
        </div>
        <style>
        .unique-wrapper-123 {
          width: 200px;
          height: 60px;
          position: relative;
          z-index: 1;
        }

        .unique-circle-001,
        .unique-circle-002,
        .unique-circle-003 {
          width: 20px;
          height: 20px;
          position: absolute;
          border-radius: 50%;
          background-color: #fff;
          left: 15%;
          transform-origin: 50%;
          animation: unique-circle-animation-001 .5s alternate infinite ease;
        }

        @keyframes unique-circle-animation-001 {
          0% {
            top: 60px;
            height: 5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
          }

          40% {
            height: 20px;
            border-radius: 50%;
            transform: scaleX(1);
          }

          100% {
            top: 0%;
          }
        }

        .unique-circle-002 {
          left: 45%;
          animation-delay: .2s;
        }

        .unique-circle-003 {
          left: auto;
          right: 15%;
          animation-delay: .3s;
        }

        .unique-shadow-001,
        .unique-shadow-002,
        .unique-shadow-003 {
          width: 20px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.9);
          position: absolute;
          top: 62px;
          transform-origin: 50%;
          z-index: -1;
          left: 15%;
          filter: blur(1px);
          animation: unique-shadow-animation-001 .5s alternate infinite ease;
        }

        @keyframes unique-shadow-animation-001 {
          0% {
            transform: scaleX(1.5);
          }

          40% {
            transform: scaleX(1);
            opacity: .7;
          }

          100% {
            transform: scaleX(.2);
            opacity: .4;
          }
        }

        .unique-shadow-002 {
          left: 45%;
          animation-delay: .2s;
        }

        .unique-shadow-003 {
          left: auto;
          right: 15%;
          animation-delay: .3s;
        }

        </style>
      `,
          }}
        />
      }
    />,
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <div class="unique-card-abc">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            <div class="unique-card-content-def">
              <p class="unique-card-title-ghi">Card Title</p>
              <p class="unique-card-description-jkl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <style>
          .unique-card-abc {
            position: relative;
            width: 200px;
            height: 170px;
            background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          }

          .unique-card-abc svg {
            width: 48px;
            fill: #333;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          }

          .unique-card-abc:hover {
            transform: rotate(-5deg) scale(1.1);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .unique-card-content-def {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            width: 100%;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            background-color: #fff;
            opacity: 0;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          }

          .unique-card-abc:hover .unique-card-content-def {
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }

          .unique-card-title-ghi {
            margin: 0;
            font-size: 24px;
            color: #333;
            font-weight: 700;
          }

          .unique-card-description-jkl {
            margin: 10px 0 0;
            font-size: 14px;
            color: #777;
            line-height: 1.4;
          }

          .unique-card-abc:hover svg {
            scale: 0;
            transform: rotate(-45deg);
          }

          </style>
        `,
          }}
        />
      }
    />,
    <Card
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-r from-green-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <label class="switch-45987">
              <input checked="" type="checkbox">
              <div class="slider-45987">
                  <div class="circle-45987">
                      <svg class="cross-45987" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <g>
                              <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                          </g>
                      </svg>
                      <svg class="checkmark-45987" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <g>
                              <path class="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                          </g>
                      </svg>
                  </div>
              </div>
          </label>
          <style>
            /* Unique Styles */
            .switch-45987 {
              /* switch */
              --switch-width: 46px;
              --switch-height: 24px;
              --switch-bg: rgb(131, 131, 131);
              --switch-checked-bg: rgb(0, 218, 80);
              --switch-offset: calc((var(--switch-height) - var(--circle-diameter)) / 2);
              --switch-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);
              /* circle */
              --circle-diameter: 18px;
              --circle-bg: #fff;
              --circle-shadow: 1px 1px 2px rgba(146, 146, 146, 0.45);
              --circle-checked-shadow: -1px 1px 2px rgba(163, 163, 163, 0.45);
              --circle-transition: var(--switch-transition);
              /* icon */
              --icon-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);
              --icon-cross-color: var(--switch-bg);
              --icon-cross-size: 6px;
              --icon-checkmark-color: var(--switch-checked-bg);
              --icon-checkmark-size: 10px;
              /* effect line */
              --effect-width: calc(var(--circle-diameter) / 2);
              --effect-height: calc(var(--effect-width) / 2 - 1px);
              --effect-bg: var(--circle-bg);
              --effect-border-radius: 1px;
              --effect-transition: all .2s ease-in-out;
            }

            .switch-45987 input {
              display: none;
            }

            .switch-45987 {
              display: inline-block;
            }

            .switch-45987 svg {
              -webkit-transition: var(--icon-transition);
              -o-transition: var(--icon-transition);
              transition: var(--icon-transition);
              position: absolute;
              height: auto;
            }

            .switch-45987 .checkmark-45987 {
              width: var(--icon-checkmark-size);
              color: var(--icon-checkmark-color);
              -webkit-transform: scale(0);
              -ms-transform: scale(0);
              transform: scale(0);
            }

            .switch-45987 .cross-45987 {
              width: var(--icon-cross-size);
              color: var(--icon-cross-color);
            }

            .slider-45987 {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              width: var(--switch-width);
              height: var(--switch-height);
              background: var(--switch-bg);
              border-radius: 999px;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              position: relative;
              -webkit-transition: var(--switch-transition);
              -o-transition: var(--switch-transition);
              transition: var(--switch-transition);
              cursor: pointer;
            }

            .circle-45987 {
              width: var(--circle-diameter);
              height: var(--circle-diameter);
              background: var(--circle-bg);
              border-radius: inherit;
              -webkit-box-shadow: var(--circle-shadow);
              box-shadow: var(--circle-shadow);
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              -webkit-transition: var(--circle-transition);
              -o-transition: var(--circle-transition);
              transition: var(--circle-transition);
              z-index: 1;
              position: absolute;
              left: var(--switch-offset);
            }

            .slider-45987::before {
              content: "";
              position: absolute;
              width: var(--effect-width);
              height: var(--effect-height);
              left: calc(var(--switch-offset) + (var(--effect-width) / 2));
              background: var(--effect-bg);
              border-radius: var(--effect-border-radius);
              -webkit-transition: var(--effect-transition);
              -o-transition: var(--effect-transition);
              transition: var(--effect-transition);
            }

            /* actions */
            .switch-45987 input:checked+.slider-45987 {
              background: var(--switch-checked-bg);
            }

            .switch-45987 input:checked+.slider-45987 .checkmark-45987 {
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
            }

            .switch-45987 input:checked+.slider-45987 .cross-45987 {
              -webkit-transform: scale(0);
              -ms-transform: scale(0);
              transform: scale(0);
            }

            .switch-45987 input:checked+.slider-45987::before {
              left: calc(100% - var(--effect-width) - (var(--effect-width) / 2) - var(--switch-offset));
            }

            .switch-45987 input:checked+.slider-45987 .circle-45987 {
              left: calc(100% - var(--circle-diameter) - var(--switch-offset));
              -webkit-box-shadow: var(--circle-checked-shadow);
              box-shadow: var(--circle-checked-shadow);
            }
          </style>
        `,
          }}
        />
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
      <div className="scroller" data-direction="left" data-speed="fast">
        <div className="scroller__inner">
          {cardsToLeft_TwoColumn}
          {cardsToLeft_TwoColumn}
        </div>
      </div>
    </div>
  );
};
