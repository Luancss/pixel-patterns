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
import { CardForm } from "@/components/cards/card-form";

const itemsPerPage = 6;

const CardsForm = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  let counter = 1;

  const generateKey = () => `card-${counter++}`;

  const cardsForm = [
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-purple-950/70"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="login-form-container">
    <p class="login-title">Login</p>
    <form class="login-form">
        <div class="login-input-group">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" placeholder="">
        </div>
        <div class="login-input-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="">
            <div class="login-forgot">
                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
            </div>
        </div>
        <button class="login-sign">Sign in</button>
    </form>
    <div class="login-social-message">
        <div class="login-line"></div>
        <p class="login-message">Login with social accounts</p>
        <div class="login-line"></div>
    </div>
    <div class="login-social-icons">
        <button aria-label="Log in with Google" class="login-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
        </button>
        <button aria-label="Log in with Twitter" class="login-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
        </button>
        <button aria-label="Log in with GitHub" class="login-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
        </button>
    </div>
    <p class="login-signup">Don't have an account?
        <a rel="noopener noreferrer" href="#" class="">Sign up</a>
    </p>
</div>

        <style>
.login-form-container {
  width: 320px;
  border-radius: 0.75rem;
  background-color: rgba(17, 24, 39, 1);
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
}

.login-title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.login-form {
  margin-top: 1.5rem;
}

.login-input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.login-input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.login-input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: rgba(17, 24, 39, 1);
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
}

.login-input-group input:focus {
  border-color: rgba(167, 139, 250);
}

.login-forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175,1);
  margin: 8px 0 14px 0;
}

.login-forgot a, .login-signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.login-forgot a:hover, .login-signup a:hover {
  text-decoration: underline rgba(167, 139, 250, 1);
}

.login-sign {
  display: block;
  width: 100%;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
}

.login-social-message {
  display: flex;
  align-items: center;
  padding-top: 1rem;
}

.login-line {
  height: 1px;
  flex: 1 1 0%;
  background-color: rgba(55, 65, 81, 1);
}

.login-social-message .login-message {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(156, 163, 175, 1);
}

.login-social-icons {
  display: flex;
  justify-content: center;
}

.login-social-icons .login-icon {
  border-radius: 0.125rem;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
  margin-left: 8px;
}

.login-social-icons .login-icon svg {
  height: 1.25rem;
  width: 1.25rem;
  fill: #fff;
}

.login-signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}
        </style>
      `,
          }}
        />
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-slate-950 to-slate-800"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<form class="form">
  <div class="flex-column">
    <label>Email </label></div>
    <div class="inputForm">
      <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
      <input type="text" class="input" placeholder="Enter your Email">
    </div>
  
  <div class="flex-column">
    <label>Password </label></div>
    <div class="inputForm">
      <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>        
      <input type="password" class="input" placeholder="Enter your Password">
      <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
    </div>
  
  <div class="flex-row">
    <div>
    <input type="checkbox">
    <label>Remember me </label>
    </div>
    <span class="span">Forgot password?</span>
  </div>
  <button class="button-submit">Sign In</button>
  <p class="p">Don't have an account? <span class="span">Sign Up</span>

  <div class="flex-row">
    <button class="btn google">
      <svg version="1.1" width="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
<path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
<path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
<path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
C318.115,0,375.068,22.126,419.404,58.936z"></path>
</svg>
      Google 
    </button><button class="btn apple">
<svg version="1.1" height="20" width="20" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.773 22.773" style="enable-background:new 0 0 22.773 22.773;" xml:space="preserve"> <g> <g> <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path> <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path> </g></g></svg>
      Apple 
</button></div></form>
        <style>
.form {
display: flex;
flex-direction: column;
gap: 10px;
background-color: #ffffff;
padding: 30px;
width: 450px;
border-radius: 20px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

::placeholder {
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.form button {
align-self: flex-end;
}

.flex-column > label {
color: #151717;
font-weight: 600;
}

.inputForm {
border: 1.5px solid #ecedec;
border-radius: 10px;
height: 50px;
display: flex;
align-items: center;
padding-left: 10px;
transition: 0.2s ease-in-out;
}

.input {
margin-left: 10px;
border-radius: 10px;
border: none;
width: 85%;
height: 100%;
}

.input:focus {
outline: none;
}

.inputForm:focus-within {
border: 1.5px solid #2d79f3;
}

.flex-row {
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
justify-content: space-between;
}

.flex-row > div > label {
font-size: 14px;
color: black;
font-weight: 400;
}

.span {
font-size: 14px;
margin-left: 5px;
color: #2d79f3;
font-weight: 500;
cursor: pointer;
}

.button-submit {
margin: 20px 0 10px 0;
background-color: #151717;
border: none;
color: white;
font-size: 15px;
font-weight: 500;
border-radius: 10px;
height: 50px;
width: 100%;
cursor: pointer;
}

.button-submit:hover {
background-color: #252727;
}

.p {
text-align: center;
color: black;
font-size: 14px;
margin: 5px 0;
}

.btn {
margin-top: 10px;
width: 100%;
height: 50px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
gap: 10px;
border: 1px solid #ededef;
background-color: white;
cursor: pointer;
transition: 0.2s ease-in-out;
}

.btn:hover {
border: 1px solid #2d79f3;
;
}
        </style>
      `,
          }}
        />
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-zinc-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="master-container">
  <div class="cardCart cartBuy">
    <label class="title">Your cart</label>
    <div class="products">
      <div class="product">
        <svg fill="none" viewBox="0 0 60 60" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
