import Rain from "@/components/LandingPage/rain";
import Main from "@/components/LandingPage/main";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:via-[#171717] dark:to-[#232323] transition-colors duration-500">
      <Rain />
      <Main />
    </div>
  );
}
