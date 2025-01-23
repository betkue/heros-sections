/* eslint-disable @next/next/no-img-element */

import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Header from "./header";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('/assets-5/bg.jpeg')",
      }}
    >
    <Header/>
      <main className="flex flex-col items-start text-left px-4 mt-8 md:mt-16 space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Crafting Powerful Brand <br /> Identities & Logo Designs
        </h1>
        <p className=" md:text-lg lg:text-2xl">
          One subscription and access to a full design <br /> team dedicated to your brand&apos;s success.
        </p>
        <button className="mt-4 px-4 py-2 md:mt-8 md:px-6 md:py-3 border border-black  md:text-base">
          Book Your Free Discovery
        </button>
      </main>

      <div className="absolute bottom-10 right-10 flex items-center justify-center">
        <svg
          className="absolute w-40 h-36 md:w-40 md:h-48"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text fill="black" fontSize="12.5" fontWeight="bold">
            <textPath href="#circlePath" textAnchor="middle" startOffset="49%">
              Projects starting at $15,000 - Projects starting at $15,000 -
            </textPath>
          </text>
        </svg>
        <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 border-2 border-black rounded-full">
          <ArrowUpRightIcon className="absolute w-6 h-6 md:w-8 md:h-8 text-black" />
        </div>
      </div>
    </div>
  );
}
