'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import userData from "../constants/data";


export default function Navbar() {
  const router = useRouter();
  //console.log(router.asPath);
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (

    <div className="w-full mx-auto px-4 md:px-24 md:py-5 z-50 shadow dark:bg-gray-500 dark:border-b dark:border-gray-600">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl text-pink-600 dark:text-gray-100">
              {userData.name}
            </h1>
            {/*}
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {userData.designation}
            </p>
            */}
          </Link>
        </div>
        

       <nav className="space-x-8 text-lg md:flex dark:text-gray-100 ">
        
            <Link href="/projects">
              <span className={pathname === '/projects' ? 'active' : ''}>Projects</span>
            </Link>

            {/*}
            <a href="/Cindy_Ogidi_Resume.pdf" target="_blank"> Resume </a>
            */}
            <a href="https://drive.google.com/file/d/1lGK6FkJRiJNi3J6OzXIMiOSB5trONSXI/view?usp=sharing" target="_blank"> Resume </a>
      
        </nav>

        <div className="space-x-4 flex flex-row items-center">
         
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
        
      </div>
    
    </div>
  );
}