<rect fill="#FFF6EE" rx="8.25" height="60" width="60"></rect>
<path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.25" stroke="#FF8413" fill="#FFB672" d="M34.2812 18H25.7189C21.9755 18 18.7931 20.5252 17.6294 24.0434C17.2463 25.2017 17.0547 25.7808 17.536 26.3904C18.0172 27 18.8007 27 20.3675 27H39.6325C41.1993 27 41.9827 27 42.4639 26.3904C42.9453 25.7808 42.7538 25.2017 42.3707 24.0434C41.207 20.5252 38.0246 18 34.2812 18Z"></path>
<path fill="#FFB672" d="M18 36H17.25C16.0074 36 15 34.9926 15 33.75C15 32.5074 16.0074 31.5 17.25 31.5H29.0916C29.6839 31.5 30.263 31.6754 30.7557 32.0039L33.668 33.9453C34.1718 34.2812 34.8282 34.2812 35.332 33.9453L38.2443 32.0039C38.7371 31.6754 39.3161 31.5 39.9084 31.5H42.75C43.9926 31.5 45 32.5074 45 33.75C45 34.9926 43.9926 36 42.75 36H42M18 36L18.6479 38.5914C19.1487 40.5947 20.9486 42 23.0135 42H36.9865C39.0514 42 40.8513 40.5947 41.3521 38.5914L42 36M18 36H28.5ZM42 36H39.75Z"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.25" stroke="#FF8413" d="M18 36H17.25C16.0074 36 15 34.9926 15 33.75C15 32.5074 16.0074 31.5 17.25 31.5H29.0916C29.6839 31.5 30.263 31.6754 30.7557 32.0039L33.668 33.9453C34.1718 34.2812 34.8282 34.2812 35.332 33.9453L38.2443 32.0039C38.7371 31.6754 39.3161 31.5 39.9084 31.5H42.75C43.9926 31.5 45 32.5074 45 33.75C45 34.9926 43.9926 36 42.75 36H42M18 36L18.6479 38.5914C19.1487 40.5947 20.9486 42 23.0135 42H36.9865C39.0514 42 40.8513 40.5947 41.3521 38.5914L42 36M18 36H28.5M42 36H39.75"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#FF8413" d="M34.512 22.5H34.4982"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.25" stroke="#FF8413" d="M27.75 21.75L26.25 23.25"></path>
</svg>
        <div>
          <span>Cheese Burger</span>
          <p>Extra Spicy</p>
          <p>No mayo</p>
        </div>
        <div class="quantity">
          <button>
            <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M20 12L4 12"></path>
            </svg>
          </button>
          <label>2</label>
          <button>
            <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
            </svg>
          </button>
        </div>
        <label class="price small">$23.99</label>
      </div>
    </div>
  </div>

  <div class="cardCart coupons">
    <label class="title">Apply coupons</label>
    <form class="form">
        <input type="text" placeholder="Apply your coupons here" class="input_field">
        <button>Apply</button>
    </form>
  </div>

  <div class="cardCart checkout">
    <label class="title">Checkout</label>
    <div class="details">
      <span>Your cart subtotal:</span>
      <span>47.99$</span>
      <span>Discount through applied coupons:</span>
      <span>3.99$</span>
      <span>Shipping fees:</span>
      <span>4.99$</span>
    </div>
    <div class="checkout--footer">
      <label class="price"><sup>$</sup>57.99</label>
      <button class="checkout-btn">Checkout</button>
    </div>
  </div>
</div>
        <style>
.master-container {
  display: grid;
  grid-template-columns: auto;
  gap: 5px;
}

.cardCart {
  width: 400px;
  background: #FFFFFF;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.title {
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid #efeff3;
  font-weight: 700;
  font-size: 11px;
  color: #63656b;
}

