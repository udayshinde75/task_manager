export default function Cards() {
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
    return(
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
          {cards.map((card) => (
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
    )

}