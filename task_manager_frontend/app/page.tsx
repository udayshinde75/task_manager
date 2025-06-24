"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Rain effect component
function Rain() {
  const drops = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {drops.map((_, i) => {
        // Randomize left position, delay, and duration for each drop
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 0.8 + Math.random() * 0.7; // 0.8s to 1.5s
        const opacity = 0.15 + Math.random() * 0.25;
        const width = 1 + Math.random() * 1.5;
        const height = 16 + Math.random() * 18;
        return (
          <div
            key={i}
            className="absolute top-[-30px]"
            style={{
              left: `${left}%`,
              width: `${width}px`,
              height: `${height}px`,
              opacity,
              animation: `rain-fall ${duration}s linear ${delay}s infinite`,
              background: 'linear-gradient(to bottom, #60a5fa 60%, transparent)',
              borderRadius: '999px',
              zIndex: 10,
            }}
          />
        );
      })}
      <style>{`
        @keyframes rain-fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(110vh); }
        }
      `}</style>
    </div>
  );
}

const cards = [
  {
    title: "Stay Organized",
    description:
      "Easily categorize, prioritize, and track your tasks in one place. worqie keeps your workflow tidy and stress-free.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4" /><circle cx="12" cy="12" r="10" /></svg>
    ),
  },
  {
    title: "Boost Productivity",
    description:
      "Focus on what matters most. worqie helps you break down big goals into actionable steps and get more done every day.",
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4v-6a4 4 0 10-8 0v6" /></svg>
    ),
  },
  {
    title: "Achieve Goals",
    description:
      "Visualize your progress and celebrate your achievements. worqie motivates you to reach your milestones.",
    icon: (
      <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
    ),
  },
];

export default function Home() {
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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:via-[#171717] dark:to-[#232323] transition-colors duration-500">
      <Rain />
      {/* Interesting overlay message while blurred */}
      <div
        className={`fixed inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${isBlurred ? 'opacity-100' : 'opacity-0'}`}
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
        className={`relative z-10 flex flex-col items-center gap-8 px-4 py-12 sm:py-24 w-full transition-all duration-700 ${isBlurred ? 'blur-lg' : 'blur-none'}`}
        style={{ filter: isBlurred ? 'blur(16px)' : 'none' }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground drop-shadow-sm">worqie</h1>
        <h2 className="text-xl mt-5 sm:text-2xl font-medium text-gray-700 dark:text-gray-300 text-center max-w-xl">
          Organize. Prioritize. Achieve.
        </h2>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 text-center max-w-lg">
          worqie helps you manage your tasks effortlessly, stay productive, and achieve your goals with a clean, distraction-free interface.
        </p>
        {/* Card Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="group relative bg-white/80 dark:bg-[#18181b]/80 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {card.description}
              </p>
              {/* Animated background accent on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[-1]">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200/40 to-purple-200/20 rounded-full blur-2xl dark:from-blue-900/30 dark:to-purple-900/20" />
              </div>
            </div>
          ))}
        </div>
        <Link
          href="#"
          className="mt-10 px-8 py-3 rounded-full bg-foreground text-background font-semibold text-lg shadow-md hover:scale-105 hover:bg-opacity-90 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-background"
        >
          Get Started
        </Link>
        {/* Timer message */}
        
      </main>
      <div className="mt-12 mb-2 text-center text-xs text-gray-600 dark:text-gray-400 animate-pulse select-none">
          You&apos;ve wasted {seconds} second{seconds === 1 ? '' : 's'} here. Click Get Started quickly!
        </div>
      <footer className="relative z-10 mt-auto py-6 text-xs text-gray-400 dark:text-gray-600 text-center w-full">
        &copy; {new Date().getFullYear()} worqie. All rights reserved.
      </footer>
    </div>
  );
}
