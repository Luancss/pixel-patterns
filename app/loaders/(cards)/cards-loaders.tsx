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

const itemsPerPage = 12;

const CardsLoaders = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  let counter = 1;

  const generateKey = () => `card-${counter++}`;

  const cardsInput = [
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-l from-blue-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
  <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" class="pencil">
    <defs>
      <clipPath id="pencil-eraser">
        <rect height="30" width="30" ry="5" rx="5"></rect>
      </clipPath>
    </defs>
    <circle transform="rotate(-113,100,100)" stroke-linecap="round" stroke-dashoffset="439.82" stroke-dasharray="439.82 439.82" stroke-width="2" stroke="currentColor" fill="none" r="70" class="pencil__stroke"></circle>
    <g transform="translate(100,100)" class="pencil__rotate">
      <g fill="none">
			<circle transform="rotate(-90)" stroke-dashoffset="402" stroke-dasharray="402.12 402.12" stroke-width="30" stroke="hsl(223,90%,50%)" r="64" class="pencil__body1"></circle>
			<circle transform="rotate(-90)" stroke-dashoffset="465" stroke-dasharray="464.96 464.96" stroke-width="10" stroke="hsl(223,90%,60%)" r="74" class="pencil__body2"></circle>
			<circle transform="rotate(-90)" stroke-dashoffset="339" stroke-dasharray="339.29 339.29" stroke-width="10" stroke="hsl(223,90%,40%)" r="54" class="pencil__body3"></circle>
		</g>
		<g transform="rotate(-90) translate(49,0)" class="pencil__eraser">
			<g class="pencil__eraser-skew">
				<rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)"></rect>
				<rect clip-path="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)"></rect>
				<rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
				<rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
				<rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
				<rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)"></rect>
				<rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)"></rect>
			</g>
		</g>
		<g transform="rotate(-90) translate(49,-30)" class="pencil__point">
			<polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)"></polygon>
			<polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
			<polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)"></polygon>
		</g>
	</g>
</svg>
          <style>
.pencil {
  display: block;
  width: 10em;
  height: 10em;
}