.cartBuy {
  border-radius: 19px 19px 7px 7px;
}

.cartBuy .products {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.cartBuy .products .product {
  display: grid;
  grid-template-columns: 60px 1fr 80px 1fr;
  gap: 10px;
}

.cartBuy .products .product span {
  font-size: 13px;
  font-weight: 600;
  color: #47484b;
  margin-bottom: 8px;
  display: block;
}

.cartBuy .products .product p {
  font-size: 11px;
  font-weight: 600;
  color: #7a7c81;
}

.cartBuy .quantity {
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 7px;
  filter: drop-shadow(0px 1px 0px #efefef)
    drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
}

.cartBuy .quantity label {
  width: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2px;
  font-size: 15px;
  font-weight: 700;
  color: #47484b;
}

.cartBuy .quantity button {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  background-color: transparent;
  padding-bottom: 2px;
}

.cardCart .small {
  font-size: 15px;
  margin: 0 0 auto auto;
}

.cardCart .small sup {
  font-size: px;
}

.coupons {
  border-radius: 7px;
}

.coupons form {
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: 10px;
  padding: 10px;
  width: 100%;
}

.input_field {
  width: auto;
  height: 36px;
  padding: 0 0 0 12px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef)
    drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #242424;
  background-color: transparent;
}

.coupons form button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  width: 100%;
  height: 36px;
  background: linear-gradient(180deg, #4480FF 0%, #115DFC 50%, #0550ED 100%);
  box-shadow: 0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
  border-radius: 5px;
  border: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
}

.checkout {
  border-radius: 9px 9px 19px 19px;
}

.checkout .details {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 10px;
  gap: 5px;
}

.checkout .details span {
  font-size: 13px;
  font-weight: 600;
}

.checkout .details span:nth-child(odd) {
  font-size: 11px;
  font-weight: 700;
  color: #707175;
  margin: auto auto auto 0;
}

.checkout .details span:nth-child(even) {
  font-size: 13px;
  font-weight: 600;
  color: #47484b;
  margin: auto 0 auto auto;
}

.checkout .checkout--footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  background-color: #efeff3;
}

.price {
  position: relative;
  font-size: 22px;
  color: #2B2B2F;
  font-weight: 900;
}

.price sup {
  font-size: 13px;
}

.price sub {
  width: fit-content;
  position: absolute;
  font-size: 11px;
  color: #5F5D6B;
  bottom: 5px;
  display: inline-block;
}

