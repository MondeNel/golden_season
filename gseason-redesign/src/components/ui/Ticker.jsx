export default function Ticker({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3 md:py-4">
      <div className="absolute left-0 top-0 bottom-0 w-6 md:w-20 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 md:w-20 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />
      <div className="flex animate-ticker hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-2 md:mx-3 bg-white/[0.04] border border-white/[0.07] rounded-lg md:rounded-xl px-3 py-2 md:px-5 md:py-3 flex items-center gap-2 min-w-[130px] md:min-w-[160px] hover:bg-teal/10 hover:border-teal/40 transition-all cursor-pointer group"
          >
            <i className={`ti ${item.icon} text-sm md:text-xl text-dim group-hover:text-teal-light transition`}></i>
            <span className="text-[10px] md:text-sm text-gray-400 font-medium whitespace-nowrap group-hover:text-white transition">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}