.pencil__body1,
.pencil__body2,
.pencil__body3,
.pencil__eraser,
.pencil__eraser-skew,
.pencil__point,
.pencil__rotate,
.pencil__stroke {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.pencil__body1,
.pencil__body2,
.pencil__body3 {
  transform: rotate(-90deg);
}

.pencil__body1 {
  animation-name: pencilBody1;
}

.pencil__body2 {
  animation-name: pencilBody2;
}

.pencil__body3 {
  animation-name: pencilBody3;
}

.pencil__eraser {
  animation-name: pencilEraser;
  transform: rotate(-90deg) translate(49px,0);
}

.pencil__eraser-skew {
  animation-name: pencilEraserSkew;
  animation-timing-function: ease-in-out;
}

.pencil__point {
  animation-name: pencilPoint;
  transform: rotate(-90deg) translate(49px,-30px);
}

.pencil__rotate {
  animation-name: pencilRotate;
}

.pencil__stroke {
  animation-name: pencilStroke;
  transform: translate(100px,100px) rotate(-113deg);
}

/* Animations */
@keyframes pencilBody1 {
  from,
	to {
    stroke-dashoffset: 351.86;
    transform: rotate(-90deg);
  }

  50% {
    stroke-dashoffset: 150.8;
 /* 3/8 of diameter */
    transform: rotate(-225deg);
  }
}

@keyframes pencilBody2 {
  from,
	to {
    stroke-dashoffset: 406.84;
    transform: rotate(-90deg);
  }

  50% {
    stroke-dashoffset: 174.36;
    transform: rotate(-225deg);
  }
}

@keyframes pencilBody3 {
  from,
	to {
    stroke-dashoffset: 296.88;
    transform: rotate(-90deg);
  }

  50% {
    stroke-dashoffset: 127.23;
    transform: rotate(-225deg);
  }
}

@keyframes pencilEraser {
  from,
	to {
    transform: rotate(-45deg) translate(49px,0);
  }

  50% {
    transform: rotate(0deg) translate(49px,0);
  }
}

@keyframes pencilEraserSkew {
  from,
	32.5%,
	67.5%,
	to {
    transform: skewX(0);
  }

  35%,
	65% {
    transform: skewX(-4deg);
  }

  37.5%, 
	62.5% {
    transform: skewX(8deg);
  }

  40%,
	45%,
	50%,
	55%,
	60% {
    transform: skewX(-15deg);
  }

  42.5%,
	47.5%,
	52.5%,
	57.5% {
    transform: skewX(15deg);
  }
}

@keyframes pencilPoint {
  from,
	to {
    transform: rotate(-90deg) translate(49px,-30px);
  }

  50% {
    transform: rotate(-225deg) translate(49px,-30px);
  }
}

@keyframes pencilRotate {
  from {
    transform: translate(100px,100px) rotate(0);
  }

  to {
    transform: translate(100px,100px) rotate(720deg);
  }
}

@keyframes pencilStroke {
  from {
    stroke-dashoffset: 439.82;
    transform: translate(100px,100px) rotate(-113deg);
  }

  50% {
    stroke-dashoffset: 164.93;
    transform: translate(100px,100px) rotate(-113deg);
  }

  75%,
	to {
    stroke-dashoffset: 439.82;
    transform: translate(100px,100px) rotate(112deg);
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
      background="bg-gradient-to-l from-indigo-950/40 to-pink-950/80"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>  
</div>
          <style>
          /* From Uiverse.io by andrew-demchenk0 */ 
.pyramid-loader {
  position: relative;
  width: 300px;
  height: 300px;
  display: block;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotateY(360deg);
  }
}

.pyramid-loader .wrapper .side {
  width: 70px;
  height: 70px;
/* you can choose any gradient or color you want */
  /* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper .side1 {
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper .side2 {
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper .side3 {
  transform: rotateX(30deg);
  background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper .side4 {
  transform: rotateX(-30deg);
  background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper .shadow {
  width: 60px;
  height: 60px;
  background: #8B5AD5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
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
      background="bg-gradient-to-r from-gray-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="spinner">
  <div></div>   
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</div>
          <style>
         
.spinner {
  position: absolute;
  width: 9px;
  height: 9px;
}

.spinner div {
  position: absolute;
  width: 50%;
  height: 150%;
  background: #fff;
  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
}

.spinner div:nth-child(1) {
  --delay: 0.1;
  --rotation: 36;
  --translation: 150;
}

.spinner div:nth-child(2) {
  --delay: 0.2;
  --rotation: 72;
  --translation: 150;
}

.spinner div:nth-child(3) {
  --delay: 0.3;
  --rotation: 108;
  --translation: 150;
}

.spinner div:nth-child(4) {
  --delay: 0.4;
  --rotation: 144;
  --translation: 150;
}

.spinner div:nth-child(5) {
  --delay: 0.5;
  --rotation: 180;
  --translation: 150;
}

.spinner div:nth-child(6) {
  --delay: 0.6;
  --rotation: 216;
  --translation: 150;
}

.spinner div:nth-child(7) {
  --delay: 0.7;
  --rotation: 252;
  --translation: 150;
}

.spinner div:nth-child(8) {
  --delay: 0.8;
  --rotation: 288;
  --translation: 150;
}

.spinner div:nth-child(9) {
  --delay: 0.9;
  --rotation: 324;
  --translation: 150;
}

.spinner div:nth-child(10) {
  --delay: 1;
  --rotation: 360;
  --translation: 150;
}

@keyframes spinner-fzua35 {
  0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  }

  50% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
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
      background="bg-gradient-to-r from-red-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="loading">
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
</div>
          <style>
.loading svg polyline {
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.loading svg polyline#back {
  fill: none;
  stroke: #ff4d5033;
}

.loading svg polyline#front {
  fill: none;
  stroke: #ff4d4f;
  stroke-dasharray: 48, 144;
  stroke-dashoffset: 192;
  animation: dash_682 1.4s linear infinite;
}

@keyframes dash_682 {
  72.5% {
    opacity: 0;
  }

  to {
    stroke-dashoffset: 0;
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
      background="bg-transparent"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="banter-loader">
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
</div>
          <style>

          /* From Uiverse.io by Nawsome */ 
.banter-loader {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 72px;
  height: 72px;
  margin-left: -36px;
  margin-top: -36px;
}

.banter-loader__box {
  float: left;
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 6px;
}

.banter-loader__box:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}

.banter-loader__box:nth-child(3n) {
  margin-right: 0;
  margin-bottom: 6px;
}

.banter-loader__box:nth-child(1):before, .banter-loader__box:nth-child(4):before {
  margin-left: 26px;
}

.banter-loader__box:nth-child(3):before {
  margin-top: 52px;
}

.banter-loader__box:last-child {
  margin-bottom: 0;
}

@keyframes moveBox-1 {
  9.0909090909% {
    transform: translate(-26px, 0);
  }

  18.1818181818% {
    transform: translate(0px, 0);
  }

  27.2727272727% {
    transform: translate(0px, 0);
  }

  36.3636363636% {
    transform: translate(26px, 0);
  }

  45.4545454545% {
    transform: translate(26px, 26px);
  }

  54.5454545455% {
    transform: translate(26px, 26px);
  }

  63.6363636364% {
    transform: translate(26px, 26px);
  }

  72.7272727273% {
    transform: translate(26px, 0px);
  }

  81.8181818182% {
    transform: translate(0px, 0px);
  }

  90.9090909091% {
    transform: translate(-26px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.banter-loader__box:nth-child(1) {
  animation: moveBox-1 4s infinite;
}

@keyframes moveBox-2 {
  9.0909090909% {
    transform: translate(0, 0);
  }

  18.1818181818% {
    transform: translate(26px, 0);
  }

  27.2727272727% {
    transform: translate(0px, 0);
  }

  36.3636363636% {
    transform: translate(26px, 0);
  }

  45.4545454545% {
    transform: translate(26px, 26px);
  }

  54.5454545455% {
    transform: translate(26px, 26px);
  }

  63.6363636364% {
    transform: translate(26px, 26px);
  }

  72.7272727273% {
    transform: translate(26px, 26px);
  }

  81.8181818182% {
    transform: translate(0px, 26px);
  }

  90.9090909091% {
    transform: translate(0px, 26px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.banter-loader__box:nth-child(2) {
  animation: moveBox-2 4s infinite;
}

@keyframes moveBox-3 {
  9.0909090909% {
    transform: translate(-26px, 0);
  }

  18.1818181818% {
    transform: translate(-26px, 0);
  }

  27.2727272727% {
    transform: translate(0px, 0);
  }

  36.3636363636% {
    transform: translate(-26px, 0);
  }

  45.4545454545% {
    transform: translate(-26px, 0);
  }

  54.5454545455% {
    transform: translate(-26px, 0);
  }

  63.6363636364% {
    transform: translate(-26px, 0);
  }

  72.7272727273% {
    transform: translate(-26px, 0);
  }

  81.8181818182% {
    transform: translate(-26px, -26px);
  }

  90.9090909091% {
    transform: translate(0px, -26px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.banter-loader__box:nth-child(3) {
  animation: moveBox-3 4s infinite;
}

@keyframes moveBox-4 {
  9.0909090909% {
    transform: translate(-26px, 0);
  }

  18.1818181818% {
    transform: translate(-26px, 0);
  }

  27.2727272727% {
    transform: translate(-26px, -26px);
  }

  36.3636363636% {
    transform: translate(0px, -26px);
  }

  45.4545454545% {
    transform: translate(0px, 0px);
  }

  54.5454545455% {
    transform: translate(0px, -26px);
  }

  63.6363636364% {
    transform: translate(0px, -26px);
  }

  72.7272727273% {
    transform: translate(0px, -26px);
  }

  81.8181818182% {
    transform: translate(-26px, -26px);
  }

  90.9090909091% {
    transform: translate(-26px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.banter-loader__box:nth-child(4) {
  animation: moveBox-4 4s infinite;
}

@keyframes moveBox-5 {
  9.0909090909% {
    transform: translate(0, 0);
  }

  18.1818181818% {
    transform: translate(0, 0);
  }

  27.2727272727% {
    transform: translate(0, 0);
  }

  36.3636363636% {
    transform: translate(26px, 0);
  }

  45.4545454545% {
    transform: translate(26px, 0);
  }

  54.5454545455% {
    transform: translate(26px, 0);
  }

  63.6363636364% {
    transform: translate(26px, 0);
  }

  72.7272727273% {
    transform: translate(26px, 0);
  }

  81.8181818182% {
    transform: translate(26px, -26px);
  }

  90.9090909091% {
    transform: translate(0px, -26px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.banter-loader__box:nth-child(5) {
  animation: moveBox-5 4s infinite;
}

@keyframes moveBox-6 {
  9.0909090909% {
    transform: translate(0, 0);
  }

  18.1818181818% {
    transform: translate(-26px, 0);
  }

  27.2727272727% {
    transform: translate(-26px, 0);
  }

  36.3636363636% {
    transform: translate(0px, 0);
  }

  45.4545454545% {
    transform: translate(0px, 0);
  }

  54.5454545455% {
    transform: translate(0px, 0);
  }

  63.6363636364% {
    transform: translate(0px, 0);
  }

  72.7272727273% {
    transform: translate(0px, 26px);
  }

  81.8181818182% {
    transform: translate(-26px, 26px);
  }

  90.9090909091% {
    transform: translate(-26px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.banter-loader__box:nth-child(6) {
  animation: moveBox-6 4s infinite;
}

@keyframes moveBox-7 {
  9.0909090909% {
    transform: translate(26px, 0);
  }

  18.1818181818% {
    transform: translate(26px, 0);
  }

  27.2727272727% {
    transform: translate(26px, 0);
  }

  36.3636363636% {
    transform: translate(0px, 0);
  }

  45.4545454545% {
    transform: translate(0px, -26px);
  }

  54.5454545455% {
    transform: translate(26px, -26px);
  }

  63.6363636364% {
    transform: translate(0px, -26px);
  }

  72.7272727273% {
    transform: translate(0px, -26px);
  }

  81.8181818182% {
    transform: translate(0px, 0px);
  }

  90.9090909091% {
    transform: translate(26px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.banter-loader__box:nth-child(7) {
  animation: moveBox-7 4s infinite;
}

@keyframes moveBox-8 {
  9.0909090909% {
    transform: translate(0, 0);
  }

  18.1818181818% {
    transform: translate(-26px, 0);
  }

  27.2727272727% {
    transform: translate(-26px, -26px);
  }

  36.3636363636% {
    transform: translate(0px, -26px);
  }

  45.4545454545% {
    transform: translate(0px, -26px);
  }

  54.5454545455% {
    transform: translate(0px, -26px);
  }

  63.6363636364% {
    transform: translate(0px, -26px);
  }

  72.7272727273% {
    transform: translate(0px, -26px);
  }

  81.8181818182% {
    transform: translate(26px, -26px);
  }

  90.9090909091% {
    transform: translate(26px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.banter-loader__box:nth-child(8) {
  animation: moveBox-8 4s infinite;
}

@keyframes moveBox-9 {
  9.0909090909% {
    transform: translate(-26px, 0);
  }

  18.1818181818% {
    transform: translate(-26px, 0);
  }

  27.2727272727% {
    transform: translate(0px, 0);
  }

  36.3636363636% {
    transform: translate(-26px, 0);
  }

  45.4545454545% {
    transform: translate(0px, 0);
  }

  54.5454545455% {
    transform: translate(0px, 0);
  }

  63.6363636364% {
    transform: translate(-26px, 0);
  }

  72.7272727273% {
    transform: translate(-26px, 0);
  }

  81.8181818182% {
    transform: translate(-52px, 0);
  }

  90.9090909091% {
    transform: translate(-26px, 0);
  }

  100% {
    transform: translate(0px, 0);
  }
}

.banter-loader__box:nth-child(9) {
  animation: moveBox-9 4s infinite;
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
      background="bg-gradient-to-r from-yellow-950/40"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `

<div class="🤚">
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="🌴"></div>		
	<div class="👍"></div>
</div>
          <style>
          /* From Uiverse.io by Pradeepsaranbishnoi */ 
.🤚 {
  --skin-color: #E4C560;
  --tap-speed: 0.6s;
  --tap-stagger: 0.1s;
  position: relative;
  width: 80px;
  height: 60px;
  margin-left: 80px;
}

.🤚:before {
  content: '';
  display: block;
  width: 180%;
  height: 75%;
  position: absolute;
  top: 70%;
  right: 20%;
  background-color: black;
  border-radius: 40px 10px;
  filter: blur(10px);
  opacity: 0.3;
}

.🌴 {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--skin-color);
  border-radius: 10px 40px;
}

.👍 {
  position: absolute;
  width: 120%;
  height: 38px;
  background-color: var(--skin-color);
  bottom: -18%;
  right: 1%;
  transform-origin: calc(100% - 20px) 20px;
  transform: rotate(-20deg);
  border-radius: 30px 20px 20px 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
}

.👍:after {
  width: 20%;
  height: 60%;
  content: '';
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  bottom: -8%;
  left: 5px;
  border-radius: 60% 10% 10% 30%;
  border-right: 2px solid rgba(0, 0, 0, 0.05);
}

.👉 {
  position: absolute;
  width: 80%;
  height: 35px;
  background-color: var(--skin-color);
  bottom: 32%;
  right: 64%;
  transform-origin: 100% 20px;
  animation-duration: calc(var(--tap-speed) * 2);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transform: rotate(10deg);
}

.👉:before {
  content: '';
  position: absolute;
  width: 140%;
  height: 30px;
  background-color: var(--skin-color);
  bottom: 8%;
  right: 65%;
  transform-origin: calc(100% - 20px) 20px;
  transform: rotate(-60deg);
  border-radius: 20px;
}

.👉:nth-child(1) {
  animation-delay: 0;
  filter: brightness(70%);
  animation-name: tap-upper-1;
}

.👉:nth-child(2) {
  animation-delay: var(--tap-stagger);
  filter: brightness(80%);
  animation-name: tap-upper-2;
}

.👉:nth-child(3) {
  animation-delay: calc(var(--tap-stagger) * 2);
  filter: brightness(90%);
  animation-name: tap-upper-3;
}

.👉:nth-child(4) {
  animation-delay: calc(var(--tap-stagger) * 3);
  filter: brightness(100%);
  animation-name: tap-upper-4;
}

@keyframes tap-upper-1 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.4);
  }

  40% {
    transform: rotate(50deg) scale(0.4);
  }
}

@keyframes tap-upper-2 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.6);
  }

  40% {
    transform: rotate(50deg) scale(0.6);
  }
}

@keyframes tap-upper-3 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.8);
  }

  40% {
    transform: rotate(50deg) scale(0.8);
  }
}

@keyframes tap-upper-4 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(1);
  }

  40% {
    transform: rotate(50deg) scale(1);
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
      background="bg-gradient-to-t from-gray-700/40"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="terminal-loader">
  <div class="terminal-header">
    <div class="terminal-title">Status</div>
    <div class="terminal-controls">
      <div class="control close"></div>
      <div class="control minimize"></div>
      <div class="control maximize"></div>
    </div>
  </div>
  <div class="text">Loading...</div>
</div>

          <style>
@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 6.2em;
  } /* adjust width based on content */
  90%,
  100% {
    width: 0;
  }
}

.terminal-loader {
  border: 0.1em solid #333;
  background-color: #1a1a1a;
  color: #0f0;
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  padding: 1.5em 1em;
  width: 12em;
  margin: 100px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.terminal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background-color: #333;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 0.4em;
  box-sizing: border-box;
}

.terminal-controls {
  float: right;
}

.control {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: #777;
}

.control.close {
  background-color: #e33;
}

.control.minimize {
  background-color: #ee0;
}

.control.maximize {
  background-color: #0b0;
}

.terminal-title {
  float: left;
  line-height: 1.5em;
  color: #eee;
}

.text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid green;
  animation: typeAndDelete 4s steps(11) infinite,
    blinkCursor 0.5s step-end infinite alternate;
  margin-top: 1.5em;
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
      background="bg-gradient-to-r from-cyan-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div class="svg-frame">
	<svg style="--i:0;--j:0;">
		<g id="out1">
			<path d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"></path>
			<path mask="url(#path-1-inside-1_111_3212)" stroke-miterlimit="16" stroke-width="2" stroke="#00FFFF" d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"></path>
		</g>
	</svg>

	<svg style="--i:1;--j:1;">
		<g id="out2">
			<mask fill="white" id="path-2-inside-2_111_3212">
				<path d="M102.892 127.966C93.3733 142.905 88.9517 160.527 90.2897 178.19L94.3752 177.88C93.1041 161.1 97.3046 144.36 106.347 130.168L102.892 127.966Z"></path>
				<path d="M93.3401 194.968C98.3049 211.971 108.646 226.908 122.814 237.541L125.273 234.264C111.814 224.163 101.99 209.973 97.2731 193.819L93.3401 194.968Z"></path>
				<path d="M152.707 92.3592C140.33 95.3575 128.822 101.199 119.097 109.421L121.742 112.55C130.981 104.739 141.914 99.1897 153.672 96.3413L152.707 92.3592Z"></path>
				<path d="M253.294 161.699C255.099 175.937 253.132 190.4 247.59 203.639L243.811 202.057C249.075 189.48 250.944 175.74 249.23 162.214L253.294 161.699Z"></path>
				<path d="M172 90.0557C184.677 90.0557 197.18 92.9967 208.528 98.6474C219.875 104.298 229.757 112.505 237.396 122.621L234.126 125.09C226.869 115.479 217.481 107.683 206.701 102.315C195.921 96.9469 184.043 94.1529 172 94.1529V90.0557Z"></path>
				<path d="M244.195 133.235C246.991 138.442 249.216 143.937 250.83 149.623L246.888 150.742C245.355 145.34 243.242 140.12 240.586 135.174L244.195 133.235Z"></path>
				<path d="M234.238 225.304C223.932 237.338 210.358 246.126 195.159 250.604C179.961 255.082 163.79 255.058 148.606 250.534L149.775 246.607C164.201 250.905 179.563 250.928 194.001 246.674C208.44 242.42 221.335 234.071 231.126 222.639L234.238 225.304Z"></path>
			</mask>
			<path mask="url(#path-2-inside-2_111_3212)" fill="#00FFFF" d="M102.892 127.966L105.579 123.75L101.362 121.063L98.6752 125.28L102.892 127.966ZM90.2897 178.19L85.304 178.567L85.6817 183.553L90.6674 183.175L90.2897 178.19ZM94.3752 177.88L94.7529 182.866L99.7386 182.488L99.3609 177.503L94.3752 177.88ZM106.347 130.168L110.564 132.855L113.251 128.638L109.034 125.951L106.347 130.168ZM93.3401 194.968L91.9387 190.168L87.1391 191.569L88.5405 196.369L93.3401 194.968ZM122.814 237.541L119.813 241.54L123.812 244.541L126.813 240.542L122.814 237.541ZM125.273 234.264L129.272 237.265L132.273 233.266L128.274 230.265L125.273 234.264ZM97.2731 193.819L102.073 192.418L100.671 187.618L95.8717 189.02L97.2731 193.819ZM152.707 92.3592L157.567 91.182L156.389 86.3226L151.53 87.4998L152.707 92.3592ZM119.097 109.421L115.869 105.603L112.05 108.831L115.278 112.649L119.097 109.421ZM121.742 112.55L117.924 115.778L121.152 119.596L124.97 116.368L121.742 112.55ZM153.672 96.3413L154.849 101.201L159.708 100.023L158.531 95.1641L153.672 96.3413ZM253.294 161.699L258.255 161.07L257.626 156.11L252.666 156.738L253.294 161.699ZM247.59 203.639L245.66 208.251L250.272 210.182L252.203 205.569L247.59 203.639ZM243.811 202.057L239.198 200.126L237.268 204.739L241.88 206.669L243.811 202.057ZM249.23 162.214L248.601 157.253L243.641 157.882L244.269 162.842L249.23 162.214ZM172 90.0557V85.0557H167V90.0557H172ZM208.528 98.6474L206.299 103.123L206.299 103.123L208.528 98.6474ZM237.396 122.621L240.409 126.611L244.399 123.598L241.386 119.608L237.396 122.621ZM234.126 125.09L230.136 128.103L233.149 132.093L237.139 129.08L234.126 125.09ZM206.701 102.315L204.473 106.791L204.473 106.791L206.701 102.315ZM172 94.1529H167V99.1529H172V94.1529ZM244.195 133.235L248.601 130.87L246.235 126.465L241.83 128.83L244.195 133.235ZM250.83 149.623L252.195 154.433L257.005 153.067L255.64 148.257L250.83 149.623ZM246.888 150.742L242.078 152.107L243.444 156.917L248.254 155.552L246.888 150.742ZM240.586 135.174L238.22 130.768L233.815 133.134L236.181 137.539L240.586 135.174ZM234.238 225.304L238.036 228.556L241.288 224.759L237.491 221.506L234.238 225.304ZM195.159 250.604L196.572 255.4L196.572 255.4L195.159 250.604ZM148.606 250.534L143.814 249.107L142.386 253.899L147.178 255.326L148.606 250.534ZM149.775 246.607L151.203 241.816L146.411 240.388L144.983 245.18L149.775 246.607ZM194.001 246.674L195.415 251.47L195.415 251.47L194.001 246.674ZM231.126 222.639L234.379 218.841L230.581 215.589L227.329 219.386L231.126 222.639ZM98.6752 125.28C88.5757 141.13 83.8844 159.826 85.304 178.567L95.2754 177.812C94.0191 161.227 98.1709 144.681 107.109 130.653L98.6752 125.28ZM90.6674 183.175L94.7529 182.866L93.9976 172.895L89.912 173.204L90.6674 183.175ZM99.3609 177.503C98.1715 161.8 102.102 146.135 110.564 132.855L102.131 127.481C92.5071 142.585 88.0368 160.4 89.3895 178.258L99.3609 177.503ZM109.034 125.951L105.579 123.75L100.205 132.183L103.661 134.385L109.034 125.951ZM88.5405 196.369C93.8083 214.41 104.78 230.259 119.813 241.54L125.815 233.542C112.512 223.558 102.802 209.532 98.1397 193.566L88.5405 196.369ZM126.813 240.542L129.272 237.265L121.274 231.263L118.815 234.54L126.813 240.542ZM128.274 230.265C115.679 220.813 106.486 207.534 102.073 192.418L92.4735 195.221C97.493 212.412 107.948 227.513 122.272 238.263L128.274 230.265ZM95.8717 189.02L91.9387 190.168L94.7415 199.767L98.6745 198.619L95.8717 189.02ZM151.53 87.4998C138.398 90.681 126.188 96.8793 115.869 105.603L122.325 113.239C131.457 105.519 142.262 100.034 153.884 97.2187L151.53 87.4998ZM115.278 112.649L117.924 115.778L125.56 109.322L122.915 106.193L115.278 112.649ZM124.97 116.368C133.616 109.059 143.846 103.866 154.849 101.201L152.495 91.4818C139.981 94.5132 128.347 100.419 118.514 108.732L124.97 116.368ZM158.531 95.1641L157.567 91.182L147.848 93.5364L148.812 97.5185L158.531 95.1641ZM248.334 162.327C250.028 175.697 248.181 189.277 242.978 201.708L252.203 205.569C258.082 191.522 260.169 176.177 258.255 161.07L248.334 162.327ZM249.521 199.027L245.741 197.445L241.88 206.669L245.66 208.251L249.521 199.027ZM248.423 203.987C254.025 190.602 256.014 175.98 254.19 161.585L244.269 162.842C245.873 175.5 244.125 188.357 239.198 200.126L248.423 203.987ZM249.858 167.174L253.923 166.659L252.666 156.738L248.601 157.253L249.858 167.174ZM172 95.0557C183.903 95.0557 195.644 97.8172 206.299 103.123L210.757 94.1717C198.717 88.1761 185.45 85.0557 172 85.0557V95.0557ZM206.299 103.123C216.954 108.429 226.233 116.135 233.406 125.634L241.386 119.608C233.281 108.874 222.796 100.167 210.757 94.1717L206.299 103.123ZM234.383 118.631L231.113 121.1L237.139 129.08L240.409 126.611L234.383 118.631ZM238.116 122.077C230.393 111.849 220.403 103.552 208.93 97.8393L204.473 106.791C214.56 111.814 223.345 119.11 230.136 128.103L238.116 122.077ZM208.93 97.8393C197.458 92.1263 184.816 89.1529 172 89.1529V99.1529C183.269 99.1529 194.385 101.767 204.473 106.791L208.93 97.8393ZM177 94.1529V90.0557H167V94.1529H177ZM239.79 135.601C242.416 140.49 244.504 145.649 246.02 150.988L255.64 148.257C253.927 142.225 251.567 136.395 248.601 130.87L239.79 135.601ZM249.464 144.813L245.523 145.932L248.254 155.552L252.195 154.433L249.464 144.813ZM251.698 149.376C250.067 143.628 247.818 138.073 244.991 132.808L236.181 137.539C238.666 142.168 240.644 147.052 242.078 152.107L251.698 149.376ZM242.951 139.579L246.561 137.64L241.83 128.83L238.22 130.768L242.951 139.579ZM230.441 222.051C220.763 233.351 208.017 241.603 193.746 245.808L196.572 255.4C212.698 250.649 227.101 241.325 238.036 228.556L230.441 222.051ZM193.746 245.808C179.475 250.012 164.291 249.99 150.033 245.742L147.178 255.326C163.289 260.125 180.447 260.151 196.572 255.4L193.746 245.808ZM153.397 251.962L154.567 248.035L144.983 245.18L143.814 249.107L153.397 251.962ZM148.348 251.399C163.7 255.973 180.049 255.997 195.415 251.47L192.588 241.877C179.077 245.858 164.702 245.837 151.203 241.816L148.348 251.399ZM195.415 251.47C210.78 246.942 224.504 238.058 234.924 225.891L227.329 219.386C218.167 230.084 206.099 237.897 192.588 241.877L195.415 251.47ZM227.874 226.436L230.986 229.101L237.491 221.506L234.379 218.841L227.874 226.436Z"></path>
		</g>
	</svg>

	<svg style="--i:0;--j:2;">
		<g id="inner3">
			<path d="M195.136 135.689C188.115 131.215 179.948 128.873 171.624 128.946C163.299 129.019 155.174 131.503 148.232 136.099L148.42 136.382C155.307 131.823 163.368 129.358 171.627 129.286C179.886 129.213 187.988 131.537 194.954 135.975L195.136 135.689Z"></path>
			<path d="M195.136 208.311C188.115 212.784 179.948 215.127 171.624 215.054C163.299 214.981 155.174 212.496 148.232 207.901L148.42 207.618C155.307 212.177 163.368 214.642 171.627 214.714C179.886 214.786 187.988 212.463 194.954 208.025L195.136 208.311Z"></path>
			<path mask="url(#path-5-inside-3_111_3212)" fill="#00FFFF" d="M195.136 135.689L195.474 135.904L195.689 135.566L195.351 135.352L195.136 135.689ZM171.624 128.946L171.627 129.346L171.624 128.946ZM148.232 136.099L148.011 135.765L147.678 135.986L147.899 136.32L148.232 136.099ZM148.42 136.382L148.086 136.603L148.307 136.936L148.641 136.716L148.42 136.382ZM171.627 129.286L171.63 129.686L171.627 129.286ZM194.954 135.975L194.739 136.313L195.076 136.528L195.291 136.19L194.954 135.975ZM195.136 208.311L195.351 208.648L195.689 208.433L195.474 208.096L195.136 208.311ZM171.624 215.054L171.627 214.654L171.624 215.054ZM148.232 207.901L147.899 207.68L147.678 208.014L148.011 208.234L148.232 207.901ZM148.42 207.618L148.641 207.284L148.307 207.063L148.086 207.397L148.42 207.618ZM171.627 214.714L171.63 214.314L171.627 214.714ZM194.954 208.025L195.291 207.81L195.076 207.472L194.739 207.687L194.954 208.025ZM195.351 135.352C188.265 130.836 180.022 128.473 171.62 128.546L171.627 129.346C179.874 129.274 187.966 131.594 194.921 136.026L195.351 135.352ZM171.62 128.546C163.218 128.619 155.018 131.127 148.011 135.765L148.453 136.432C155.33 131.88 163.38 129.418 171.627 129.346L171.62 128.546ZM147.899 136.32L148.086 136.603L148.753 136.161L148.566 135.878L147.899 136.32ZM148.641 136.716C155.463 132.199 163.448 129.757 171.63 129.686L171.623 128.886C163.287 128.958 155.15 131.447 148.199 136.049L148.641 136.716ZM171.63 129.686C179.812 129.614 187.839 131.916 194.739 136.313L195.169 135.638C188.138 131.158 179.959 128.813 171.623 128.886L171.63 129.686ZM195.291 136.19L195.474 135.904L194.799 135.474L194.617 135.76L195.291 136.19ZM194.921 207.974C187.966 212.406 179.874 214.726 171.627 214.654L171.62 215.454C180.022 215.527 188.265 213.163 195.351 208.648L194.921 207.974ZM171.627 214.654C163.38 214.582 155.33 212.12 148.453 207.567L148.011 208.234C155.018 212.873 163.218 215.38 171.62 215.454L171.627 214.654ZM148.566 208.122L148.753 207.838L148.086 207.397L147.899 207.68L148.566 208.122ZM148.199 207.951C155.15 212.553 163.287 215.041 171.623 215.114L171.63 214.314C163.448 214.243 155.463 211.801 148.641 207.284L148.199 207.951ZM171.623 215.114C179.959 215.187 188.138 212.842 195.169 208.362L194.739 207.687C187.839 212.084 179.812 214.386 171.63 214.314L171.623 215.114ZM194.617 208.239L194.799 208.526L195.474 208.096L195.291 207.81L194.617 208.239Z"></path>
		</g>
		<path stroke="#00FFFF" d="M240.944 172C240.944 187.951 235.414 203.408 225.295 215.738C215.176 228.068 201.095 236.508 185.45 239.62C169.806 242.732 153.567 240.323 139.5 232.804C125.433 225.285 114.408 213.12 108.304 198.384C102.2 183.648 101.394 167.25 106.024 151.987C110.654 136.723 120.434 123.537 133.696 114.675C146.959 105.813 162.884 101.824 178.758 103.388C194.632 104.951 209.472 111.97 220.751 123.249" id="out3"></path>
	</svg>

	<svg style="--i:1;--j:3;">
		<g id="inner1">
			<path fill="#00FFFF" d="M145.949 124.51L148.554 129.259C156.575 124.859 165.672 122.804 174.806 123.331C183.94 123.858 192.741 126.944 200.203 132.236C207.665 137.529 213.488 144.815 217.004 153.261C220.521 161.707 221.59 170.972 220.09 179.997L224.108 180.665L224.102 180.699L229.537 181.607C230.521 175.715 230.594 169.708 229.753 163.795L225.628 164.381C224.987 159.867 223.775 155.429 222.005 151.179C218.097 141.795 211.628 133.699 203.337 127.818C195.045 121.937 185.266 118.508 175.118 117.923C165.302 117.357 155.525 119.474 146.83 124.037C146.535 124.192 146.241 124.349 145.949 124.51ZM224.638 164.522C224.009 160.091 222.819 155.735 221.082 151.563C217.246 142.352 210.897 134.406 202.758 128.634C194.62 122.862 185.021 119.496 175.06 118.922C165.432 118.367 155.841 120.441 147.311 124.914L148.954 127.91C156.922 123.745 165.876 121.814 174.864 122.333C184.185 122.87 193.166 126.019 200.782 131.421C208.397 136.822 214.339 144.257 217.928 152.877C221.388 161.188 222.526 170.276 221.23 179.173L224.262 179.677C224.998 174.671 225.35 169.535 224.638 164.522Z" clip-rule="evenodd" fill-rule="evenodd"></path>
			<path fill="#00FFFF" d="M139.91 220.713C134.922 217.428 130.469 213.395 126.705 208.758L130.983 205.286L130.985 205.288L134.148 202.721C141.342 211.584 151.417 217.642 162.619 219.839C173.821 222.036 185.438 220.232 195.446 214.742L198.051 219.491C197.759 219.651 197.465 219.809 197.17 219.963C186.252 225.693 173.696 227.531 161.577 225.154C154.613 223.789 148.041 221.08 142.202 217.234L139.91 220.713ZM142.752 216.399C148.483 220.174 154.934 222.833 161.769 224.173C173.658 226.504 185.977 224.704 196.689 219.087L195.046 216.09C185.035 221.323 173.531 222.998 162.427 220.82C151.323 218.643 141.303 212.747 134.01 204.122L131.182 206.5C134.451 210.376 138.515 213.607 142.752 216.399Z" clip-rule="evenodd" fill-rule="evenodd"></path>
		</g>
	</svg>

	<svg style="--i:2;--j:4;">
		<path fill="#00FFFF" d="M180.956 186.056C183.849 184.212 186.103 181.521 187.41 178.349C188.717 175.177 189.013 171.679 188.258 168.332C187.503 164.986 185.734 161.954 183.192 159.65C180.649 157.346 177.458 155.883 174.054 155.46C170.649 155.038 167.197 155.676 164.169 157.288C161.14 158.9 158.683 161.407 157.133 164.468C155.582 167.528 155.014 170.992 155.505 174.388C155.997 177.783 157.524 180.944 159.879 183.439L161.129 182.259C159.018 180.021 157.648 177.186 157.207 174.141C156.766 171.096 157.276 167.989 158.667 165.245C160.057 162.5 162.261 160.252 164.977 158.806C167.693 157.36 170.788 156.788 173.842 157.167C176.895 157.546 179.757 158.858 182.037 160.924C184.317 162.99 185.904 165.709 186.581 168.711C187.258 171.712 186.992 174.849 185.82 177.694C184.648 180.539 182.627 182.952 180.032 184.606L180.956 186.056Z" id="center1"></path>
		<path fill="#00FFFF" d="M172 166.445C175.068 166.445 177.556 168.932 177.556 172C177.556 175.068 175.068 177.556 172 177.556C168.932 177.556 166.444 175.068 166.444 172C166.444 168.932 168.932 166.445 172 166.445ZM172 177.021C174.773 177.021 177.021 174.773 177.021 172C177.021 169.227 174.773 166.979 172 166.979C169.227 166.979 166.979 169.227 166.979 172C166.979 174.773 169.227 177.021 172 177.021Z" id="center"></path>
	</svg>

</div>
          <style>
          .svg-frame {
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg-frame svg {
  position: absolute;
  transition: .5s;
  z-index: calc(1 - (0.2 * var(--j)));
  transform-origin: center;
  width: 344px;
  height: 344px;
  fill: none;
}

.svg-frame:hover svg {
  transform: rotate(-80deg) skew(30deg) translateX(calc(45px * var(--i))) translateY(calc(-35px * var(--i)));
}

.svg-frame svg #center {
  transition: .5s;
  transform-origin: center;
}

.svg-frame:hover svg #center {
  transform: rotate(-30deg) translateX(45px) translateY(-3px);
}

#out2 {
  animation: rotate16 7s ease-in-out infinite alternate;
  transform-origin: center;
}

#out3 {
  animation: rotate16 3s ease-in-out infinite alternate;
  transform-origin: center;
  stroke: #ff0;
}

#inner3,
#inner1 {
  animation: rotate16 4s ease-in-out infinite alternate;
  transform-origin: center;
}

#center1 {
  fill: #ff0;
  animation: rotate16 2s ease-in-out infinite alternate;
  transform-origin: center;
}

@keyframes rotate16 {
  to {
    transform: rotate(360deg);
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
      background="bg-gradient-to-r from-gray-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div class="mtxsly-wopwa_je25">
	<div class="vloqxs-wopwa_je25"></div>
	<div class="vloqxs-wopwa_je25"></div>
	<div class="vloqxs-wopwa_je25"></div>
</div>

          <style>
          .vloqxs-wopwa_je25 {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 160px;
  height: 100px;
  margin-left: -80px;
  margin-top: -50px;
  border-radius: 5px;
  background: #1e3f57;
  animation: zydrax-1sw78_9 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
}

.vloqxs-wopwa_je25:nth-child(2) {
  z-index: 11;
  width: 150px;
  height: 90px;
  margin-top: -45px;
  margin-left: -75px;
  border-radius: 3px;
  background: #3c517d;
  animation-name: wudroft-8kp21_;
}

.vloqxs-wopwa_je25:nth-child(3) {
  z-index: 12;
  width: 40px;
  height: 20px;
  margin-top: 50px;
  margin-left: -20px;
  border-radius: 0 0 5px 5px;
  background: #6bb2cd;
  animation-name: qimvla-4shzq_;
}

@keyframes zydrax-1sw78_9 {
  3%, 97% {
    width: 160px;
    height: 100px;
    margin-top: -50px;
    margin-left: -80px;
  }
  30%, 36% {
    width: 80px;
    height: 120px;
    margin-top: -60px;
    margin-left: -40px;
  }
  63%, 69% {
    width: 40px;
    height: 80px;
    margin-top: -40px;
    margin-left: -20px;
  }
}

@keyframes wudroft-8kp21_ {
  3%, 97% {
    height: 90px;
    width: 150px;
    margin-left: -75px;
    margin-top: -45px;
  }
  30%, 36% {
    width: 70px;
    height: 96px;
    margin-left: -35px;
    margin-top: -48px;
  }
  63%, 69% {
    width: 32px;
    height: 60px;
    margin-left: -16px;
    margin-top: -30px;
  }
}

@keyframes qimvla-4shzq_ {
  3%, 97% {
    height: 20px;
    width: 40px;
    margin-left: -20px;
    margin-top: 50px;
  }
  30%, 36% {
    width: 8px;
    height: 8px;
    margin-left: -5px;
    margin-top: 49px;
    border-radius: 8px;
  }
  63%, 69% {
    width: 16px;
    height: 4px;
    margin-left: -8px;
    margin-top: -37px;
    border-radius: 10px;
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
      background="bg-[#000]"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="newtons-cradle">
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
</div>
          <style>
.newtons-cradle {
 --uib-size: 50px;
 --uib-speed: 1.2s;
 --uib-color: #fff;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 width: var(--uib-size);
 height: var(--uib-size);
}

.newtons-cradle__dot {
 position: relative;
 display: flex;
 align-items: center;
 height: 100%;
 width: 25%;
 transform-origin: center top;
}

.newtons-cradle__dot::after {
 content: '';
 display: block;
 width: 100%;
 height: 25%;
 border-radius: 50%;
 background-color: var(--uib-color);
}

.newtons-cradle__dot:first-child {
 animation: swing var(--uib-speed) linear infinite;
}

.newtons-cradle__dot:last-child {
 animation: swing2 var(--uib-speed) linear infinite;
}

@keyframes swing {
 0% {
  transform: rotate(0deg);
  animation-timing-function: ease-out;
 }

 25% {
  transform: rotate(70deg);
  animation-timing-function: ease-in;
 }

 50% {
  transform: rotate(0deg);
  animation-timing-function: linear;
 }
}

@keyframes swing2 {
 0% {
  transform: rotate(0deg);
  animation-timing-function: linear;
 }

 50% {
  transform: rotate(0deg);
  animation-timing-function: ease-out;
 }

 75% {
  transform: rotate(-70deg);
  animation-timing-function: ease-in;
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
      background="bg-gradient-to-r from-blue-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="typewriter">
    <div class="slide"><i></i></div>
    <div class="paper"></div>
    <div class="keyboard"></div>
</div>
        
      <style>
.typewriter {
  --blue: #5C86FF;
  --blue-dark: #275EFE;
  --key: #fff;
  --paper: #EEF0FD;
  --text: #D3D4EC;
  --tool: #FBC56C;
  --duration: 3s;
  position: relative;
  -webkit-animation: bounce05 var(--duration) linear infinite;
  animation: bounce05 var(--duration) linear infinite;
}

.typewriter .slide {
  width: 92px;
  height: 20px;
  border-radius: 3px;
  margin-left: 14px;
  transform: translateX(14px);
  background: linear-gradient(var(--blue), var(--blue-dark));
  -webkit-animation: slide05 var(--duration) ease infinite;
  animation: slide05 var(--duration) ease infinite;
}

.typewriter .slide:before, .typewriter .slide:after,
.typewriter .slide i:before {
  content: "";
  position: absolute;
  background: var(--tool);
}

.typewriter .slide:before {
  width: 2px;
  height: 8px;
  top: 6px;
  left: 100%;
}

.typewriter .slide:after {
  left: 94px;
  top: 3px;
  height: 14px;
  width: 6px;
  border-radius: 3px;
}

.typewriter .slide i {
  display: block;
  position: absolute;
  right: 100%;
  width: 6px;
  height: 4px;
  top: 4px;
  background: var(--tool);
}

.typewriter .slide i:before {
  right: 100%;
  top: -2px;
  width: 4px;
  border-radius: 2px;
  height: 14px;
}

.typewriter .paper {
  position: absolute;
  left: 24px;
  top: -26px;
  width: 40px;
  height: 46px;
  border-radius: 5px;
  background: var(--paper);
  transform: translateY(46px);
  -webkit-animation: paper05 var(--duration) linear infinite;
  animation: paper05 var(--duration) linear infinite;
}

.typewriter .paper:before {
  content: "";
  position: absolute;
  left: 6px;
  right: 6px;
  top: 7px;
  border-radius: 2px;
  height: 4px;
  transform: scaleY(0.8);
  background: var(--text);
  box-shadow: 0 12px 0 var(--text), 0 24px 0 var(--text), 0 36px 0 var(--text);
}

.typewriter .keyboard {
  width: 120px;
  height: 56px;
  margin-top: -10px;
  z-index: 1;
  position: relative;
}

.typewriter .keyboard:before, .typewriter .keyboard:after {
  content: "";
  position: absolute;
}

.typewriter .keyboard:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 7px;
  background: linear-gradient(135deg, var(--blue), var(--blue-dark));
  transform: perspective(10px) rotateX(2deg);
  transform-origin: 50% 100%;
}

.typewriter .keyboard:after {
  left: 2px;
  top: 25px;
  width: 11px;
  height: 4px;
  border-radius: 2px;
  box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
  -webkit-animation: keyboard05 var(--duration) linear infinite;
  animation: keyboard05 var(--duration) linear infinite;
}

@keyframes bounce05 {
  85%, 92%, 100% {
    transform: translateY(0);
  }

  89% {
    transform: translateY(-4px);
  }

  95% {
    transform: translateY(2px);
  }
}

@keyframes slide05 {
  5% {
    transform: translateX(14px);
  }

  15%, 30% {
    transform: translateX(6px);
  }

  40%, 55% {
    transform: translateX(0);
  }

  65%, 70% {
    transform: translateX(-4px);
  }

  80%, 89% {
    transform: translateX(-12px);
  }

  100% {
    transform: translateX(14px);
  }
}

@keyframes paper05 {
  5% {
    transform: translateY(46px);
  }

  20%, 30% {
    transform: translateY(34px);
  }

  40%, 55% {
    transform: translateY(22px);
  }

  65%, 70% {
    transform: translateY(10px);
  }

  80%, 85% {
    transform: translateY(0);
  }

  92%, 100% {
    transform: translateY(46px);
  }
}

@keyframes keyboard05 {
  5%, 12%, 21%, 30%, 39%, 48%, 57%, 66%, 75%, 84% {
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
  }

  9% {
    box-shadow: 15px 2px 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
  }

  18% {
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 2px 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
  }

  27% {
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 12px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
  }

  36% {
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 12px 0 var(--key), 60px 12px 0 var(--key), 68px 12px 0 var(--key), 83px 10px 0 var(--key);
  }

  45% {
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 2px 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
  }

  54% {
    box-shadow: 15px 0 0 var(--key), 30px 2px 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
  }

  63% {
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 12px 0 var(--key);
  }

  72% {
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 2px 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
  }

  81% {
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 12px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
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
      background="bg-gradient-to-b from-yellow-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="loader-up"></div>
        <style>
.loader-up {
  position: relative;
  font-size: 16px;
  width: 5.5em;
  height: 5.5em;
}

.loader-up:before {
  content: '';
  position: absolute;
  transform: translate(-50%, -50%) rotate(45deg);
  height: 100%;
  width: 4px;
  background: #fff;
  left: 50%;
  top: 50%;
}

.loader-up:after {
  content: '';
  position: absolute;
  left: 0.2em;
  bottom: 0.18em;
  width: 1em;
  height: 1em;
  background-color: orange;
  border-radius: 15%;
  animation: rollingRock 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
}

@keyframes rollingRock {
  0% {
    transform: translate(0, -1em) rotate(-45deg)
  }

  5% {
    transform: translate(0, -1em) rotate(-50deg)
  }

  20% {
    transform: translate(1em, -2em) rotate(47deg)
  }

  25% {
    transform: translate(1em, -2em) rotate(45deg)
  }

  30% {
    transform: translate(1em, -2em) rotate(40deg)
  }

  45% {
    transform: translate(2em, -3em) rotate(137deg)
  }

  50% {
    transform: translate(2em, -3em) rotate(135deg)
  }

  55% {
    transform: translate(2em, -3em) rotate(130deg)
  }

  70% {
    transform: translate(3em, -4em) rotate(217deg)
  }

  75% {
    transform: translate(3em, -4em) rotate(220deg)
  }

  100% {
    transform: translate(0, -1em) rotate(-225deg)
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
      background="bg-gradient-to-t from-slate-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
</div>
          <style> 
.dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: .9s;
  --uib-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot-spinner__dot::before {
  content: '';
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
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
      iconColor="#000"
      information="Tailwind"
      background="bg-gradient-to-r from-slate-400/40 to-slate-500"
      content={
        <div className="relative flex w-64 animate-pulse gap-2 p-4">
          <div className="h-12 w-12 rounded-full bg-slate-400"></div>
          <div className="flex-1">
            <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
            <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
          </div>
          <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
        </div>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-gray-950"
      content={
        <div className="flex flex-row gap-2">
          <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-full"></div>
            <div className="animate-pulse bg-gray-300 w-36 h-5 rounded-full"></div>
          </div>
        </div>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-t from-indigo-950"
      content={
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      }
    />,
    <Card
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-yellow-950/50"
      content={
        <div
          className="loader border-t-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin
aspect-square w-8 flex justify-center items-center text-yellow-700"
        >
          $
        </div>
      }
    />,
  ];

  const filterLoaders = () => {
    return cardsInput.filter((card) => {
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
      <div className="grid grid-cols-4 gap-1">{paginatedCards()}</div>
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

export default CardsLoaders;
