"use client";

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  PaginationPrevious,
} from "@/components/ui";
import { Card } from "@/components/cards";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const itemsPerPage = 12;

const CardsCheckboxes = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  let counter = 1;

  const generateKey = () => `card-${counter++}`;

  const cardsInput = [
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-t from-indigo-950 to-violet-950/30"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div id="checklist">
  <input checked="" value="1" name="r" type="checkbox" id="01">
  <label for="01">Bread</label>
  <input value="2" name="r" type="checkbox" id="02">
  <label for="02">Cheese</label>
  <input value="3" name="r" type="checkbox" id="03">
  <label for="03">Coffee</label>
</div>
        <style>
#checklist {
  --background: #fff;
  --text: #414856;
  --check: #4f29f0;
  --disabled: #c3c8de;
  --width: 100px;
  --height: 180px;
  --border-radius: 10px;
  background: var(--background);
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  position: relative;
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  padding: 30px 85px;
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  justify-content: center;
}

#checklist label {
  color: var(--text);
  position: relative;
  cursor: pointer;
  display: grid;
  align-items: center;
  width: fit-content;
  transition: color 0.3s ease;
  margin-right: 20px;
}

#checklist label::before, #checklist label::after {
  content: "";
  position: absolute;
}

#checklist label::before {
  height: 2px;
  width: 8px;
  left: -27px;
  background: var(--check);
  border-radius: 2px;
  transition: background 0.3s ease;
}

#checklist label:after {
  height: 4px;
  width: 4px;
  top: 8px;
  left: -25px;
  border-radius: 50%;
}

#checklist input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  outline: none;
  border: 0;
  margin: 0 15px 0 0;
  cursor: pointer;
  background: var(--background);
  display: grid;
  align-items: center;
  margin-right: 20px;
}

#checklist input[type="checkbox"]::before, #checklist input[type="checkbox"]::after {
  content: "";
  position: absolute;
  height: 2px;
  top: auto;
  background: var(--check);
  border-radius: 2px;
}

#checklist input[type="checkbox"]::before {
  width: 0px;
  right: 60%;
  transform-origin: right bottom;
}

#checklist input[type="checkbox"]::after {
  width: 0px;
  left: 40%;
  transform-origin: left bottom;
}

#checklist input[type="checkbox"]:checked::before {
  animation: check-01 0.4s ease forwards;
}

#checklist input[type="checkbox"]:checked::after {
  animation: check-02 0.4s ease forwards;
}

#checklist input[type="checkbox"]:checked + label {
  color: var(--disabled);
  animation: move 0.3s ease 0.1s forwards;
}

#checklist input[type="checkbox"]:checked + label::before {
  background: var(--disabled);
  animation: slice 0.4s ease forwards;
}

#checklist input[type="checkbox"]:checked + label::after {
  animation: firework 0.5s ease forwards 0.1s;
}

@keyframes move {
  50% {
    padding-left: 8px;
    padding-right: 0px;
  }

  100% {
    padding-right: 4px;
  }
}

@keyframes slice {
  60% {
    width: 100%;
    left: 4px;
  }

  100% {
    width: 100%;
    left: -2px;
    padding-left: 0;
  }
}

@keyframes check-01 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }

  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }

  51% {
    width: 0px;
    top: 8px;
    transform: rotate(45deg);
  }

  100% {
    width: 5px;
    top: 8px;
    transform: rotate(45deg);
  }
}

@keyframes check-02 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }

  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }

  51% {
    width: 0px;
    top: 8px;
    transform: rotate(-45deg);
  }

  100% {
    width: 10px;
    top: 8px;
    transform: rotate(-45deg);
  }
}

