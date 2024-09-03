"use client";

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  PaginationPrevious,
} from "@/components/ui";
import { CardSpecific } from "@/components/cards";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const itemsPerPage = 9;

const CardCards = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  let counter = 1;

  const generateKey = () => `card-${counter++}`;

  const cardCards = [
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-b from-zinc-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="orbit-card">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
  <div class="orbit-card-content">
    <p class="orbit-card-title">Card Title</p>
    <p class="orbit-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>

          <style>
.orbit-card {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.orbit-card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.orbit-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.orbit-card-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.orbit-card:hover .orbit-card-content {
  transform: rotateX(0deg);
}

.orbit-card-title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.orbit-card:hover svg {
  scale: 0;
}

.orbit-card-description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

          </style>
        `,
          }}
        />
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-b from-slate-500/20"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="container-xzQ9p3zLsW5Y">
  <div class="box-xzQ9p3zLsW5Y">
    <span class="title-xzQ9p3zLsW5Y">GLASS EFFECT</span>
    <div>
      <strong>JOE WATSON SBF</strong>
      <p>0000 000 000 0000</p>
      <span>VALID</span> <span>01/28</span>
    </div>
  </div>
</div>
          <style>
/* From Uiverse.io by joe-watson-sbf */ 
.container-xzQ9p3zLsW5Y {
  color: white;
  position: relative;
  font-family: sans-serif;
}

.container-xzQ9p3zLsW5Y::before,
.container-xzQ9p3zLsW5Y::after {
  content: "";
  background-color: #fab5704c;
  position: absolute;
}

.container-xzQ9p3zLsW5Y::before {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  top: 30%;
  right: 7%;
}

.container-xzQ9p3zLsW5Y::after {
  content: "";
  position: absolute;
  height: 3rem;
  top: 8%;
  right: 5%;
  border: 1px solid;
}

.box-xzQ9p3zLsW5Y {
  width: 11.875em;
  height: 15.875em;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;
}

.box-xzQ9p3zLsW5Y {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title-xzQ9p3zLsW5Y {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.box-xzQ9p3zLsW5Y div strong {
  display: block;
  margin-bottom: 0.5rem;
}

.box-xzQ9p3zLsW5Y div p {
  margin: 0;
  font-size: 0.9em;
  font-weight: 300;
  letter-spacing: 0.1em;
}

.box-xzQ9p3zLsW5Y div span {
  font-size: 0.7rem;
  font-weight: 300;
}

.box-xzQ9p3zLsW5Y div span:nth-child(3) {
  font-weight: 500;
  margin-right: 0.2rem;
}

.box-xzQ9p3zLsW5Y:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
          </style>
        `,
          }}
        />
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-slate-950"
      content={
        <div className="relative rounded-lg bg-slate-900 p-2">
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
                className<span className="text-slate-500">=</span>
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
            <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">ProgressBar</span>
              <span className="ml-2 text-violet-400">
                value<span className="text-slate-500">=</span>
                <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span className="relative text-blue-400">{32}</span>
                </span>
              </span>
              <span className="ml-2 text-violet-400">
                className<span className="text-slate-500">=</span>
                <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span className="relative text-blue-400">"mt-3"</span>
                </span>
              </span>
              <span className="text-slate-500">/&gt;</span>
            </p>
            <p className="font-mono text-xs font-normal tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Card</span>
              <span className="text-slate-500">&gt;</span>
            </p>
          </div>
        </div>
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-l from-blue-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<!-- From Uiverse.io by Yaya12085 --> 
<div class="unique-code-editor">
  <div class="unique-header">
    <span class="unique-title">CSS</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="unique-icon">
      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
      <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier"> 
        <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> 
        <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> 
      </g>
    </svg>
  </div>
  <div class="unique-editor-content">
    <code class="unique-code">
      <p><span class="unique-color-0">.unique-code-editor </span> <span>{</span></p>

      <p class="unique-property">
        <span class="unique-color-2">max-width</span><span>:</span>
        <span class="unique-color-1">300px</span>;
      </p>
      <p class="unique-property">
        <span class="unique-color-2">background-color</span><span>:</span>
        <span class="unique-color-preview-1"></span><span class="">#1d1e22</span>;
      </p>
      <p class="unique-property">
        <span class="unique-color-2"> box-shadow</span><span>:</span>
        <span class="unique-color-1">0px 4px 30px  <span class="unique-color-preview-2"></span><span class="unique-color-3">rgba(</span>0, 0, 0, 0.5<span class="unique-color-3">)</span></span>;
      </p>
      <p class="unique-property">
        <span class="unique-color-2">border-radius</span><span>:</span>
        <span class="unique-color-1">8px</span>;
      </p>
      <span>}</span>
    </code>
  </div>
</div>
          <style>
.unique-code-editor {
  max-width: 300px;
  background-color: #1d1e22;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 2px;
  text-align: left;
}

.unique-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
}

.unique-title {
  font-family: Lato, sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 1.57px;
  color: rgb(212 212 212);
}

.unique-icon {
  width: 20px;
  transition: .2s ease;
}

.unique-icon:hover {
  cursor: pointer;
  border-radius: 50px;
  background-color: #6e7281;
}

.unique-editor-content {
  margin: 0 10px 10px;
  color: white;
}

.unique-property {
  margin-left: 30px;
}

.unique-property:hover {
  cursor: text;
}

