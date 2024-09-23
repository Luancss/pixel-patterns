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

const CardsButton = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  let counter = 1;

  const generateKey = () => `card-${counter++}`;

  const cardsButton = [
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="css"
      background="bg-gradient-to-r from-black to-pink-950/30"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button type="button" class="uncommon-button-333">Clique Aqui</button>
          <style>
            .uncommon-button-333 {
              padding: 10px 15px;
              font-size: 1rem;
              font-weight: bold;
              color: #fff;
              background: linear-gradient(135deg, #ff416c, #ff4b2b);
              border: none;
              border-radius: 50px;
              cursor: pointer;
              transition: transform 0.2s, background-color 0.4s;
            }
            
            .uncommon-button-333:hover {
              transform: rotate(5deg) scale(1.1);
              background-color: #ff6200;
            }
            
            .uncommon-button-333:active {
              transform: scale(0.9) rotate(-5deg);
            }
          </style>
          `
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-green-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="unique-button-47283">I'M READY</button>
          <style>
            .unique-button-47283 {
              --green: #1BFD9C;
              font-size: 15px;
              padding: 0.7em 2.7em;
              letter-spacing: 0.06em;
              position: relative;
              font-family: inherit;
              border-radius: 0.6em;
              overflow: hidden;
              transition: all 0.3s;
              line-height: 1.4em;
              border: 2px solid var(--green);
              background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%, transparent 60%, rgba(27, 253, 156, 0.1) 100%);
              color: var(--green);
              box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
            }

            .unique-button-47283:hover {
              color: #82ffc9;
              box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
            }

            .unique-button-47283:before {
              content: "";
              position: absolute;
              left: -4em;
              width: 4em;
              height: 100%;
              top: 0;
              transition: transform .4s ease-in-out;
              background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%, rgba(27, 253, 156, 0.1) 60%, transparent 100%);
            }

            .unique-button-47283:hover:before {
              transform: translateX(15em);
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-r from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="button-58392">
            <div class="icon-27384">
              <span class="text-icon-10894 hide">Icon</span>
              <svg
                class="css-i6dzq1-78932"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
            <span class="title-12340">Anatomy</span>
            <div class="padding-left-90428 hide">
              <div class="padding-left-line-38217">
                <span class="padding-left-text-79421">Padding</span>
              </div>
            </div>
            <div class="padding-right-48562 hide">
              <div class="padding-right-line-92734">
                <span class="padding-right-text-15392">Padding</span>
              </div>
            </div>
            <div class="background-68273 hide">
              <span class="background-text-47215">Background</span>
            </div>
            <div class="border-97846 hide">
              <span class="border-text-56231">Radius</span>
            </div>
          </button>
          <style>
            .button-58392 {
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              font-size: 14px;
              background-image: linear-gradient(#3470fa, #313ed7);
              color: white;
              border: solid 2px #0618db;
              height: 50px;
              padding: 0px 20px;
              border-radius: 5px;
              font-weight: 600;
              transform: scale(0.89);
              position: relative;
            }
            .button-58392:not(:hover) .hide,
            .button-58392:not(:hover) .icon-27384::before,
            .button-58392:not(:hover) .icon-27384::after {
              opacity: 0;
              visibility: hidden;
              transform: scale(1.4);
            }
            .hide {
              transition: all 0.2s ease;
            }
            .button-58392:active {
              background-image: linear-gradient(#313ed7, #3470fa);
              border-color: #313ed7;
            }
            .icon-27384 {
              position: relative;
            }
            .icon-27384::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 6px;
              height: 6px;
              transform: translate(-50%, -50%);
              background-color: #ffffff;
              border-radius: 100%;
            }
            .icon-27384::after {
              content: "";
              position: absolute;
              right: 0;
              bottom: 0;
              transform: translate(-19%, -60%);
              width: 100px;
              height: 33px;
              background-color: transparent;
              border-radius: 12px 22px 2px 2px;
              border-right: solid 2px #ffffff;
              border-top: solid 2px transparent;
            }
            .icon-27384 .text-icon-10894 {
              color: #ffffff;
              position: absolute;
              font-size: 12px;
              left: -37px;
              top: -38px;
            }
            .icon-27384 svg {
              width: 20px;
              height: 20px;
              border: solid 2px transparent;
              display: flex;
            }
            .button-58392:hover .icon-27384 svg {
              border: solid 2px #ffffff;
            }
            .padding-left-90428 {
              position: absolute;
              width: 20px;
              height: 2px;
              background-color: #ffffff;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-left-90428:before {
              content: "";
              width: 2px;
              height: 10px;
              background-color: #ffffff;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-left-90428:after {
              content: "";
              width: 2px;
              height: 10px;
              background-color: #ffffff;
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-left-line-38217 {
              position: absolute;
              width: 30px;
              height: 2px;
              background-color: #ffffff;
              left: -24px;
              top: 11px;
              transform: rotate(-50deg);
            }
            .padding-left-line-38217::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 6px;
              height: 6px;
              transform: translate(-50%, -50%);
              background-color: #ffffff;
              border-radius: 100%;
            }
            .padding-left-text-79421 {
              color: #ffffff;
              font-size: 12px;
              position: absolute;
              white-space: nowrap;
              transform: rotate(50deg);
              bottom: 30px;
              left: -67px;
            }
            .padding-right-48562 {
              position: absolute;
              width: 20px;
              height: 2px;
              background-color: #ffffff;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-right-48562:before {
              content: "";
              width: 2px;
              height: 10px;
              background-color: #ffffff;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-right-48562:after {
              content: "";
              width: 2px;
              height: 10px;
              background-color: #ffffff;
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-right-line-92734 {
              position: absolute;
              width: 30px;
              height: 2px;
              background-color: #ffffff;
              right: -24px;
              top: 11px;
              transform: rotate(50deg);
            }
            .padding-right-line-92734::before {
              content: "";
              position: absolute;
              left: 30px;
              top: 0;
              width: 6px;
              height: 6px;
              transform: translate(-50%, -50%);
              background-color: #ffffff;
              border-radius: 100%;
            }
            .padding-right-text-15392 {
              color: #ffffff;
              font-size: 12px;
              position: absolute;
              white-space: nowrap;
              transform: rotate(-50deg);
              bottom: 34px;
              left: 21px;
            }
            .background-68273 {
              position: absolute;
            }
            .background-68273::before {
              content: "";
              position: absolute;
              right: 27px;
              bottom: -70px;
              width: 100px;
              height: 53px;
              background-color: transparent;
              border-radius: 0px 0px 22px 22px;
              border-right: solid 2px #ffffff;
              border-bottom: solid 2px transparent;
            }
            .background-68273::after {
              content: "";
              position: absolute;
              right: 25px;
              bottom: -20px;
              width: 6px;
              height: 6px;
              background-color: #ffffff;
              border-radius: 100%;
            }
            .background-text-47215 {
              position: absolute;
              color: #ffffff;
              font-size: 12px;
              bottom: -70px;
              left: -115px;
            }
            .border-97846 {
              position: absolute;
              right: 0;
              top: 0;
            }
            .border-97846:before {
              content: "";
              width: 15px;
              height: 15px;
              border: solid 2px #ffffff;
              position: absolute;
              right: 0%;
              top: 0;
              transform: translate(50%, -50%);
              border-radius: 100%;
            }
            .border-97846:after {
              content: "";
              width: 2px;
              height: 25px;
              background-color: #ffffff;
              position: absolute;
              right: -10px;
              top: -15px;
              transform: translate(50%, -50%) rotate(60deg);
            }
            .border-97846 .border-text-56231 {
              position: absolute;
              color: #ffffff;
              font-size: 12px;
              right: -65px;
              top: -30px;
              white-space: nowrap;
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="unique-download-button">
            <div class="unique-docs">
              <svg class="unique-icon-docs" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line y2="13" x2="8" y1="13" x1="16"></line>
                <line y2="17" x2="8" y1="17" x1="16"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg> Docs
            </div>
            <div class="unique-download">
              <svg class="unique-icon-download" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line y2="3" x2="12" y1="15" x1="12"></line>
              </svg>
            </div>
          </button>
          <style>
            .unique-download-button {
              position: relative;
              border-width: 0;
              color: white;
              font-size: 15px;
              font-weight: 600;
              border-radius: 4px;
              z-index: 1;
            }
            .unique-download-button .unique-docs {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 10px;
              min-height: 40px;
              padding: 0 10px;
              border-radius: 4px;
              z-index: 1;
              background-color: #242a35;
              border: solid 1px #e8e8e82d;
              transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
            }
            .unique-download-button:hover {
              box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            }
            .unique-download {
              position: absolute;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              max-width: 90%;
              margin: 0 auto;
              z-index: -1;
              border-radius: 4px;
              transform: translateY(0%);
              background-color: #01e056;
              border: solid 1px #01e0572d;
              transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
            }
            .unique-download-button:hover .unique-download {
              transform: translateY(100%);
            }
            .unique-download svg polyline, .unique-download svg line {
              animation: unique-docs 1s infinite;
            }
            @keyframes unique-docs {
              0% {
                transform: translateY(0%);
              }
              50% {
                transform: translateY(-15%);
              }
              100% {
                transform: translateY(0%);
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
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-t from-purple-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <button class="unique-cssbuttons-io">
              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                    fill="currentColor"
                  ></path>
                </svg>
                Code
              </span>
            </button>
            <style>
              .unique-cssbuttons-io {
                position: relative;
                font-family: inherit;
                font-weight: 500;
                font-size: 18px;
                letter-spacing: 0.05em;
                border-radius: 0.8em;
                cursor: pointer;
                border: none;
                background: linear-gradient(to right, #8e2de2, #4a00e0);
                color: ghostwhite;
                overflow: hidden;
              }
              .unique-cssbuttons-io svg {
                width: 1.2em;
                height: 1.2em;
                margin-right: 0.5em;
              }
              .unique-cssbuttons-io span {
                position: relative;
                z-index: 10;
                transition: color 0.4s;
                display: inline-flex;
                align-items: center;
                padding: 0.8em 1.2em 0.8em 1.05em;
              }
              .unique-cssbuttons-io::before,
              .unique-cssbuttons-io::after {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
              }
              .unique-cssbuttons-io::before {
                content: "";
                background: #000;
                width: 120%;
                left: -10%;
                transform: skew(30deg);
                transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
              }
              .unique-cssbuttons-io:hover::before {
                transform: translate3d(100%, 0, 0);
              }
              .unique-cssbuttons-io:active {
                transform: scale(0.95);
              }
            </style>
          `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-l from-slate-950"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-6 font-medium text-neutral-950 duration-500">
          <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
            Hover me
          </div>
          <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-blue-800/50"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
          <span>Hover me</span>
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-zinc-950 to-zinc-800"
      content={
        <button
          disabled={true}
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#000] px-6 font-medium text-neutral-200 disabled:pointer-events-none disabled:opacity-50"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-5 w-5 animate-spin text-white"
          >
            <path
              d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Loading...</span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-950"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-6 font-medium text-neutral-950 transition hover:scale-110">
          <span>Hover me</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-black/20"></div>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-r from-purple-950/60"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="unique-launch-button">
            <svg
              class="unique-launch-icon"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <span class="unique-launch-text">Launch</span>
          </button>
          <style>
            .unique-launch-button {
              display: flex;
              align-items: center;
              font-family: inherit;
              cursor: pointer;
              font-weight: 500;
              font-size: 17px;
              padding: 0.8em 1.3em 0.8em 0.9em;
              color: white;
              background: #ad5389;
              background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
              border: none;
              letter-spacing: 0.05em;
              border-radius: 16px;
            }
            .unique-launch-icon {
              margin-right: 3px;
              transform: rotate(30deg);
              transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
            }
            .unique-launch-text {
              transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
            }
            .unique-launch-button:hover .unique-launch-icon {
              transform: translateX(5px) rotate(90deg);
            }
            .unique-launch-button:hover .unique-launch-text {
              transform: translateX(7px);
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-r from-zinc-700"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="unique-btn54">
            <span class="unique-icon12124">
              <svg viewBox="0 0 175 80" width="40" height="40">
                <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              </svg>
            </span>
            <span class="unique-text98865">MENU</span>
          </button>
          <style>
            .unique-btn54 {
              width: 150px;
              height: 50px;
              border-radius: 5px;
              border: none;
              transition: all 0.5s ease-in-out;
              font-size: 20px;
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              font-weight: 600;
              display: flex;
              align-items: center;
              background: #040f16;
              color: #f5f5f5;
              position: relative;
            }
            .unique-btn54:hover {
              box-shadow: 0 0 20px 0px #2e2e2e3a;
            }
            .unique-btn54 .unique-icon12124 {
              position: absolute;
              height: 40px;
              width: 70px;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.5s;
            }
            .unique-btn54 .unique-text98865 {
              transform: translateX(55px);
              transition: all 0.5s;
            }
            .unique-btn54:hover .unique-icon12124 {
              width: 175px;
            }
            .unique-btn54:hover .unique-text98865 {
              opacity: 0;
            }
            .unique-btn54:focus {
              outline: none;
            }
            .unique-btn54:active .unique-icon12124 {
              transform: scale(0.85);
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-l from-red-950/60"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="unique-btn-101">
            <span class="unique-text-102">Delete</span>
            <span class="unique-icon-103">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
          <style>
            .unique-btn-101 {
              width: 150px;
              height: 50px;
              cursor: pointer;
              display: flex;
              align-items: center;
              background: #e62222;
              border: none;
              border-radius: 5px;
              box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
              position: relative;
              transition: background 200ms, box-shadow 200ms;
            }

            .unique-btn-101, .unique-btn-101 span {
              transition: transform 200ms, color 200ms;
            }

            .unique-text-102 {
              transform: translateX(35px);
              color: white;
              font-weight: bold;
            }

            .unique-icon-103 {
              position: absolute;
              border-left: 1px solid #c41b1b;
              transform: translateX(110px);
              height: 40px;
              width: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: width 200ms, transform 200ms;
            }

            .unique-btn-101 svg {
              width: 15px;
              fill: #eee;
            }

            .unique-btn-101:hover {
              background: #ff3636;
            }

            .unique-btn-101:hover .unique-text-102 {
              color: transparent;
            }

            .unique-btn-101:hover .unique-icon-103 {
              width: 150px;
              border-left: none;
              transform: translateX(0);
            }

            .unique-btn-101:focus {
              outline: none;
            }

            .unique-btn-101:active .unique-icon-103 svg {
              transform: scale(0.8);
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card key={generateKey()}
      iconColor="#fff"
      information="css"
      background="bg-gradient-to-r from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <button type="button" class="unique-button-prmary-007BFF">PRYMARY</button>
        <style>
          .unique-button-prmary-007BFF{
          background:#007BFF;
          color:white;
          padding: 5px 15px;
          border:0;
          outline:0;
          border-radius: 5px;
          }

          .unique-button-prmary-007BFF:hover{
          background:#2283eb;
          }
        </style>
        `
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#000"
      background="bg-[#fff]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <button class="unique-clickme-201">Click me!</button>
          <style>
            .unique-clickme-201 {
              padding: 15px 25px;
              border: unset;
              border-radius: 15px;
              color: #212121;
              z-index: 1;
              background: #e8e8e8;
              position: relative;
              font-weight: 1000;
              font-size: 17px;
              -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
              box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
              transition: all 250ms;
              overflow: hidden;
            }

            .unique-clickme-201::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 0;
              border-radius: 15px;
              background-color: #212121;
              z-index: -1;
              -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
              box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
              transition: all 250ms;
            }

            .unique-clickme-201:hover {
              color: #e8e8e8;
            }

            .unique-clickme-201:hover::before {
              width: 100%;
            }
          </style>
        `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
          <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
            Hover me
          </div>
          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="z-10">Hover me</span>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-t from-cyan-950/60"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <button class="btn-unique-hover-effect-8392jklm"> Hover me </button>
        <style>
          .btn-unique-hover-effect-8392jklm {
          padding: 0.8em 1.8em;
          border: 2px solid #17C3B2;
          position: relative;
          overflow: hidden;
          background-color: transparent;
          text-align: center;
          text-transform: uppercase;
          font-size: 16px;
          transition: .3s;
          z-index: 1;
          font-family: inherit;
          color: #17C3B2;
          }

          .btn-unique-hover-effect-8392jklm::before {
          content: '';
          width: 0;
          height: 300%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: #17C3B2;
          transition: .5s ease;
          display: block;
          z-index: -1;
          }

          .btn-unique-hover-effect-8392jklm:hover::before {
          width: 105%;
          }

          .btn-unique-hover-effect-8392jklm:hover {
          color: #111;
          }
        </style>
      `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
      <button class="btn-hover-effect-4782fghj"> Button </button>
      <style>
        .btn-hover-effect-4782fghj {
          position: relative;
          padding: 10px 20px;
          border-radius: 7px;
          border: 1px solid rgb(61, 106, 255);
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 2px;
          background: transparent;
          color: #fff;
          overflow: hidden;
          box-shadow: 0 0 0 0 transparent;
          -webkit-transition: all 0.2s ease-in;
          -moz-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }

        .btn-hover-effect-4782fghj:hover {
          background: rgb(61, 106, 255);
          box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
        }

        .btn-hover-effect-4782fghj:hover::before {
          -webkit-animation: sh02 0.5s 0s linear;
          -moz-animation: sh02 0.5s 0s linear;
          animation: sh02 0.5s 0s linear;
        }

        .btn-hover-effect-4782fghj::before {
          content: '';
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          -webkit-transform: skewX(-20deg);
          -moz-transform: skewX(-20deg);
          -ms-transform: skewX(-20deg);
          -o-transform: skewX(-20deg);
          transform: skewX(-20deg);
        }

        @keyframes sh02 {
          from {
            opacity: 0;
            left: 0%;
          }

          50% {
            opacity: 1;
          }

          to {
            opacity: 0;
            left: 100%;
          }
        }

        .btn-hover-effect-4782fghj:active {
          box-shadow: 0 0 0 0 transparent;
          -webkit-transition: box-shadow 0.2s ease-in;
          -moz-transition: box-shadow 0.2s ease-in;
          transition: box-shadow 0.2s ease-in;
        }
      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-l from-blue-700/40"
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
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-sky-500 to-indigo-700/70"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
          <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
            Hover me
          </div>
          <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-500/70 to-slate-800/30"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
          <span>Hover me</span>
          <div className="ml-1 transition duration-300 group-hover:rotate-[360deg]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-l from-slate-950 to-slate-800"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
          <div className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
            <div className="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="pl-6">Hover</span>
            <div className="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      }
    />,

    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-l from-blue-700/40 "
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
      <button class="btn-binary-pulse">
        Hover me
      </button>
      <style>
        .btn-binary-pulse {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #149CEA;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btn-binary-pulse::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: 0.5s;
  transform-origin: center;
}

.btn-binary-pulse::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: 0.5s;
}

.btn-binary-pulse:hover::before, .btn-binary-pulse:hover::after {
  transform: scale(0);
}

.btn-binary-pulse:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
}
      </style>
    `,
          }}
        />
      }
    />,
    <Card
      key={generateKey()}
      information="Css"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
    <button class="btn-U4zrJd">
    <div class="wrapper-ZX2g8w">
      <p class="text-Ey92Vu">Flowers</p>

      <div class="flower-Hg2x7L flower1-Qp4zRf">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower2-Ry9wMn">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower3-Kr8bVp">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower4-Tg5xPr">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower5-Ly7zPw">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
      <div class="flower-Hg2x7L flower6-Qg1zNr">
        <div class="petal-Po8sXj one-D3LmK9"></div>
        <div class="petal-Po8sXj two-N8Wq6X"></div>
        <div class="petal-Po8sXj three-F2Gz7M"></div>
        <div class="petal-Po8sXj four-L3YkB7"></div>
      </div>
    </div>
    </button>

        <style>
    .btn-U4zrJd {
    height: 4em;
    width: 12em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0px solid black;
    cursor: pointer;
    }

    .wrapper-ZX2g8w {
    height: 2em;
    width: 8em;
    position: relative;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .text-Ey92Vu {
    font-size: 17px;
    z-index: 1;
    color: #000;
    padding: 4px 12px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.7);
    transition: all 0.5s ease;
    }

    .flower-Hg2x7L {
    display: grid;
    grid-template-columns: 1em 1em;
    position: absolute;
    transition: grid-template-columns 0.8s ease;
    }

    .flower1-Qp4zRf {
    top: -12px;
    left: -13px;
    transform: rotate(5deg);
    }

    .flower2-Ry9wMn {
    bottom: -5px;
    left: 8px;
    transform: rotate(35deg);
    }

    .flower3-Kr8bVp {
    bottom: -15px;
    transform: rotate(0deg);
    }

    .flower4-Tg5xPr {
    top: -14px;
    transform: rotate(15deg);
    }

    .flower5-Ly7zPw {
    right: 11px;
    top: -3px;
    transform: rotate(25deg);
    }

    .flower6-Qg1zNr {
    right: -15px;
    bottom: -15px;
    transform: rotate(30deg);
    }

    .petal-Po8sXj {
    height: 1em;
    width: 1em;
    border-radius: 40% 70% / 7% 90%;
    background: linear-gradient(#07a6d7, #93e0ee);
    border: 0.5px solid #96d1ec;
    z-index: 0;
    transition: width 0.8s ease, height 0.8s ease;
    }

    .two-N8Wq6X {
    transform: rotate(90deg);
    }

    .three-F2Gz7M {
    transform: rotate(270deg);
    }

    .four-L3YkB7 {
    transform: rotate(180deg);
    }

    .btn-U4zrJd:hover .petal-Po8sXj {
    background: linear-gradient(#0761d7, #93bdee);
    border: 0.5px solid #96b4ec;
    }

    .btn-U4zrJd:hover .flower-Hg2x7L {
    grid-template-columns: 1.5em 1.5em;
    }

    .btn-U4zrJd:hover .flower-Hg2x7L .petal-Po8sXj {
    width: 1.5em;
    height: 1.5em;
    }

    .btn-U4zrJd:hover .text-Ey92Vu {
    background: rgba(255, 255, 255, 0.4);
    }

    .btn-U4zrJd:hover div.flower1-Qp4zRf {
    animation: 15s linear 0s normal none infinite running flower1-Qp4zRf;
    }

    @keyframes flower1-Qp4zRf {
    0% {
      transform: rotate(5deg);
    }

    100% {
      transform: rotate(365deg);
    }
    }

    .btn-U4zrJd:hover div.flower2-Ry9wMn {
    animation: 13s linear 1s normal none infinite running flower2-Ry9wMn;
    }

    @keyframes flower2-Ry9wMn {
    0% {
      transform: rotate(35deg);
    }

    100% {
      transform: rotate(-325deg);
    }
    }

    .btn-U4zrJd:hover div.flower3-Kr8bVp {
    animation: 16s linear 1s normal none infinite running flower3-Kr8bVp;
    }

    @keyframes flower3-Kr8bVp {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
    }

    .btn-U4zrJd:hover div.flower4-Tg5xPr {
    animation: 17s linear 1s normal none infinite running flower4-Tg5xPr;
    }

    @keyframes flower4-Tg5xPr {
    0% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(375deg);
    }
    }

    .btn-U4zrJd:hover div.flower5-Ly7zPw {
    animation: 20s linear 1s normal none infinite running flower5-Ly7zPw;
    }

    @keyframes flower5-Ly7zPw {
    0% {
      transform: rotate(25deg);
    }

    100% {
      transform: rotate(-335deg);
    }
    }

    .btn-U4zrJd:hover div.flower6-Qg1zNr {
    animation: 15s linear 1s normal none infinite running flower6-Qg1zNr;
    }

    @keyframes flower6-Qg1zNr {
    0% {
      transform: rotate(30deg);
    }

    100% {
      transform: rotate(390deg);
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
      information="Css"
      iconColor="#fff"
      background="bg-gradient-to-b from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
    <button class="btn-5jD8wL">
    <div class="svg-wrapper-2k8VnR">
    <div class="svg-container-9LrZyP">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        class="icon-M7zQxT"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
    </div>
    <span class="text-3nL2Rb">Send</span>
    </button>
      <style>
    .btn-5jD8wL {
    font-family: inherit;
    font-size: 20px;
    background: royalblue;
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    }

    .text-3nL2Rb {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
    }

    .icon-M7zQxT {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
    }

    .btn-5jD8wL:hover .svg-container-9LrZyP {
    animation: fly-1-5Zk8L3 0.6s ease-in-out infinite alternate;
    }

    .btn-5jD8wL:hover .icon-M7zQxT {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }

    .btn-5jD8wL:hover .text-3nL2Rb {
    transform: translateX(5em);
    }

    .btn-5jD8wL:active {
    transform: scale(0.95);
    }

    @keyframes fly-1-5Zk8L3 {
    from {
    transform: translateY(0.1em);
    }

    to {
    transform: translateY(-0.1em);
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
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-200"
      content={
        <button className="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
          <span className="relative">Hover me</span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-l from-indigo-800"
      content={
        <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50">
          <span className="relative z-10">Hover Me</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-gray-950"
      content={
        <button className="group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50">
          <span className="relative z-10">Hover Me</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-gray-800"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-6 font-medium text-neutral-950 duration-500">
          <div className="relative inline-flex -translate-x-0 items-center transition group-hover:translate-x-6">
            <div className="absolute -translate-x-4 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="pr-6">Hover</span>
            <div className="absolute right-0 translate-x-0 opacity-100 transition group-hover:translate-x-4 group-hover:opacity-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-blue-800"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
          <span>Hover me</span>
          <div className="relative ml-1 h-5 w-5 overflow-hidden">
            <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -translate-x-4"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-purple-800/70"
      content={
        <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
          <span className="z-10 pr-2">Hover me</span>
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="mr-3.5 flex items-center justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-50"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-r from-slate-950"
      content={
        <button className="relative z-0 h-12 rounded-full bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-blue-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">
          Hover me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
          <div className="inline-flex h-12 translate-y-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-y-[150%]">
            Hover me
          </div>
          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
            Hover me
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-[#000]"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium">
          <div className="inline-flex h-12 translate-x-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-x-[150%]">
            Hover me
          </div>
          <div className="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-x-0">
            Hover me
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-red-800/50"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
          <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
            Hover me
          </div>
          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="z-10">Hover me</span>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-t from-slate-800/50 to-indigo-950"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-100">
          <span className="relative inline-flex overflow-hidden">
            <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
              Hover me
            </div>
            <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
              Hover me
            </div>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#000"
      background="bg-[#fff]"
      content={
        <button
          role="link"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-800 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
        >
          Hover me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#000"
      background="bg-[#fff]"
      content={
        <button
          role="link"
          className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-neutral-950 transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]"
        >
          Hover me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#000"
      background="bg-[#fff]"
      content={
        <button
          role="link"
          className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-neutral-950 transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#3b82f6]"
        >
          Hover me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      information="Tailwind"
      iconColor="#fff"
      background="bg-gradient-to-b from-gray-950 to-gray-600"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50">
          <span className="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
          <span className="relative">Hover me</span>
        </button>
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
          <button class="btn-ligth-1993">Hover me</button>
          <style>
            .btn-ligth-1993 {
             color: #B0C4DE;
             padding: 10px 20px;
             border-radius: 8px;
             border: none;             
             font-weight: 500;
             background-color: #52a06f;
             box-shadow: 0px 5px 9px #12c757;
             cursor: pointer;
  
            }
            .btn-ligth-1993:hover {  
             color: #fff;         
             background-color: #53e088;
             box-shadow: 0px 8px 45px #12c757;            
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
        <button class="button"><a >Click Me</a></button>
        <style>
          .button{
            position:relative;
            display:inline-block;
            }

          .button a{
            color:white;
            font-family:Helvetica, sans-serif;
            font-weight:bold;
            font-size:20px;
            text-align: center;
            text-decoration:none;
            background-color:#FFA12B;
            display:block;
            position:relative;
            padding:10px 20px;

            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            text-shadow: 0px 1px 0px #000;
            filter: dropshadow(color=#000, offx=0px, offy=1px);

            -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
            -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
            box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;

            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }

          .button a:active{
            top:10px;
            background-color:#F78900;

            -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
            -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
            box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
          }

          .button:after{
            content:"";
            height:100%;
            width:100%;
            padding:4px;
            position: absolute;
            bottom:-15px;
            left:-4px;
            z-index:-1;
            background-color:#2B1800;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
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
         <button class="btn btn-one"><span>Hover Me</span></button>
        <style>

        .btn {
          line-height: 50px;
          height: 50px;
          text-align: center;
          width: 150px;
          cursor: pointer;
              }

        .btn-one {
          color: #FFF;
          transition: all 0.3s;
          position: relative;
        }
        .btn-one span {
          transition: all 0.3s;
        }
        .btn-one::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          transition: all 0.3s;
          border-top-width: 1px;
          border-bottom-width: 1px;
          border-top-style: solid;
          border-bottom-style: solid;
          border-top-color: rgba(255,255,255,0.5);
          border-bottom-color: rgba(255,255,255,0.5);
          transform: scale(0.1, 1);
        }
        .btn-one:hover span {
          letter-spacing: 2px;
        }
        .btn-one:hover::before {
          opacity: 1; 
          transform: scale(1, 1); 
        }
        .btn-one::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          transition: all 0.3s;
          background-color: rgba(255,255,255,0.1);
        }
        .btn-one:hover::after {
          opacity: 0; 
          transform: scale(0.1, 1);
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
      <div class="btn btn-two"><span>Hover Me</span></div>
      <style>
        .btn-two {
          color: #FFF;
          transition: all 0.5s;
          position: relative; 
                  }
          .btn-two span {
            z-index: 2; 
            display: block;
            position: absolute;
            width: 100%;
            height: 100%; 
          }
          .btn-two::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.5s;
            border: 1px solid rgba(255,255,255,0.2);
            background-color: rgba(255,255,255,0.1);
          }
          .btn-two::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.5s;
            border: 1px solid rgba(255,255,255,0.2);
            background-color: rgba(255,255,255,0.1);
          }
          .btn-two:hover::before {
            transform: rotate(-45deg);
            background-color: rgba(255,255,255,0);
          }
          .btn-two:hover::after {
            transform: rotate(45deg);
            background-color: rgba(255,255,255,0);
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
     <div class="btn btn-three"><span>Hover Me</span></div>
     <style>
       .btn-three {
          color: #FFF;
          transition: all 0.5s;
          position: relative;
                  }
       .btn-three::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: 1;
         background-color: rgba(255,255,255,0.1);
         transition: all 0.3s;
       }
       .btn-three:hover::before {
         opacity: 0 ;
         transform: scale(0.5,0.5);
       }
       .btn-three::after {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: 1;
         opacity: 0;
         transition: all 0.3s;
         border: 1px solid rgba(255,255,255,0.5);
         transform: scale(1.2,1.2);
       }
       .btn-three:hover::after {
         opacity: 1;
         transform: scale(1,1);
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
      background="bg-gradient-to-l from-zinc-950"
      content={
        <button className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-50 px-6 font-medium text-neutral-950 transition active:scale-110 ">
          Click me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-l from-zinc-950"
      content={
        <button className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-50 px-6 font-medium text-neutral-950 shadow-lg shadow-neutral-500/20 transition active:scale-95">
          Click me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-l from-zinc-600 to-zinc-950"
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
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-red-950"
      content={
        <button className="relative overflow-hidden rounded-md bg-red-700 px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">
          Click me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-slate-950"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-50 px-6 font-medium text-neutral-950">
          <span>Hover me</span>
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-indigo-700/60"
      content={
        <button className="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-200 hover:bg-neutral-800 hover:ring-offset-2 active:ring-2 active:ring-neutral-800">
          Click me
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-blue-700/30"
      content={
        <button
          className="inline-flex h-12 items-center rounded-lg bg-blue-500 px-6 text-neutral-50 disabled:pointer-events-none disabled:opacity-50 "
          disabled={true}
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"></div>
          <span className="ml-2">Loading... </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#000"
      information="Tailwind"
      background="bg-[#fff]"
      content={
        <button
          className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950"
          title="Click"
        >
          <div className="transition duration-300 group-hover:rotate-[360deg]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-200"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-gray-700/60 to-gray-900"
      content={
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-100">
          <span className="relative inline-flex overflow-hidden">
            <div className="absolute origin-bottom transition duration-500 [transform:translateX(-150%)_skewX(33deg)] group-hover:[transform:translateX(0)_skewX(0deg)]">
              Hover me
            </div>
            <div className="transition duration-500 [transform:translateX(0%)_skewX(0deg)] group-hover:[transform:translateX(150%)_skewX(33deg)]">
              Hover me
            </div>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-slate-700/30"
      content={
        <button className="group relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-100">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
              Hover me
            </div>
            <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Hover me
            </div>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-[#000]"
      content={
        <button className="group relative h-12 overflow-hidden rounded-[8px] border border-neutral-200 bg-transparent px-4 text-neutral-100">
          <span className="relative inline-flex">
            <span className="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">
              H
            </span>
            <span className="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)]">
              o
            </span>
            <span className="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">
              v
            </span>
            <span className="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">
              e
            </span>
            <span className="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">
              r
            </span>
            <span className="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">
              &nbsp;
            </span>
            <span className="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]">
              m
            </span>
            <span className="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]">
              e
            </span>
          </span>
        </button>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-[#000]"
      content={
        <button className="group relative">
          <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-300 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
            Hover me
          </div>
          <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
        </button>
      }
    />,
    <Card
    key={generateKey()}
    iconColor="#fff"
    information="Tailwind"
    background="bg-gradient-to-b from-40% from-neutral-950 to-black"
    content={
      <a className="relative select-none cursor-pointer flex items-center justify-center w-12 h-12 bg-black text-white font-bold rounded-xl transition-all duration-300 ease-in-out group overflow-hidden hover:w-36">
      <svg
        className="absolute transition-transform duration-300 ease-in-out group-hover:-translate-x-12"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="24" 
        height="24" 
      >
        <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.305 3.438 9.8 8.205 11.4.6.111.82-.261.82-.577 0-.287-.011-1.25-.017-2.28-3.338.724-4.042-1.608-4.042-1.608-.546-1.386-1.333-1.756-1.333-1.756-1.091-.745.083-.73.083-.73 1.207.085 1.839 1.237 1.839 1.237 1.071 1.836 2.809 1.303 3.492.996.108-.775.419-1.303.761-1.603-2.665-.303-5.466-1.334-5.466-5.93 0-1.313.469-2.387 1.236-3.228-.125-.303-.535-1.53.117-3.175 0 0 1.008-.323 3.302 1.23a11.563 11.563 0 0 1 3.002-.404c1.022.004 2.052.139 3.002.404 2.294-1.553 3.302-1.23 3.302-1.23.652 1.645.243 2.872.118 3.175.77.841 1.236 1.915 1.236 3.228 0 4.607-2.805 5.624-5.474 5.92.431.372.815 1.102.815 2.224 0 1.604-.014 2.896-.014 3.287 0 .316.22.694.825.577C20.563 22.097 24 17.602 24 12.297 24 5.67 18.627.297 12 .297z" />
      </svg>

      <span className="pl-10 pr-3 text-lg uppercase 
                      opacity-0 transition-opacity ease-in 
                      group-hover:opacity-100 group-hover:duration-700">
        Follow
      </span>
    </a>
    }
  />,
  ];

  const filterCards = () => {
    return cardsButton.filter((card) => {
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
            filter === "All" && "bg-blue-700/30"
          )}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Css")}
          className={cn(
            "text-slate-50 px-2 py-1 text-sm rounded",
            filter === "Css" && "bg-blue-700/30"
          )}
        >
          CSS
        </button>
        <button
          onClick={() => setFilter("Tailwind")}
          className={cn(
            "text-slate-50 px-2 py-1 text-sm rounded",
            filter === "Tailwind" && "bg-blue-700/30"
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

export default CardsButton;