@keyframes firework {
  0% {
    opacity: 1;
    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0;
  }
}
        </style>
      `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-t from-zinc-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<label class="ui-bookmark">
    <input type="checkbox">
    <div class="bookmark">
      <svg viewBox="0 0 32 32">
        <g>
          <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
        </g>
      </svg>
    </div>
  </label>
        <style>
.ui-bookmark {
  --icon-size: 24px;
  --icon-secondary-color: rgb(77, 77, 77);
  --icon-hover-color: rgb(97, 97, 97);
  --icon-primary-color: gold;
  --icon-circle-border: 1px solid var(--icon-primary-color);
  --icon-circle-size: 35px;
  --icon-anmt-duration: 0.3s;
}

.ui-bookmark input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: none;
}

.ui-bookmark .bookmark {
  width: var(--icon-size);
  height: auto;
  fill: var(--icon-secondary-color);
  cursor: pointer;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  -webkit-transform-origin: top;
  -ms-transform-origin: top;
  transform-origin: top;
}

.bookmark::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  -webkit-box-shadow: 0 30px 0 -4px var(--icon-primary-color),
    30px 0 0 -4px var(--icon-primary-color),
    0 -30px 0 -4px var(--icon-primary-color),
    -30px 0 0 -4px var(--icon-primary-color),
    -22px 22px 0 -4px var(--icon-primary-color),
    -22px -22px 0 -4px var(--icon-primary-color),
    22px -22px 0 -4px var(--icon-primary-color),
    22px 22px 0 -4px var(--icon-primary-color);
  box-shadow: 0 30px 0 -4px var(--icon-primary-color),
    30px 0 0 -4px var(--icon-primary-color),
    0 -30px 0 -4px var(--icon-primary-color),
    -30px 0 0 -4px var(--icon-primary-color),
    -22px 22px 0 -4px var(--icon-primary-color),
    -22px -22px 0 -4px var(--icon-primary-color),
    22px -22px 0 -4px var(--icon-primary-color),
    22px 22px 0 -4px var(--icon-primary-color);
  border-radius: 50%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
}

.bookmark::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: var(--icon-circle-border);
  opacity: 0;
}

/* actions */

.ui-bookmark:hover .bookmark {
  fill: var(--icon-hover-color);
}

.ui-bookmark input:checked + .bookmark::after {
  -webkit-animation: circles var(--icon-anmt-duration)
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation: circles var(--icon-anmt-duration)
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  -webkit-animation-delay: var(--icon-anmt-duration);
  animation-delay: var(--icon-anmt-duration);
}

.ui-bookmark input:checked + .bookmark {
  fill: var(--icon-primary-color);
  -webkit-animation: bookmark var(--icon-anmt-duration) forwards;
  animation: bookmark var(--icon-anmt-duration) forwards;
  -webkit-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

.ui-bookmark input:checked + .bookmark::before {
  -webkit-animation: circle var(--icon-anmt-duration)
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation: circle var(--icon-anmt-duration)
    cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  -webkit-animation-delay: var(--icon-anmt-duration);
  animation-delay: var(--icon-anmt-duration);
}

@-webkit-keyframes bookmark {
  50% {
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
  }

  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@keyframes bookmark {
  50% {
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
  }

  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@-webkit-keyframes circle {
  from {
    width: 0;
    height: 0;
    opacity: 0;
  }

  90% {
    width: var(--icon-circle-size);
    height: var(--icon-circle-size);
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes circle {
  from {
    width: 0;
    height: 0;
    opacity: 0;
  }

  90% {
    width: var(--icon-circle-size);
    height: var(--icon-circle-size);
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes circles {
  from {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    opacity: 1;
  }

  to {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
  }
}

@keyframes circles {
  from {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    opacity: 1;
  }

  to {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
  }
}
        </style>
      `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-b from-blue-950 to-gray-950/30"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="container">
    <input type="checkbox" id="cbx" style="display: none;">
    <label for="cbx" class="q3aYt9kVw1Z_check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
    </label>
</div>

      <style>
.q3aYt9kVw1Z_check {
  cursor: pointer;
  position: relative;
  margin: auto;
  width: 18px;
  height: 18px;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);
}

