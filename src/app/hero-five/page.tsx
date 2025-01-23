/* eslint-disable @next/next/no-img-element */

import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
    return (
        <div
            className="h-screen bg-cover bg-center flex flex-col"
            style={{
                backgroundImage: "url('/assets-5/bg.jpeg')",
            }}
        >
            <header className="flex justify-between items-center px-10 py-6">
                <img src="/assets-5/logo.png" alt="Logo" className="h-10 mr-36" />
                <nav className="flex-1 space-x-36 text-sm font-medium">
                    <a href="#" className="underline">
                        HOME
                    </a>
                    <a href="#" className="hover:underline">
                        ABOUT
                    </a>
                    <a href="#" className="hover:underline">
                        CASE STUDIES
                    </a>
                    <a href="#" className="hover:underline">
                        CAREERS
                    </a>
                </nav>
            </header>

            <main className="flex flex-col items-start text-center px-4 mt-4">
                <h1 className="text-6xl font-bold leading-tight text-left">
                    Crafting Powerful Brand <br /> Identities & Logo Designs
                </h1>
                <p className="mt-4 text-gray-600 text-2xl text-left">
                    One subscription and access to a full design <br /> team dedicated to your brand&apos;s success.
                </p>
                <button className="mt-8 px-6 py-3 border border-black ">
                    Book Your Free Discovery
                </button>
            </main>
            {/*  
        <div className="absolute bottom-10 right-10 flex items-center justify-center w-36 h-36 border-2 border-black rounded-full">
          <p className="text-sm text-center">
            <ArrowUpRightIcon className="w-10 m-auto" /> 
          </p>
        </div> */}

            <div className="absolute bottom-10 right-10  flex items-center justify-center">
                <svg
                    className="absolute w-48 h-40"
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                        />
                    </defs>
                    <text fill="black" fontSize="12.7" fontWeight="bold">
                        <textPath href="#circlePath" textAnchor="middle" startOffset="49%">
                            Projects starting at $15,000 -  Projects starting at $15,000 -
                        </textPath>
                    </text>
                </svg>
                <div className="relative flex items-center justify-center w-24 h-24 border-2 border-black rounded-full">
                    <ArrowUpRightIcon className="absolute w-8 h-8 text-black" />
                </div>
            </div>









        </div>
    );
}