.checkout .checkout-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 36px;
  background: linear-gradient(180deg, #4480FF 0%, #115DFC 50%, #0550ED 100%);
  box-shadow: 0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
  border-radius: 7px;
  border: 0;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}
        </style>
      `,
          }}
        />
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-gray-950"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="modal">
<form class="form">
  <div class="banner"></div>
  <label class="title">Get New customers faster</label>
  <p class="description">Grow your customer base with our tools, you can reach a much bigger and better fan community. Go PRO now! </p>
  <div class="tab-container">
    <button class="tab tab--1">Monthly</button>
    <button class="tab tab--2">Annual</button>
    <div class="indicator"></div>
  </div>

  <div class="benefits">
    <span>What we offer</span>
    <ul>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
          <rect fill="black" rx="8" height="16" width="16"></rect>
          <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
        </svg>
        <span>Grow your customer with our social network tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
          <rect fill="black" rx="8" height="16" width="16"></rect>
          <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
        </svg>
        <span>Use E-mail automations to promote your products.</span>
      </li>
    </ul>
  </div>

  <div class="modal--footer">
    <label class="price"><sup>$</sup>9<sub>/mo</sub></label>
    <button class="upgrade-btn">Upgrade to PRO</button>
  </div>
</form>
</div>
      <style>
.modal {
width: 450px;
background: linear-gradient(180deg, #DCF9E0 0%, #FFFFFF 30.21%);
box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
border-radius: 16px;
}

.banner {
width: 100%;
height: 30px;
margin: 0;
background-size: 100%;
background-repeat: no-repeat;
}

.title {
font-weight: 700;
font-size: 17px;
line-height: 21px;
text-align: center;
color: #2B2B2F;
margin-bottom: 15px;
}

.description {
max-width: 80%;
margin: auto;
font-weight: 600;
font-size: 11px;
line-height: 16px;
text-align: center;
color: #5F5D6B;
}

.tab-container {
display: flex;
flex-direction: row;
align-items: flex-start;
position: relative;
padding: 2px;
background-color: #ebebec;
border-radius: 9px;
margin: 10px 20px 0px 20px;
}

.indicator {
content: "";
width: 50%;
height: 28px;
background: #FFFFFF;
position: absolute;
top: 2px;
left: 2px;
z-index: 9;
border: 0.5px solid rgba(0, 0, 0, 0.04);
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
border-radius: 7px;
transition: all 0.2s ease-out;
}

.tab {
width: 50%;
height: 28px;
position: relative;
z-index: 99;
background-color: transparent;
border: 0;
outline: none;
flex: none;
align-self: stretch;
flex-grow: 1;
cursor: pointer;
font-weight: 500;
}

.tab--1:hover ~ .indicator {
left: 2px;
}

.tab--2:hover ~ .indicator {
left: calc(50% - 2px);
}

.benefits {
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
}

.benefits > span {
font-size: 15px;
color: #2B2B2F;
font-weight: 700;
}

.benefits ul {
display: flex;
flex-direction: column;
gap: 10px;
}

.benefits ul li {
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
}

.benefits ul li span {
font-weight: 600;
font-size: 12px;
color: #5F5D6B;
}

.modal--footer {
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
border-top: 1px solid #ebebec;
}

.price {
position: relative;
font-size: 32px;
color: #2B2B2F;
font-weight: 900;
}

.price sup {
font-size: 13px;
}

.price sub {
width: fit-content;
position: absolute;
font-size: 11px;
color: #5F5D6B;
bottom: 5px;
display: inline-block;
}

.upgrade-btn {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 215px;
height: 40px;
background: #0bdd12;
box-shadow: 0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
border-radius: 7px;
border: 0;
outline: none;
color: #ffffff;
font-size: 13px;
font-weight: 600;
transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.upgrade-btn:hover {
background-color: #07b90d;
}

.form {
display: flex;
flex-direction: column;
gap: 10px;
}
      </style>
    `,
          }}
        />
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-[#000]"
      content={
        <div className="bg-black text-white flex flex-col items-center pt-16 sm:justify-center sm:pt-0">
          <a href="#">
            <div className="text-slate-400 font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                  />
                </svg>
              </div>
              Pixel Patterns
            </div>
          </a>
          <div className="relative mt-12 w-full max-w-lg sm:mt-10">
            <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
            <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                  Login
                </h3>
                <p className="mt-1.5 text-sm font-medium text-white/50">
                  Welcome back, enter your credentials to continue.
                </p>
              </div>
              <div className="p-6 pt-0">
                <form>
                  <div>
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                          Username
                        </label>
                        <div className="absolute right-3 translate-y-2 text-green-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        name="username"
                        placeholder="..."
                        autoComplete="off"
                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                          Password
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="******"
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="remember"
                        className="outline-none focus:outline focus:outline-sky-300"
                      />
                      <span className="text-xs">Remember me</span>
                    </label>
                    <a
                      className="text-sm font-medium text-foreground underline"
                      href="/forgot-password"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-4 flex items-center justify-end gap-x-2">
                    <a
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                      href="/register"
                    >
                      Register
                    </a>
                    <button
                      className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-blue-950"
      content={
        <div className="flex items-center justify-center w-full dark:bg-gray-950">
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
            <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
              Welcome Back!
            </h1>
            <form action="#">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  required
                />
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                    defaultChecked
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Account
                </a>
              </div>
              <button
                type="submit"
                onClick={() => alert("hello")}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-slate-950 to-slate-800"
      content={
        <div className="flex flex-col items-center justify-center dark w-[400px]">
          <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
            <form className="flex flex-col">
              <input
                placeholder="Email address"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
              />
              <input
                placeholder="Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
              />
              <div className="flex items-center justify-between flex-wrap">
                <label
                  className="text-sm text-gray-200 cursor-pointer"
                  htmlFor="remember-me"
                >
                  <input className="mr-2" id="remember-me" type="checkbox" />
                  Remember me
                </label>
                <a
                  className="text-sm text-blue-500 hover:underline mb-0.5"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
              <p className="text-white mt-4">
                Don't have an account?{" "}
                <a
                  className="text-sm text-blue-500 hover:underline mt-4"
                  href="#"
                >
                  Signup
                </a>
              </p>
              <button
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-slate-950"
      content={
        <div className="flex justify-center items-center">
          <div className="max-w-[720px] mx-auto">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
              <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
                <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                  Sign In
                </h3>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    id="email"
                    type="email"
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    id="password"
                    type="password"
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
                <div className="-ml-2.5">
                  <div className="inline-flex items-center">
                    <label
                      htmlFor="checkbox"
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="checkbox"
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px font-light text-gray-700 cursor-pointer select-none"
                      htmlFor="checkbox"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Sign In
                </button>
                <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                  Don't have an account?
                  <a
                    href="#signup"
                    className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-gray-950 to-gray-900"
      content={
        <div className="flex justify-center items-center antialiased">
          <div className="containe my-auto max-w-md border-2 rounded-[20px] p-3 bg-gray-800">
            {/* header */}
            <div className="text-center m-6">
              <h1 className="text-3xl font-semibold text-gray-100">
                Oublié votre mot de passe?
              </h1>
              <p className="text-gray-200">
                Il suffit d'entrer votre adresse e-mail ci-dessous et nous vous
                enverrons un lien pour réinitialiser votre mot de passe !!
              </p>
            </div>
            {/* sign-in */}
            <div className="m-6">
              <form className="mb-4">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-100 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="votre adress email"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-4 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none duration-100 ease-in-out"
                  >
                    Envoyer le lien de réinitialisation
                  </button>
                </div>
                <p className="text-sm text-center text-gray-200">
                  Pas encore de compte ?
                  <a
                    href="#!"
                    className="font-semibold text-teal-500 focus:text-indigo-600 focus:outline-none focus:underline"
                  >
                    Inscrivez-vous
                  </a>
                  .
                </p>
              </form>
              {/* separator */}
              <div className="flex flex-row justify-center mb-8">
                <span className="absolute bg-gray-800 px-4 text-gray-100">
                  Ou connectez-vous avec
                </span>
                <div className="w-full bg-gray-200 mt-3 h-px"></div>
              </div>
              {/* alternate sign-in */}
              <div className="flex flex-row gap-2">
                <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-900 duration-100 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  Github
                </button>
                <button className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      ></path>
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible"></use>
                    </clipPath>
                    <path
                      clipPath="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    ></path>
                    <path
                      clipPath="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    ></path>
                    <path
                      clipPath="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    ></path>
                    <path
                      clipPath="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    ></path>
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    />,

    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-zinc-900 to-zinc-950"
      content={
        <div className="flex justify-center items-center w-[700px]">
          <div className="container my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
            {/* header */}
            <div className="text-center my-6">
              <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
              <p className="text-gray-500">Sign in to access your account</p>
            </div>
            {/* sign-in */}
            <div className="m-6">
              <form className="mb-4">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                    <a
                      href="#!"
                      className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Don't have an account yet?
                  <a
                    href="#!"
                    className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                  >
                    Sign up
                  </a>
                  .
                </p>
              </form>
              {/* separator */}
              <div className="flex flex-row justify-center mb-8">
                <span className="absolute bg-white px-4 text-gray-500">
                  or sign-in with
                </span>
                <div className="w-full bg-gray-200 mt-3 h-px"></div>
              </div>
              {/* alternate sign-in */}
              <div className="flex flex-row gap-2">
                <button className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="w-5"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  Google
                </button>
                <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="w-5"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-t from-yellow-950/50"
      content={
        <div
          dangerouslySetInnerHTML={{
            __html: `
<div class="cardLog">
  <h4 class="titleCard">Log In!</h4>
  <form>
    <div class="fieldCard">
      <svg class="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path></svg>
      <input autocomplete="off" id="logemail" placeholder="Email" class="input-field" name="logemail" type="email">
    </div>
    <div class="fieldCard">
      <svg class="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
      <input autocomplete="off" id="logpass" placeholder="Password" class="input-field" name="logpass" type="password">
    </div>
    <button class="btn" type="submit">Login</button>
    <a href="#" class="btn-link">Forgot your password?</a>
  </form>
</div>
        <style>
.cardLog {
 width: 190px;
 padding: 1.9rem 1.2rem;
 text-align: center;
 background: #2a2b38;
}

/*Inputs*/
.fieldCard {
 margin-top: .5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: .5em;
 background-color: #1f2029;
 border-radius: 4px;
 padding: .5em 1em;
}

.input-icon {
 height: 1em;
 width: 1em;
 fill: #ffeba7;
}

.input-field {
 background: none;
 border: none;
 outline: none;
 width: 100%;
 color: #d3d3d3;
}

/*Text*/
.titleCard {
 margin-bottom: 1rem;
 font-size: 1.5em;
 font-weight: 500;
 color: #f5f5f5;
}

/*Buttons*/
.btn {
 margin: 1rem;
 border: none;
 border-radius: 4px;
 font-weight: bold;
 font-size: .8em;
 text-transform: uppercase;
 padding: 0.6em 1.2em;
 background-color: #ffeba7;
 color: #5e6681;
 box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
 transition: all .3s ease-in-out;
}

.btn-link {
 color: #f5f5f5;
 display: block;
 font-size: .75em;
 transition: color .3s ease-out;
}

/*Hover & focus*/
.fieldCard input:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}

.btn:hover {
 background-color: #5e6681;
 color: #ffeba7;
 box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
}

.btn-link:hover {
 color: #ffeba7;
}
        </style>
      `,
          }}
        />
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-r from-red-950"
      content={
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-500">
              Sign in to continue
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-red-500 hover:text-red-400"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-400">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-red-500 hover:text-red-400"
              >
                Start a 7 days free trial
              </a>
            </p>
          </div>
        </div>
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#000"
      information="Tailwind"
      background="bg-[#000]"
      content={
        <div className="flex items-center justify-center">
          <div className=" p-8 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-center mb-6">
              <span className="inline-block bg-gray-200 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-400">
              Create a new account
            </h2>
            <p className="text-gray-100 text-center mb-6">
              Enter your details to register.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-100 text-sm font-semibold mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-100 focus:ring-blue-500"
                  required
                  placeholder="James Brown"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-100 text-sm font-semibold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-100 focus:ring-blue-500"
                  required
                  placeholder="hello@alignui.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-100 text-sm font-semibold mb-2"
                >
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-100 focus:ring-blue-500"
                  required
                  placeholder="••••••••"
                />
                <p className="text-gray-300 text-xs mt-1">
                  Must contain 1 uppercase letter, 1 number, min. 8 characters.
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Register
              </button>
              <p className="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept Apex Financial's{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms and Conditions
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Css"
      background="bg-gradient-to-r from-slate-950 to-slate-800"
      content={
        <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
          <div className="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto text-white">
              <div className="flex items-center space-x-5 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="auto"
                  viewBox="0 0 397 94"
                  fill="none"
                >
                  <path
                    d="M128.72 39.9429L138.387 5.10122C139.027 2.79347 141.139 1.19507 143.547 1.19507H150.18C153.843 1.19507 156.423 4.76704 155.253 8.21447L136.91 62.2543C136.175 64.417 134.134 65.8735 131.837 65.8735H122.921C120.624 65.8735 118.583 64.417 117.848 62.2543L99.5067 8.21605C98.3361 4.76861 100.917 1.19664 104.579 1.19664H111.213C113.621 1.19664 115.734 2.79504 116.373 5.10279L126.039 39.9444C126.415 41.2969 128.344 41.2969 128.72 39.9444V39.9429Z"
                    fill="white"
                  ></path>
                  <path
                    d="M195.231 67.0714C185.686 67.0714 177.916 64.163 171.922 58.3432C165.926 52.525 162.93 44.7741 162.93 35.0891V33.4151C162.93 26.9206 164.194 21.1118 166.719 15.9903C169.246 10.8704 172.825 6.92483 177.456 4.15364C182.088 1.38402 187.372 0 193.307 0C202.209 0 209.217 2.79011 214.33 8.36875C219.442 13.949 221.999 21.859 221.999 32.1004V33.8344C221.999 36.7727 219.602 39.1545 216.645 39.1545H182.207C181.32 39.1545 180.659 39.9711 180.846 40.8317C181.596 44.2855 183.195 47.1134 185.636 49.3155C188.463 51.8661 192.042 53.1413 196.374 53.1413C201.178 53.1413 205.229 51.9007 208.527 49.418C210.773 47.7266 213.935 47.9788 215.813 50.0675L217.472 51.9133C219.399 54.0587 219.291 57.369 217.163 59.3174C215.131 61.1774 212.751 62.7349 210.029 63.9896C205.578 66.042 200.645 67.0682 195.231 67.0682V67.0714ZM193.245 13.9285C189.795 13.9285 186.999 15.0902 184.854 17.4122C182.708 19.7341 181.335 23.057 180.733 27.3793H204.915V25.9984C204.834 22.1553 203.792 19.184 201.787 17.0827C199.781 14.9815 196.933 13.93 193.245 13.93V13.9285Z"
                    fill="white"
                  ></path>
                  <path
                    d="M270.517 11.6886C270.472 14.6553 267.858 17.004 264.712 16.9284C264.412 16.9205 264.119 16.9173 263.833 16.9173C261.298 16.9173 259.082 17.2137 257.185 17.8048C252.99 19.1132 250.197 22.8585 250.197 27.0232V60.5565C250.197 63.4948 247.67 65.8766 244.552 65.8766H237.509C234.391 65.8766 231.864 63.4948 231.864 60.5565V5.20833C231.864 2.99201 233.771 1.19657 236.121 1.19657H245.178C247.427 1.19657 249.287 2.84541 249.428 4.96085L249.531 6.54664C249.58 7.27648 250.573 7.55076 251.027 6.95806C254.568 2.32049 259.217 0.00170898 264.972 0.00170898C265.003 0.00170898 265.033 0.00170898 265.064 0.00170898C268.175 0.0143196 270.656 2.46552 270.611 5.39907L270.515 11.6902L270.517 11.6886Z"
                    fill="white"
                  ></path>
                  <path
                    d="M312.047 48.0009C312.047 45.8886 310.994 44.2256 308.889 43.0102C306.784 41.7949 303.405 40.7088 298.753 39.7519C283.273 36.5236 275.534 29.9881 275.534 20.1455C275.534 14.4061 277.929 9.61563 282.723 5.76937C287.514 1.92312 293.78 0 301.521 0C309.782 0 316.388 1.93416 321.341 5.79775C324.15 7.99043 326.163 10.5567 327.379 13.4934C328.832 17.0039 326.256 20.8612 322.435 20.8612H315.617C313.449 20.8612 311.573 19.485 310.784 17.4768C310.383 16.4553 309.782 15.5411 308.981 14.734C307.377 13.1198 304.869 12.3127 301.462 12.3127C298.535 12.3127 296.269 12.9701 294.665 14.2847C293.061 15.601 292.259 17.2734 292.259 19.3069C292.259 21.219 293.171 22.7638 294.997 23.9398C296.821 25.1157 299.898 26.1324 304.23 26.9884C308.56 27.8459 312.209 28.8106 315.178 29.8873C324.359 33.2354 328.953 39.0331 328.953 47.2821C328.953 53.1807 326.405 57.9523 321.314 61.5983C316.22 65.2444 309.644 67.0682 301.583 67.0682C296.129 67.0682 291.286 66.1019 287.056 64.1693C282.824 62.2367 279.507 59.5869 277.101 56.2183C276.29 55.0849 275.618 53.92 275.08 52.7252C273.513 49.2383 276.157 45.3085 280.001 45.3085H285.671C287.871 45.3085 289.867 46.6389 290.65 48.6803C291.22 50.162 292.137 51.3884 293.403 52.361C295.528 53.9957 298.375 54.8122 301.944 54.8122C305.272 54.8122 307.788 54.1848 309.493 52.9301C311.197 51.6753 312.05 50.0312 312.05 47.9977L312.047 48.0009Z"
                    fill="white"
                  ></path>
                  <path
                    d="M370.097 67.0714C360.551 67.0714 352.782 64.163 346.787 58.3432C340.791 52.525 337.795 44.7741 337.795 35.0891V33.4151C337.795 26.9206 339.059 21.1118 341.584 15.9903C344.111 10.8704 347.69 6.92483 352.322 4.15364C356.953 1.38402 362.237 0 368.173 0C377.074 0 384.082 2.79011 389.195 8.36875C394.307 13.949 396.864 21.859 396.864 32.1004V33.8344C396.864 36.7727 394.467 39.1545 391.511 39.1545H357.072C356.186 39.1545 355.524 39.9711 355.711 40.8317C356.462 44.2855 358.06 47.1134 360.502 49.3155C363.328 51.8661 366.907 53.1413 371.239 53.1413C376.043 53.1413 380.095 51.9007 383.392 49.418C385.638 47.7266 388.8 47.9788 390.678 50.0675L392.337 51.9133C394.264 54.0587 394.156 57.369 392.028 59.3174C389.996 61.1774 387.616 62.7349 384.894 63.9896C380.444 66.042 375.51 67.0682 370.097 67.0682V67.0714ZM368.111 13.9285C364.661 13.9285 361.864 15.0902 359.72 17.4122C357.573 19.7341 356.2 23.057 355.599 27.3793H379.781V25.9984C379.7 22.1553 378.657 19.184 376.653 17.0827C374.646 14.9815 371.799 13.93 368.111 13.93V13.9285Z"
                    fill="white"
                  ></path>
                  <path
                    d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"
                    fill="url(#paint0_linear_501_142)"
                  ></path>
                  <path
                    d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"
                    fill="url(#paint1_linear_501_142)"
                  ></path>
                  <path
                    d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"
                    fill="url(#paint2_linear_501_142)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_501_142"
                      x1="0"
                      y1="0"
                      x2="96.1684"
                      y2="87.6201"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#BF66FF"></stop>
                      <stop offset="0.510417" stop-color="#6248FF"></stop>
                      <stop offset="1" stop-color="#00DDEB"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_501_142"
                      x1="0"
                      y1="0"
                      x2="96.1684"
                      y2="87.6201"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#BF66FF"></stop>
                      <stop offset="0.510417" stop-color="#6248FF"></stop>
                      <stop offset="1" stop-color="#00DDEB"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_501_142"
                      x1="0"
                      y1="0"
                      x2="96.1684"
                      y2="87.6201"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#BF66FF"></stop>
                      <stop offset="0.510417" stop-color="#6248FF"></stop>
                      <stop offset="1" stop-color="#00DDEB"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="login"
                  className="font-semibold text-sm text-gray-400 pb-1 block"
                >
                  E-mail
                </label>
                <input
                  id="login"
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                />
                <label
                  htmlFor="password"
                  className="font-semibold text-sm text-gray-400 pb-1 block"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                />
              </div>
              <div className="text-right mb-4">
                <a
                  href="#"
                  className="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <button className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                    <svg
                      viewBox="0 0 24 24"
                      height="25"
                      width="25"
                      y="0px"
                      x="0px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
                        fill="#F44336"
                      ></path>
                      <path
                        d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
                        fill="#2196F3"
                      ></path>
                      <path
                        d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
                        fill="#FFC107"
                      ></path>
                      <path
                        d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
                        fill="#00B060"
                      ></path>
                      <path
                        opacity=".1"
                        d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"
                      ></path>
                      <polygon
                        opacity=".1"
                        points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25"
                      ></polygon>
                      <path
                        d="M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12 c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z"
                        fill="#E6E6E6"
                      ></path>
                      <path
                        opacity=".2"
                        d="M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z"
                        fill="#FFF"
                      ></path>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        y2="12"
                        y1="12"
                        x2="24"
                        x1="0"
                        id="LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1"
                      >
                        <stop
                          stop-opacity=".2"
                          stop-color="#fff"
                          offset="0"
                        ></stop>
                        <stop
                          stop-opacity="0"
                          stop-color="#fff"
                          offset="1"
                        ></stop>
                      </linearGradient>
                      <path
                        d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19 c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686 c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979 C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12 c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12 C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z"
                        fill="url(#LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1)"
                      ></path>
                      <path
                        opacity=".1"
                        d="M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7 c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5 c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374 l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z"
                      ></path>
                      <path
                        opacity=".2"
                        d="M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122 l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12 c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z"
                        fill="#FFF"
                      ></path>
                    </svg>
                    <span className="ml-8">Sign in with Google</span>
                  </button>
                  <button className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4">
                    <svg
                      viewBox="0 0 30 30"
                      height="30"
                      width="30"
                      y="0px"
                      x="0px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                    </svg>
                    <span className="ml-8">Sign in with Apple</span>
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Log in
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <a
                  href="#"
                  className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  or sign up
                </a>
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      }
    />,
    <CardForm
      key={generateKey()}
      iconColor="#fff"
      information="Tailwind"
      background="bg-gradient-to-b from-zinc-950"
      content={
        <div className="flex flex-col items-center justify-center dark">
          <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              Contact Form
            </h2>

            <form className="flex flex-wrap">
              <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Email"
              />
              <input
                type="number"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Company Name"
              />
              <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Job Title"
              />
              <input
                type="date"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Date of Birth"
              />
              <textarea
                name="message"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      }
    />,
    // <CardForm
    //   key={generateKey()}
    //   iconColor="#fff"
    //   information="Css"
    //   background="bg-gradient-to-r from-slate-950 to-slate-800"
    //   content={
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: `

    //     <style>

    //     </style>
    //   `,
    //       }}
    //     />
    //   }
    // />,
    // <CardForm
    //   key={generateKey()}
    //   iconColor="#fff"
    //   information="Css"
    //   background="bg-gradient-to-r from-slate-950 to-slate-800"
    //   content={
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: `

    //     <style>

    //     </style>
    //   `,
    //       }}
    //     />
    //   }
    // />,
    // <CardForm
    //   key={generateKey()}
    //   iconColor="#fff"
    //   information="Css"
    //   background="bg-gradient-to-r from-slate-950 to-slate-800"
    //   content={
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: `

    //     <style>

    //     </style>
    //   `,
    //       }}
    //     />
    //   }
    // />,
    // <CardForm
    //   key={generateKey()}
    //   iconColor="#fff"
    //   information="Css"
    //   background="bg-gradient-to-r from-slate-950 to-slate-800"
    //   content={
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: `

    //     <style>

    //     </style>
    //   `,
    //       }}
    //     />
    //   }
    // />,
    // <CardForm
    //   key={generateKey()}
    //   iconColor="#fff"
    //   information="Css"
    //   background="bg-gradient-to-r from-slate-950 to-slate-800"
    //   content={
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: `

    //     <style>

    //     </style>
    //   `,
    //       }}
    //     />
    //   }
    // />,
  ];

  const filterCards = () => {
    return cardsForm.filter((card) => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-1 gap-y-5">
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

export default CardsForm;