.q3aYt9kVw1Z_check:before {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(34,50,84,0.03);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.q3aYt9kVw1Z_check svg {
  position: relative;
  z-index: 1;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #c8ccd4;
  stroke-width: 1.5;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
}

.q3aYt9kVw1Z_check svg path {
  stroke-dasharray: 60;
  stroke-dashoffset: 0;
}

.q3aYt9kVw1Z_check svg polyline {
  stroke-dasharray: 22;
  stroke-dashoffset: 66;
}

.q3aYt9kVw1Z_check:hover:before {
  opacity: 1;
}

.q3aYt9kVw1Z_check:hover svg {
  stroke: #4285f4;
}

#cbx:checked + .q3aYt9kVw1Z_check svg {
  stroke: #4285f4;
}

#cbx:checked + .q3aYt9kVw1Z_check svg path {
  stroke-dashoffset: 60;
  transition: all 0.3s linear;
}

#cbx:checked + .q3aYt9kVw1Z_check svg polyline {
  stroke-dashoffset: 42;
  transition: all 0.2s linear;
  transition-delay: 0.15s;
}

      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-gray-600"
      content={
        <label className="flex flex-col gap-2 w-8  cursor-pointer">
          <input className="peer hidden" type="checkbox" title="checkbox" />
          <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
          <div className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45"></div>
          <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        </label>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-gray-950"
      content={
        <label
          className="relative flex cursor-pointer items-center justify-center gap-[1em] text-[#80FF00]"
          htmlFor="pp"
        >
          <input
            className="peer appearance-none"
            id="pp"
            name="pp"
            type="checkbox"
          />
          <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#80FF00]"></span>
          <svg
            className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
            viewBox="0 0 72 97"
            fill="none"
            height="97"
            width="72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.72 95.673c-6.37.644-11.034-4.445-15.746-8.048-4.947-3.783-8.859-10.482-10.847-16.446-6.689-20.067 18.238-28.312 26.244-9.098.483 1.16 1.961 2.376 1.4 3.5-2.28 4.556-3.675-9.63-4.2-14.697-1.002-9.69-3.335-44.87 6.299-49.688.884-.442 2.82 0 3.849 0 16.149 0 15.046 29.01 15.046 39.89 0 2.38-.318 8.001-1.75 10.148-.723 1.085-2.671 4.421-1.75 3.499 8.01-8.008 18.138-1.516 22.395 6.998 1.282 2.564.948 6.384 1.4 9.098 1.596 9.573-4.291 19.245-14.346 19.245-1.384 0-8.154.838-8.748-.35-.747-1.493 3.261-.722 4.898-1.05"
              stroke-width="4px"
              pathLength="100"
              stroke="#80FF00"
            ></path>
          </svg>

          <p className="text-[1em] font-semibold [user-select:none]">
            Do dumb things
          </p>
        </label>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#000"
      information="Tailwind"
      background="bg-[#fff]"
      content={
        <label>
          <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
            <input className="hidden peer" type="checkbox" title="Checkbox" />
            <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
            <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
            <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
          </div>
        </label>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-l from-green-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div>
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
        </div>

    
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-gray-800"
      content={
        <label className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
          <input title="input" className="hidden peer" type="checkbox" />
          <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center rotate-90 -translate-x-[0.3rem] translate-y-[0.1rem] peer-checked:translate-y-[0.1rem]"></div>
          <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.05rem] peer-checked:rotate-[-30deg] peer-checked:translate-y-[0.22rem] peer-checked:translate-x-[0.15rem]"></div>
          <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center rotate-90 translate-x-[0.3rem] -translate-y-[0.16rem] peer-checked:rotate-[30deg] peer-checked:translate-y-[-0.4rem] peer-checked:translate-x-[0.15rem]"></div>
        </label>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-orange-700/40 to-gray-950/30"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<label class="container_xzq7oHyGkS">
  <input checked="checked" type="checkbox">
  <div class="checkmark_sQp1jZVt8X"></div>
</label>
      <style>
.container_xzq7oHyGkS input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container_xzq7oHyGkS {
  display: flex;
  gap: 10px;
}

/* Create a custom checkbox */
.checkmark_sQp1jZVt8X {
  position: relative;
  box-shadow: rgb(255, 84, 0) 0px 0px 0px 2px;
  background-color: rgba(16, 16, 16, 0.5);
  height: 20px;
  width: 20px;
  margin-right: 10px;
  flex-shrink: 0;
  margin-top: -1px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  transform-origin: 0px 10px;
  border-radius: 4px;
  margin: -1px 10px 0px 0px;
  padding: 0px;
  box-sizing: border-box;
}

.container_xzq7oHyGkS input:checked ~ .checkmark_sQp1jZVt8X {
  box-shadow: rgb(255, 84, 0) 0px 0px 0px 2px;
  background-color: rgba(245, 24, 24, 0.5);
  height: 20px;
  width: 20px;
  margin-right: 10px;
  flex-shrink: 0;
  margin-top: -1px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  transform-origin: 0px 10px;
  border-radius: 4px;
  margin: -1px 10px 0px 0px;
  padding: 0px;
  box-sizing: border-box;
}

.checkmark_sQp1jZVt8X:after {
  content: "";
  position: absolute;
  display: none;
}

.container_xzq7oHyGkS input:checked ~ .checkmark_sQp1jZVt8X:after {
  display: block;
}

/* Style the checkmark/indicator */
.container_xzq7oHyGkS .checkmark_sQp1jZVt8X:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
  transition: all 500ms ease-in-out;
}
      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `

<label class="container_Yf4KxPnGz2">
  <input type="checkbox">
  <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521 c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506 c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625 c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191 s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586 s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>
</label>
      <style>
.container_Yf4KxPnGz2 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container_Yf4KxPnGz2 {
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.container_Yf4KxPnGz2 svg {
  position: relative;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: all 0.3s;
  fill: #666;
}

.container_Yf4KxPnGz2 svg:hover {
  transform: scale(1.1);
}

.container_Yf4KxPnGz2 input:checked ~ svg {
  fill: #ffeb49;
}
      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#000"
      information="Css"
      background="bg-[#fff]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<label class="burger_qx9VtLzJ38" for="burger_qx9VtLzJ38">
  <input type="checkbox" id="burger_qx9VtLzJ38">
  <span></span>
  <span></span>
  <span></span>
</label>

      <style>
.burger_qx9VtLzJ38 {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger_qx9VtLzJ38 input {
  display: none;
}

.burger_qx9VtLzJ38 span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger_qx9VtLzJ38 span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger_qx9VtLzJ38 span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger_qx9VtLzJ38 span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger_qx9VtLzJ38 input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger_qx9VtLzJ38 input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger_qx9VtLzJ38 input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}
      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `

<div class="like-wrapper_R7t4LgkY9A">
  <input class="check_Vn2qJ8hX1M" type="checkbox" id="like-toggle_4Pj7KmB3zN" />
  <label class="container_D8l5GfW6Qe" for="like-toggle_4Pj7KmB3zN">
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      class="icon_C9n8JrX2Pa inactive_M5t4HjL7Rw"
    >
      <path
        d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
      ></path>
    </svg>
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      class="icon_C9n8JrX2Pa active_T7m9NzR4Kl"
    >
      <path
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      ></path>
    </svg>
    <div class="checkmark_K5n3QlX7Az"></div>
    <span class="like-text_P2b4FjT9Xo">Like</span>
  </label>
</div>
      <style>
.like-wrapper_R7t4LgkY9A {
  --gap: 0.5em;
  --radius: 0.35em;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  --dot-bg: #212121;
  --dot-color: #313131;
  --dot-size: 1px;
  --dot-space: 22px;
  background: linear-gradient(
        90deg,
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    linear-gradient(
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    var(--dot-color);
  border: 0.1em solid #313131;
  padding: 0.5em;
  border-radius: var(--radius);
  box-shadow: 0 0 1em 0.5em rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.check_Vn2qJ8hX1M[type="checkbox"] {
  display: none;
}

.container_D8l5GfW6Qe {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: -0.25em;
  margin-bottom: -0.25em;
}

.icon_C9n8JrX2Pa {
  width: 1.5em;
  height: 1.5em;
  margin-left: 0.5em;
  fill: white;
  transition: opacity 0.3s ease-in-out;
}

.icon_C9n8JrX2Pa.active_T7m9NzR4Kl {
  display: none;
  fill: #f52121;
}

.check_Vn2qJ8hX1M[type="checkbox"]:checked + .container_D8l5GfW6Qe .icon_C9n8JrX2Pa.active_T7m9NzR4Kl {
  display: inline-block;
  animation: wiggle_A2m4FjT7Xo 0.5s ease-in-out;
}

.check_Vn2qJ8hX1M[type="checkbox"]:checked + .container_D8l5GfW6Qe .icon_C9n8JrX2Pa.inactive_M5t4HjL7Rw {
  display: none;
}

.like-text_P2b4FjT9Xo {
  margin-left: 0.5em;
  padding: 0.5em;
  color: white;
  font-family: Arial, sans-serif;
  font-weight: bolder;
}

@keyframes wiggle_A2m4FjT7Xo {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}
      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-b from-blue-600 to-gray-950/30"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<label class="x42-container__interactive--4r9v">
  <input type="checkbox">
  <svg viewBox="0 0 64 64" height="2em" width="2em">
    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="x42-path__stroke--interactive"></path>
  </svg>
</label>
      <style>
.x42-container__interactive--4r9v {
  cursor: pointer;
}

.x42-container__interactive--4r9v input {
  display: none;
}

.x42-container__interactive--4r9v svg {
  overflow: visible;
}

.x42-path__stroke--interactive {
  fill: none;
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
}

.x42-container__interactive--4r9v input:checked ~ svg .x42-path__stroke--interactive {
  stroke-dasharray: 70.5096664428711 9999999;
  stroke-dashoffset: -262.2723388671875;
}
      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-l from-green-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<label class="x65-container__toggle--7z3k">
  <input type="checkbox">
  <div class="x65-checkmark__box--t8x9">
    <svg viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" class="x65-icon__svg--k4v7">
      <path d="M 24.10 6.29 Q 28.34 7.56 28.00 12.00 Q 27.56 15.10 27.13 18.19 A 0.45 0.45 4.5 0 0 27.57 18.70 Q 33.16 18.79 38.75 18.75 Q 42.13 18.97 43.23 21.45 Q 43.91 22.98 43.27 26.05 Q 40.33 40.08 40.19 40.44 Q 38.85 43.75 35.50 43.75 Q 21.75 43.75 7.29 43.75 A 1.03 1.02 0.0 0 1 6.26 42.73 L 6.42 19.43 A 0.54 0.51 -89.4 0 1 6.93 18.90 L 14.74 18.79 A 2.52 2.31 11.6 0 0 16.91 17.49 L 22.04 7.17 A 1.74 1.73 21.6 0 1 24.10 6.29 Z M 21.92 14.42 Q 20.76 16.58 19.74 18.79 Q 18.74 20.93 18.72 23.43 Q 18.65 31.75 18.92 40.06 A 0.52 0.52 88.9 0 0 19.44 40.56 L 35.51 40.50 A 1.87 1.83 5.9 0 0 37.33 39.05 L 40.51 23.94 Q 40.92 22.03 38.96 21.97 L 23.95 21.57 A 0.49 0.47 2.8 0 1 23.47 21.06 Q 23.76 17.64 25.00 12.00 Q 25.58 9.36 24.28 10.12 Q 23.80 10.40 23.50 11.09 Q 22.79 12.80 21.92 14.42 Z M 15.57 22.41 A 0.62 0.62 0 0 0 14.95 21.79 L 10.01 21.79 A 0.62 0.62 0 0 0 9.39 22.41 L 9.39 40.07 A 0.62 0.62 0 0 0 10.01 40.69 L 14.95 40.69 A 0.62 0.62 0 0 0 15.57 40.07 L 15.57 22.41 Z" fill-opacity="1.000"></path>
      <circle r="1.51" cy="37.50" cx="12.49" fill-opacity="1.000"></circle>
    </svg>
  </div>
  <p class="x65-like__text--j2x1">Liked!</p>
</label>

      <style>
.x65-container__toggle--7z3k input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.x65-container__toggle--7z3k {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}

/* Create a custom checkbox */
.x65-checkmark__box--t8x9 {
  position: relative;
  top: 0;
  left: 0;
  height: 3em;
  width: 3em;
  background-color: #171717;
  border-radius: 10px;
  transition: .2s ease-in-out;
  z-index: 2;
}

.x65-like__text--j2x1 {
  position: relative;
  font-size: 0.8em;
  top: -3.5em;
  text-align: center;
  z-index: -1;
}

.x65-icon__svg--k4v7 {
  margin: 0.2em;
  fill: white;
  transition: .4s ease-in-out;
}

.x65-checkmark__box--t8x9:hover {
  background-color: white;
}

.x65-checkmark__box--t8x9:hover .x65-icon__svg--k4v7 {
  fill: black;
  transform: rotate(-8deg);
  transform-origin: bottom left;
}

/* When the checkbox is checked, add a green background */
.x65-container__toggle--7z3k input:checked ~ .x65-checkmark__box--t8x9 {
  background-color: limegreen;
}

.x65-container__toggle--7z3k input:checked ~ .x65-like__text--j2x1 {
  color: white;
  animation: 0.6s up_3951;
}

.x65-container__toggle--7z3k input:checked ~ .x65-checkmark__box--t8x9 .x65-icon__svg--k4v7 {
  fill: white;
  transform: none;
  animation: 0.5s jump_3951;
}

/* Create the checkmark/indicator (hidden when not checked) */
.x65-checkmark__box--t8x9:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.x65-container__toggle--7z3k input:checked ~ .x65-checkmark__box--t8x9:after {
  display: block;
}

@keyframes up_3951 {
  100% {
    transform: translateY(-2em);
  }
}

@keyframes jump_3951 {
  50% {
    transform-origin: center;
    transform: translateY(-0.5em) rotate(-8deg);
  }

  100% {
    transform-origin: center;
    transform: translateY(0em);
  }
}

      </style>
    `,
          }}
        />
      }
    />,
  ];

  const filterCards = () => {
    return cardsInput.filter((card) => {
      const information = card.props.information;
      return filter === "All" || information === filter;
    });
  };

  const paginatedCards = () => {
    const filteredCards = filterCards();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCards.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filterCards().length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="mb-4 space-x-2 flex items-center">
        <p className="text-slate-50">Filter by:</p>
        <button
          onClick={() => setFilter("All")}
          className={cn(
            "text-slate-50 px-2 py-1 text-sm rounded",
            filter === "All" && " bg-blue-700/30"
          )}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Css")}
          className={cn(
            "text-slate-50 px-2 py-1 text-sm rounded",
            filter === "Css" && " bg-blue-700/30"
          )}
        >
          CSS
        </button>
        <button
          onClick={() => setFilter("Tailwind")}
          className={cn(
            "text-slate-50 px-2 py-1 text-sm rounded",
            filter === "Tailwind" && " bg-blue-700/30"
          )}
        >
          Tailwind
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {paginatedCards()}
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem
              key={`${crypto.getRandomValues(new Uint32Array(1))}_${index}`}
            >
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
                className={cn(
                  "text-white",
                  currentPage === index + 1 && "bg-blue-700/30"
                )}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CardsCheckboxes;