.unique-editor-content .unique-color-0 {
  color: rgb(86 156 214);
}

.unique-editor-content .unique-color-1 {
  color: rgb(182 206 168);
}

.unique-editor-content .unique-color-2 {
  color: rgb(156 220, 254);
}

.unique-editor-content .unique-color-3 {
  color: rgb(207 146 120);
}

.unique-color-preview-1, .unique-color-preview-2 {
  height: 8px;
  width: 8px;
  border: 1px solid #fff;
  display: inline-block;
  margin-right: 3px;
}

.unique-color-preview-1 {
  background-color: #1d1e22;
}

.unique-color-preview-2 {
  background-color: rgba(0, 0, 0, 0.5);
}
          </style>
        `,
          }}
        />
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-pink-950/30"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="card-UN1q84Mz7XxL">
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
</div>
          <style>

.card-UN1q84Mz7XxL {
  width: 210px;
  height: 254px;
  border-radius: 4px;
  background: #212121;
  display: flex;
  gap: 5px;
  padding: .4em;
}

.card-UN1q84Mz7XxL p {
  height: 100%;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  transition: all .5s;
  background: #212121;
  border: 1px solid #ff5a91;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-UN1q84Mz7XxL p:hover {
  flex: 4;
}

.card-UN1q84Mz7XxL p span {
  min-width: 14em;
  padding: .5em;
  text-align: center;
  transform: rotate(-90deg);
  transition: all .5s;
  text-transform: uppercase;
  color: #ff568e;
  letter-spacing: .1em;
}

.card-UN1q84Mz7XxL p:hover span {
  transform: rotate(0);
}

          </style>
        `,
          }}
        />
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-b from-yellow-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="card-001">
  <div class="card-img-001"></div>
  <div class="card-info-001">
    <p class="text-title-001">Product title </p>
    <p class="text-body-001">Product description and details</p>
  </div>
  <div class="card-footer-001">
    <span class="text-title-001">$499.49</span>
    <div class="card-button-001">
      <svg class="svg-icon-001" viewBox="0 0 20 20">
        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
      </svg>
    </div>
  </div>
</div>
          <style>
.card-001 {
  width: 190px;
  height: 254px;
  padding: .8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.card-img-001 {
  background-color: #ffcaa6;
  height: 40%;
  width: 100%;
  border-radius: .5rem;
  transition: .3s ease;
}

.card-info-001 {
  padding-top: 10%;
}

.svg-icon-001 {
  width: 20px;
  height: 20px;
}

.card-footer-001 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}

/* Text */
.text-title-001 {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
}

.text-body-001 {
  font-size: .9em;
  padding-bottom: 10px;
}

/* Button */
.card-button-001 {
  border: 1px solid #252525;
  display: flex;
  padding: .3em;
  cursor: pointer;
  border-radius: 50px;
  transition: .3s ease-in-out;
}

/* Hover */
.card-img-001:hover {
  transform: translateY(-25%);
  box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}

.card-button-001:hover {
  border: 1px solid #ffcaa6;
  background-color: #ffcaa6;
}
          </style>
        `,
          }}
        />
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-zinc-950"
      content={
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </div>
        </div>
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-green-950"
      content={
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>

          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            WEBSITE SEO
          </p>
          <p className="text-gray-400 text-sm">
            Website ravida surna eveti semen the conse tusio anivite dianne one
            nivam acestion vue artin dictum.
          </p>
          <p
            style={{
              WebkitTextStroke: "1px gray",
              WebkitTextFillColor: "transparent",
            }}
            className="text-5xl font-bold self-end"
          >
            09
          </p>
        </div>
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-l from-gray-950 to-gray-700"
      content={
        <div className="w-full max-w-[320px] mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-zinc-900">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-yellow-500"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              <div className="mx-3">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Timro Mann
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Dibbya Subba</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-red-500"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <svg
                className="h-6 w-6 text-gray-500 dark:text-gray-400 ml-4"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              </svg>
              <div className="w-full mx-3">
                <div className="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-800">
                  <div className="absolute left-0 top-0 h-full bg-yellow-500 w-1/2"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">50%</p>
            </div>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
              <span> 00:03 </span>
              <span> 3:35 </span>
            </div>
          </div>
        </div>
      }
    />,
    <CardSpecific
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-b from-slate-950 to-cyan-950/30"
      content={
        <div className="space-y-2 p-4">
          <div
            role="alert"
            className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <p className="text-xs font-semibold">
              Success - Everything went smoothly!
            </p>
          </div>

          <div
            role="alert"
            className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 flex-shrink-0 mr-2 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <p className="text-xs font-semibold">
              Info - This is some information for you.
            </p>
          </div>

          <div
            role="alert"
            className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 flex-shrink-0 mr-2 text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <p className="text-xs font-semibold">
              Warning - Be careful with this next step.
            </p>
          </div>

          <div
            role="alert"
            className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <p className="text-xs font-semibold">
              Error - Something went wrong.
            </p>
          </div>
        </div>
      }
    />,
  ];

  const filterLoaders = () => {
    return cardCards.filter((card) => {
      const information = card.props.information;
      return filter === "All" || information === filter;
    });
  };

  const paginatedCards = () => {
    const filteredCards = filterLoaders();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCards.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filterLoaders().length / itemsPerPage);

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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

export default CardCards;
