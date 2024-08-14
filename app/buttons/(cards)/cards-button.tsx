"use client";

import { Card } from "@/components/cards/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const itemsPerPage = 16;

const CardsButton = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  let counter = 1;

  const generateKey = () => `card-${counter++}`;

  const cardsButton = [
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
      <div className="grid grid-cols-4 gap-1 mb-14">{paginatedCards()}</div>
      <Pagination>
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
