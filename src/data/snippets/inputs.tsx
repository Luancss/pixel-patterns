import type { Snippet } from "@/types/snippet";

export const inputSnippets: Snippet[] = [
  {
    category: "css",
    background: "bg-gradient-to-r from-cyan-700/40",
    iconColor: "#fff",
    html: `
          <input placeholder="Enter your text..." class="input-geohexagon-shard-oblivion-83t7" name="text" type="text">

          <style>
            .input-geohexagon-shard-oblivion-83t7 {
            background-color: #212121;
            max-width: 190px;
            height: 40px;
            padding: 10px;
            border: 2px solid white;
            border-radius: 5px;
          }

          .input-geohexagon-shard-oblivion-83t7:focus {
            color: rgb(0, 255, 255);
            background-color: #212121;
            outline-color: rgb(0, 255, 255);
            box-shadow: -3px -3px 15px rgb(0, 255, 255);
            transition: .1s;
            transition-property: box-shadow;
          }

          </style>
        `,
  },
  {
    category: "css",
    background: "bg-gradient-to-b from-slate-950",
    iconColor: "#fff",
    html: `
          <div class="group-delta-helix-quartz-19bz">
          <svg class="icon-delta-helix-quartz-19bz" aria-hidden="true" viewBox="0 0 24 24">
            <g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g>
          </svg>
          <input placeholder="Search" type="search" class="input-delta-helix-quartz-19bz">
        </div>
          <style>
            .group-delta-helix-quartz-19bz {
            display: flex;
            line-height: 28px;
            align-items: center;
            position: relative;
            max-width: 190px;
          }

          .input-delta-helix-quartz-19bz {
            width: 100%;
            height: 40px;
            line-height: 28px;
            padding: 0 1rem;
            padding-left: 2.5rem;
            border: 2px solid transparent;
            border-radius: 8px;
            outline: none;
            background-color: #f3f3f4;
            color: #0d0c22;
            transition: .3s ease;
          }

          .input-delta-helix-quartz-19bz::placeholder {
            color: #9e9ea7;
          }

          .input-delta-helix-quartz-19bz:focus,
          .input-delta-helix-quartz-19bz:hover {
            outline: none;
            border-color: rgba(234,76,137,0.4);
            background-color: #fff;
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
          }

          .icon-delta-helix-quartz-19bz {
            position: absolute;
            left: 1rem;
            fill: #9e9ea7;
            width: 1rem;
            height: 1rem;
          }
          </style>
        `,
  },
  {
    category: "css",
    background: "bg-gradient-to-r from-indigo-700/20",
    iconColor: "#fff",
    html: `
  <input
  placeholder="Type something here...."
  class="polaris-input-field"
  name="text"
  type="text"
  />
<style>
.polaris-input-field {
   color: white;
   border: 2px solid #8707ff;
   border-radius: 10px;
   padding: 10px 25px;
   background: transparent;
   max-width: 190px;
}

.polaris-input-field:active {
  box-shadow: 2px 2px 15px #8707ff inset;
}
          </style>
        `,
  },
  {
    category: "css",
    background: "bg-[#212121]",
    iconColor: "#fff",
    html: `

          <div class="input-group-cosmic-cascade-tetra-49m7">
          <input required="" type="text" name="text" autocomplete="off" class="input-cosmic-cascade-tetra-49m7">
          <label class="user-label-cosmic-cascade-tetra-49m7">First Name</label>
        </div>

          <style>

            .input-group-cosmic-cascade-tetra-49m7 {
              position: relative;
            }

            .input-cosmic-cascade-tetra-49m7 {
              border: solid 1.5px #9e9e9e;
              border-radius: 1rem;
              background: none;
              padding: 1rem;
              font-size: 1rem;
              color: #f5f5f5;
              transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
            }

            .user-label-cosmic-cascade-tetra-49m7 {
              position: absolute;
              left: 15px;
              color: #e8e8e8;
              pointer-events: none;
              transform: translateY(1rem);
              transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
            }

            .input-cosmic-cascade-tetra-49m7:focus,
            .input-cosmic-cascade-tetra-49m7:valid {
              outline: none;
              border: 1.5px solid #1a73e8;
            }

            .input-cosmic-cascade-tetra-49m7:focus ~ .user-label-cosmic-cascade-tetra-49m7,
            .input-cosmic-cascade-tetra-49m7:valid ~ .user-label-cosmic-cascade-tetra-49m7 {
              transform: translateY(-50%) scale(0.8);
              background-color: #212121;
              padding: 0 .2em;
              color: #2196f3;
            }
          </style>
        `,
  },
  {
    category: "tailwind",
    background: "bg-gray-950",
    iconColor: "#fff",
    content: (
      <div className="input flex flex-col w-fit static">
        <label
          htmlFor="input"
          className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-gray-950 w-fit"
        >
          Password:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Write here..."
          name="input"
          className="border-blue-500 text-white input px-[10px] py-[11px] text-xs bg-gray-950 border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-white/25"
        />
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-l from-gray-700/30",
    iconColor: "#fff",
    content: (
      <input
        placeholder="Enter your name"
        className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
        type="text"
      />
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-t from-purple-950/30",
    iconColor: "#fff",
    content: (
      <div className="relative">
        <input
          placeholder="Search..."
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
          name="search"
          type="search"
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
    ),
  },
  {
    category: "css",
    background: "bg-gradient-to-t from-blue-700",
    iconColor: "#fff",
    html: `
   <div class="searchInterface-globalWrapper">
    <div class="searchInterface-innerFlexContainer">
        <div class="searchInterface-iconSection">
            <div class="searchInterface-iconWrapper">
                <span class="searchInterface-searchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </span>
            </div>
        </div>
        <div class="searchInterface-inputArea">
            <div class="searchInterface-inputSpacer"></div>
            <input type="text" class="searchInterface-textInput" maxlength="2048" name="q" autocapitalize="off" autocomplete="off" title="Search" role="combobox" placeholder="Search Google">
        </div>
        <div class="searchInterface-actionButtons">
            <svg class="searchInterface-voiceSearchIcon" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path>
                <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path>
            </svg>
        </div>
    </div>
</div>
          <style>
            .searchInterface-globalWrapper {
            font-size: 14px;
            font-family: arial, sans-serif;
            color: #202124;
            display: flex;
            z-index: 3;
            height: 44px;
            background: white;
            border: 1px solid #dfe1e5;
            box-shadow: none;
            border-radius: 24px;
            margin: 0 auto;
            width: auto;
            max-width: 224px;
          }

          .searchInterface-globalWrapper:hover {
            box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
            border-color: rgba(223, 225, 229, 0);
          }

          .searchInterface-innerFlexContainer {
            flex: 1;
            display: flex;
            padding: 5px 8px 0 14px;
          }

          .searchInterface-iconSection {
            display: flex;
            align-items: center;
            padding-right: 13px;
            margin-top: -5px;
          }

          .searchInterface-iconWrapper {
            margin: auto;
          }

          .searchInterface-searchIcon {
            margin-top: 3px;
            color: #9aa0a6;
            height: 20px;
            line-height: 20px;
            width: 20px;
            fill: currentColor;
          }

          .searchInterface-inputArea {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
          }

          .searchInterface-inputSpacer {
            color: transparent;
            flex: 100%;
            white-space: pre;
            height: 34px;
            font-size: 16px;
          }

          .searchInterface-textInput {
            background-color: transparent;
            border: none;
            margin: 0;
            padding: 0;
            color: rgba(0, 0, 0, 0.87);
            outline: none;
            display: flex;
            flex: 100%;
            margin-top: -37px;
            height: 34px;
            font-size: 16px;
            max-width: 100%;
            width: 100%;
          }

          .searchInterface-actionButtons {
            display: flex;
            align-items: stretch;
            flex-direction: row;
            margin-top: -5px;
          }

          .searchInterface-voiceSearchIcon {
            display: flex;
            cursor: pointer;
            align-items: center;
            background: transparent;
            outline: none;
            padding: 0 8px;
            width: 2.8em;
          }
          </style>
        `,
  },
  {
    category: "css",
    background: "bg-[#000]",
    iconColor: "#fff",
    html: `
  <label class="inputContainer-label">
  <span class="inputContainer-icon">
    <svg
      class="inputContainer-svgIcon w-6 h-6 text-white-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.25"
        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      ></path>
    </svg>
  </span>
  <input
    type="text"
    class="inputContainer-textInput"
    placeholder="Enter name"
    autocomplete="off"
  />
</label>

          <style>
            .inputContainer-wrapper {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inputContainer-label {
  position: relative;
  display: block;
  width: 250px;
  display: flex;
  border-radius: 6px;
  border: 2px solid #373737;
  padding: 15px 8px 15px 10px;
  text-align: left;
}

.inputContainer-icon {
  position: absolute;
  top: 53%;
  right: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  color: #c5c5c5;
}

.inputContainer-textInput {
  background-color: transparent;
  outline: none;
  border: none;
  color: #c5c5c5;
  font-size: 16px;
}

.inputContainer-svgIcon {
  width: 24px;
  height: 24px;
}

          </style>
        `,
  },
  {
    category: "css",
    background: "bg-[#000000]",
    iconColor: "#fff",
    html: `

        <div class="inputGroup">
            <input type="text" required="" autocomplete="off">
            <label for="name">Name</label>
        </div>
        <style>

          .inputGroup {
            font-family: 'Segoe UI', sans-serif;
            margin: 1em 0 1em 0;
            max-width: 190px;
            position: relative;
          }

          .inputGroup input {
            font-size: 100%;
            padding: 0.8em;
            outline: none;
            border: 2px solid rgb(200, 200, 200);
            background-color: transparent;
            border-radius: 20px;
            width: 100%;
          }

          .inputGroup label {
            font-size: 100%;
            position: absolute;
            left: 0;
            padding: 0.8em;
            margin-left: 0.5em;
            pointer-events: none;
            transition: all 0.3s ease;
            color: #FFF;
          }

          .inputGroup :is(input:focus, input:valid)~label {
            transform: translateY(-50%) scale(.9);
            margin: 0em;
            margin-left: 1.3em;
            padding: 0.4em;
            background-color: #000;
          }

          .inputGroup :is(input:focus, input:valid) {
            border-color: rgb(150, 150, 200);
          }
        </style>
      `,
  },
  {
    category: "css",
    background: "bg-gradient-to-t from-gray-950",
    iconColor: "#fff",
    html: `

      <div class="text-entry-wrapper">
    <input required="required" type="text" class="text-input-field">
    <span class="text-label">Username</span>
    <i class="underline-indicator"></i>
</div>


      <style>
.text-entry-wrapper {
  position: relative;
  width: 196px; /* Define a largura da caixa de entrada */
}

.text-input-field {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}

.text-label {
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: #8f8f8f;
  letter-spacing: 0.05em; /* Corrigido para usar ponto */
  transition: 0.5s;
  pointer-events: none;
}

.text-input-field:valid ~ .text-label,
.text-input-field:focus ~ .text-label {
  color: #45f3ff;
  transform: translateX(-10px) translateY(-34px);
  font-size: 0.75em; /* Corrigido para usar ponto */
}

.underline-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #45f3ff;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
}

.text-input-field:valid ~ .underline-indicator,
.text-input-field:focus ~ .underline-indicator {
  height: 44px;
}

      </style>
    `,
  },
  {
    category: "css",
    background: "bg-gradient-to-t from-green-950",
    iconColor: "#fff",
    html: `
  <div class="textInputWrapper">
      <input placeholder="Type Here" type="text" class="textInput">
  </div>


        <style>
  .textInputWrapper {
    position: relative;
    width: 180px;
    margin: 12px 5px;
    --accent-color: #a3e583;
  }

  .textInputWrapper:before {
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }

  .textInputWrapper:before,
  .textInputWrapper:after {
    content: "";
    left: 0;
    right: 0;
    position: absolute;
    pointer-events: none;
    bottom: -1px;
    z-index: 4;
    width: 100%;
  }

  .textInputWrapper:focus-within:before {
    border-bottom: 1px solid var(--accent-color);
  }

  .textInputWrapper:before {
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }

  .textInputWrapper:focus-within:before {
    border-bottom: 1px solid var(--accent-color);
    transform: scaleX(1);
  }

  .textInputWrapper:focus-within:after {
    border-bottom: 2px solid var(--accent-color);
    transform: scaleX(1);
  }

  .textInputWrapper:after {
    content: "";
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    will-change: transform;
    border-bottom: 2px solid var(--accent-color);
    border-bottom-color: var(--accent-color);
  }

  .textInput::placeholder {
    transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    opacity: 1;
    user-select: none;
    color: rgba(255, 255, 255, 0.582);
  }

  .textInputWrapper .textInput {
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
    max-height: 36px;
    background-color: #252525;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 200ms;
    transition-property: background-color;
    color: #e8e8e8;
    font-size: 14px;
    font-weight: 500;
    padding: 12px;
    width: 100%;
    border-left: none;
    border-bottom: none;
    border-right: none;
  }

  .textInputWrapper .textInput:focus,
  .textInputWrapper .textInput:active {
    outline: none;
  }

  .textInputWrapper:focus-within .textInput,
  .textInputWrapper .textInput:focus,
  .textInputWrapper .textInput:active {
    background-color: #353535;
  }

  .textInputWrapper:focus-within .textInput::placeholder {
    opacity: 0;
  }

        </style>
      `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-t from-gray-950",
    iconColor: "#fff",
    content: (
      <div className="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[270px] bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
        <div className="flex items-center justify-center fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Isolation_Mode"
            data-name="Isolation Mode"
            viewBox="0 0 24 24"
            width="22"
            height="22"
          >
            <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
          </svg>
        </div>
        <input
          title="Name"
          type="text"
          className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
        />
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-t from-slate-950",
    iconColor: "#fff",
    content: (
      <div className="flex flex-col items-end gap-6 w-72">
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            title="Name"
            className="peer h-full w-full rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Input Error
          </label>
        </div>
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            title="Name"
            className="peer h-full w-full rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Input Success
          </label>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-t from-blue-800",
    iconColor: "#fff",
    content: (
      <div className="relative w-full min-w-[200px] h-10">
        <input
          title="Name"
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
          placeholder=""
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500 text-slate-100">
          Input Blue
        </label>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#fff]",
    iconColor: "#000",
    content: (
      <div className="relative flex w-full max-w-[24rem]">
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            title="Email"
            type="email"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            value=""
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Email Address
          </label>
        </div>
        <button
          disabled
          className="!absolute right-1 top-1 select-none rounded bg-blue-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Invite
        </button>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#fff]",
    iconColor: "#000",
    content: (
      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <div className="relative">
          <input
            title="Enter your text"
            className="w-full pl-11 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your text"
          />
          <button
            title="Clear text"
            className="absolute h-8 w-8 left-1 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFF"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#fff]",
    iconColor: "#000",
    content: (
      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <div className="relative">
          <input
            className="w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your text"
          />
          <button
            title="Clear text"
            className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-slate-800 rounded hover:bg-slate-700"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFF"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-r from-gray-950",
    iconColor: "#000",
    content: (
      <div className="grid w-full h-full bg-gray-900 rounded-lg place-items-center">
        <div className="w-72">
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              title="Enter your text"
              type="email"
              className="peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal  !text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email Address
            </label>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#0b0d12]",
    iconColor: "#fff",
    content: (
      <label className="relative block w-64">
        <input
          type="email"
          placeholder=" "
          className="peer w-full rounded-xl border border-white/15 bg-transparent px-4 pb-2 pt-5 text-sm text-white outline-none transition focus:border-sky-400"
        />
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500 transition-all peer-focus:top-3.5 peer-focus:text-xs peer-focus:text-sky-400 peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:text-xs">
          Email address
        </span>
      </label>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-zinc-900 to-black",
    iconColor: "#fff",
    content: (
      <label className="flex w-64 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-400 transition focus-within:border-white/25 focus-within:bg-white/10">
        <svg
          className="size-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="search"
          placeholder="Search docs"
          className="w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
        />
        <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 font-sans text-[11px] text-zinc-400">
          ⌘K
        </kbd>
      </label>
    ),
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-violet-950/50 to-zinc-950",
    iconColor: "#fff",
    content: (
      <label className="block w-60">
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">
          Country
        </span>
        <span className="relative block">
          <select
            defaultValue="br"
            className="w-full appearance-none rounded-xl border border-white/10 bg-zinc-900 px-3.5 py-2.5 pr-10 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/20"
          >
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="de">Germany</option>
            <option value="jp">Japan</option>
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </label>
    ),
  },
  {
    category: "css",
    background: "bg-[#f5f3ff]",
    iconColor: "#000",
    html: `
      <fieldset class="otp-50916">
        <legend>Enter the 6-digit code</legend>
        <div class="otp-50916-fields">
          <input inputmode="numeric" maxlength="1" value="4" aria-label="Digit 1">
          <input inputmode="numeric" maxlength="1" value="8" aria-label="Digit 2">
          <input inputmode="numeric" maxlength="1" value="1" aria-label="Digit 3">
          <input inputmode="numeric" maxlength="1" aria-label="Digit 4">
          <input inputmode="numeric" maxlength="1" aria-label="Digit 5">
          <input inputmode="numeric" maxlength="1" aria-label="Digit 6">
        </div>
      </fieldset>
      <style>
        .otp-50916 {
          margin: 0;
          padding: 0;
          border: 0;
        }
        .otp-50916 legend {
          margin-bottom: 12px;
          color: #4c1d95;
          font-size: 13px;
          font-weight: 600;
        }
        .otp-50916-fields {
          display: flex;
          gap: 8px;
        }
        .otp-50916 input {
          width: 36px;
          height: 46px;
          border: 1px solid #ddd6fe;
          border-radius: 10px;
          background: #fff;
          color: #2e1065;
          font-size: 20px;
          font-weight: 700;
          text-align: center;
          outline: none;
          box-shadow: 0 2px 6px -4px rgba(76, 29, 149, 0.5);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .otp-50916 input:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
        }
        .otp-50916 input:not(:placeholder-shown),
        .otp-50916 input[value] {
          border-color: #a78bfa;
        }
      </style>
    `,
  },
  {
    category: "css",
    background: "bg-gradient-to-br from-[#0c4a6e] to-[#020617]",
    iconColor: "#fff",
    html: `
      <label class="range-73284">
        <span>Volume <output>65%</output></span>
        <input type="range" min="0" max="100" value="65">
      </label>
      <style>
        .range-73284 {
          display: grid;
          gap: 12px;
          width: 240px;
        }
        .range-73284 span {
          display: flex;
          justify-content: space-between;
          color: #e0f2fe;
          font-size: 14px;
          font-weight: 600;
        }
        .range-73284 output {
          color: #7dd3fc;
        }
        .range-73284 input {
          width: 100%;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(90deg, #38bdf8, #6366f1) 0 / 65% 100% no-repeat, #1e293b;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
        }
        .range-73284 input::-webkit-slider-thumb {
          width: 20px;
          height: 20px;
          border: 4px solid #fff;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.6);
          -webkit-appearance: none;
        }
        .range-73284 input::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border: 4px solid #fff;
          border-radius: 50%;
          background: #6366f1;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-[#06100c]",
    iconColor: "#fff",
    content: (
      <label className="block w-64">
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">
          Website
        </span>
        <span className="flex overflow-hidden rounded-xl border border-white/10 bg-zinc-900 text-sm transition focus-within:border-emerald-400">
          <span className="flex items-center border-r border-white/10 bg-white/5 px-3 text-zinc-400">
            https://
          </span>
          <input
            type="text"
            placeholder="yourbrand.com"
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none"
          />
        </span>
        <span className="mt-1.5 block text-xs text-zinc-500">
          We will verify ownership by email.
        </span>
      </label>
    ),
  },
  {
    category: "tailwind",
    background: "bg-[#0a0a10]",
    iconColor: "#fff",
    content: (
      <label className="flex w-64 cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] px-6 py-7 text-center transition hover:border-indigo-400/60 hover:bg-indigo-500/5">
        <span className="flex size-11 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
          <svg
            className="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 18a4 4 0 01-.9-7.9A5 5 0 0116 8a4 4 0 011 7.9M12 12v8M9 15l3-3 3 3" />
          </svg>
        </span>
        <span className="text-sm font-medium text-white">Click to upload</span>
        <span className="text-xs text-zinc-500">PNG, JPG or SVG up to 5MB</span>
        <input type="file" className="sr-only" />
      </label>
    ),
  },
  {
    category: "css",
    background: "bg-[#fafaf9]",
    iconColor: "#000",
    html: `
      <div class="stepper-28451">
        <button aria-label="Decrease">−</button>
        <input type="number" value="2" min="0" aria-label="Quantity">
        <button aria-label="Increase">+</button>
      </div>
      <style>
        .stepper-28451 {
          display: inline-flex;
          align-items: center;
          padding: 4px;
          border: 1px solid #e7e5e4;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 10px 24px -16px rgba(28, 25, 23, 0.5);
        }
        .stepper-28451 button {
          width: 40px;
          height: 40px;
          border: 0;
          border-radius: 10px;
          background: #f5f5f4;
          color: #292524;
          font-size: 20px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .stepper-28451 button:hover {
          background: #e7e5e4;
        }
        .stepper-28451 button:active {
          transform: scale(0.94);
        }
        .stepper-28451 input {
          width: 56px;
          border: 0;
          background: transparent;
          color: #1c1917;
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          outline: none;
          appearance: textfield;
          -moz-appearance: textfield;
        }
        .stepper-28451 input::-webkit-outer-spin-button,
        .stepper-28451 input::-webkit-inner-spin-button {
          margin: 0;
          -webkit-appearance: none;
        }
      </style>
    `,
  },
  {
    category: "tailwind",
    background: "bg-gradient-to-br from-amber-950/40 to-zinc-950",
    iconColor: "#fff",
    content: (
      <div className="w-64 rounded-xl border border-white/10 bg-zinc-900 transition focus-within:border-amber-400/70">
        <textarea
          rows={3}
          placeholder="Leave a comment..."
          className="block w-full resize-none bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
        ></textarea>
        <div className="flex items-center justify-between border-t border-white/10 px-2 py-1.5">
          <div className="flex gap-1 text-zinc-500">
            <button
              aria-label="Attach file"
              className="rounded-md p-1.5 transition hover:bg-white/5 hover:text-zinc-200"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5l-8.5 8.5a5 5 0 01-7-7L14 4.5a3.5 3.5 0 015 5l-8.5 8.5a2 2 0 01-3-3L15 7.5" />
              </svg>
            </button>
            <button
              aria-label="Mention someone"
              className="rounded-md p-1.5 transition hover:bg-white/5 hover:text-zinc-200"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-4 8" />
              </svg>
            </button>
          </div>
          <span className="text-[11px] text-zinc-500">0 / 280</span>
        </div>
      </div>
    ),
  },
];
