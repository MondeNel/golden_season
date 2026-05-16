const clients = [
  'NATO Allied Forces',
  'UN Humanitarian',
  'Red Cross Partners',
  'Singapore Civil Defence',
  '50+ Governments',
  'German Bundeswehr',
  'Italian Carabinieri',
  'RSAF Medical',
  'WFP Logistics',
  'ICRC Field Ops',
];

// Double the list for a seamless loop
const tickerItems = [...clients, ...clients];

export default function TrustStrip() {
  return (
    <div className="bg-navy-dark border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-6 py-4 px-6">
        {/* Label – larger, fixed position */}
        <span className="flex-shrink-0 text-teal-light text-sm md:text-base font-semibold uppercase tracking-[2px]">
          Trusted by
        </span>

        {/* Ticker container */}
        <div className="relative flex-1 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />

          {/* Scrolling row */}
          <div className="flex animate-ticker hover:[animation-play-state:paused]">
            {tickerItems.map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-4 bg-white/[0.04] border border-white/[0.08] rounded-lg px-6 py-2.5 text-base md:text-lg font-medium text-gray-300 whitespace-nowrap hover:bg-teal/10 hover:border-teal/40 hover:text-white transition-all"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}