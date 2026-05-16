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

const tickerItems = [...clients, ...clients];

export default function TrustStrip() {
  return (
    <div className="bg-navy-dark border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-3 md:gap-6 py-3 px-4 md:px-6">
        <span className="flex-shrink-0 text-teal-light text-xs md:text-sm font-semibold uppercase tracking-[2px]">
          Trusted by
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />
          <div className="flex animate-ticker hover:[animation-play-state:paused]">
            {tickerItems.map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-2 md:mx-4 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-base font-medium text-gray-300 whitespace-nowrap hover:bg-teal/10 hover:border-teal/40 hover:text-white transition-all"
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