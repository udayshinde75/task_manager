"use client";

import { useEffect, useState } from "react";
import Cards from "./benefits-cards";
import Link from "next/link";

export default function Main() {
  // Blur effect state
  const [isBlurred, setIsBlurred] = useState(true);
  // Timer state
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIsBlurred(false), 900);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Interesting overlay message while blurred */}
      <div
        className={`fixed inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
          isBlurred ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!isBlurred}
      >
        <div className="bg-black/60 dark:bg-black/70 px-8 py-6 rounded-2xl shadow-lg text-white text-2xl sm:text-3xl font-semibold text-center select-none">
          Getting things ready for you...
        </div>
      </div>
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/40 to-purple-200/20 rounded-full blur-3xl dark:from-blue-900/30 dark:to-purple-900/20" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-pink-200/30 to-yellow-100/10 rounded-full blur-2xl dark:from-pink-900/20 dark:to-yellow-900/10" />
      </div>
      <main
        className={`relative z-10 flex flex-col items-center gap-8 px-4 py-12 sm:py-24 w-full transition-all duration-700 ${
          isBlurred ? "blur-lg" : "blur-none"
        }`}
        style={{ filter: isBlurred ? "blur(16px)" : "none" }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground drop-shadow-sm">
          worqie
        </h1>
        <h2 className="text-xl mt-5 sm:text-2xl font-medium text-gray-700 dark:text-gray-300 text-center max-w-xl">
          Organize. Prioritize. Achieve.
        </h2>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 text-center max-w-lg">
          worqie helps you manage your tasks effortlessly, stay productive, and
          achieve your goals with a clean, distraction-free interface.
        </p>
        {/* Card Section */}
        <Cards />

        <Link
          href="#"
          className="mt-10 px-8 py-3 rounded-full bg-foreground text-background font-semibold text-lg shadow-md hover:scale-105 hover:bg-opacity-90 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-background"
        >
          Get Started
        </Link>
        {/* Timer message */}
      </main>
      <div className="mt-12 mb-2 text-center text-xs text-gray-600 dark:text-gray-400 animate-pulse select-none">
        You&apos;ve wasted {seconds} second{seconds === 1 ? "" : "s"} here.
        Click Get Started quickly!
      </div>
      <footer className="relative z-10 mt-auto py-6 text-xs text-gray-400 dark:text-gray-600 text-center w-full">
        &copy; {new Date().getFullYear()} worqie. All rights reserved.
      </footer>
    </>
  );
}
